const getMathSignLiteral = (action) => {
  switch (action) {
    case 'deleted': {
      return '-';
    }
    case 'not changed': {
      return ' ';
    }
    case 'added': {
      return '+';
    }
    default: {
      break;
    }
  }

  return undefined;
};


export default (json) => {
  if (!json) {
    return '';
  }

  const string = json.map((prop) => `${getMathSignLiteral(prop.action)} ${prop.name}: ${prop.value}\n`).join('');
  console.log(`{\n${string}\n}`);
  return `{\n${string}}`;
};
