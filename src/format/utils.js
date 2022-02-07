const getActionSign = (action) => {
  switch (action) {
    case 'added':
    case 'added while modifying': {
      return '+';
    }
    case 'deleted':
    case 'deleted while modifying': {
      return '-';
    }
    case 'object modified': {
      return ' ';
    }
    case 'not modified': {
      return ' ';
    }
    default: {
      return null;
    }
  }
};

const getActionDescription = (action) => {
  switch (action) {
    case 'added': {
      return (key, value) => `Property ${key} was added with value: ${value}`;
    }
    case 'deleted': {
      return (key) => `Property ${key} was removed`;
    }
    case 'modified': {
      return (key, newValue, oldValue) => `Property ${key} was updated. From ${oldValue} to ${newValue}`;
    }
    default: {
      return ' ';
    }
  }
};

module.exports = { getActionSign, getActionDescription };
