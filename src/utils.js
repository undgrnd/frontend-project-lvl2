const isObject = (entity) => typeof entity === 'object' && entity !== null;
const isPrimitive = (entity) => entity !== Object(entity);

module.exports = { isObject, isPrimitive };
