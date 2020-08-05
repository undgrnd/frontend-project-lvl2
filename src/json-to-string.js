// const isObject = (entity) => typeof entity === 'object' && entity !== null;

const getMathSignLiteral = (action) => {
  switch (action) {
    case 'deleted': {
      return '-';
    }
    case 'not modified': {
      return ' ';
    }
    case 'added': {
      return '+';
    }
    default: {
      return ' ';
    }
  }
};


const jsonToString = (json) => {
  if (!json) {
    return '';
  }

  const string = json.map((prop) => `${getMathSignLiteral(prop.action)} ${prop.name}: ${prop.value}\n`).join('');
  return `{\n${string}}`;
};

export default jsonToString;
