
const isUndef = value => typeof value === 'undefined';

const generateSecretsOrExtWithDefault = (
  extConfig = {}
) => (
  def
) => (
  propName
) => {
  let toReturn;
  if (!isUndef(extConfig[propName])) {
    toReturn = extConfig[propName];
  } else if (!isUndef(process.env[propName])) {
    toReturn = process.env[propName];
  } else if (!isUndef(def)) {
    toReturn = def;
  } else {
    toReturn = '';
  }
  return toReturn;
};

const wrapWithPropNames = obj => Object.keys(obj)
  .reduce(
    (
      acc,
      key
    ) => typeof obj[key] === 'function'
  ? Object.assign({}, acc, { [key]: obj[key](key) })
  : Object.assign({}, acc, { [key]: obj[key] }),
  {}
);

module.exports = {
  generateSecretsOrExtWithDefault,
  wrapWithPropNames
};
