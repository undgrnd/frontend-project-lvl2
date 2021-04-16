const getDifferenceSign = (action) => {
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
    case 'object modified': {
      return ' ';
    }
    default: {
      return ' ';
    }
  }
};

module.exports = getDifferenceSign;
