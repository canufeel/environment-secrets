
const generateSecretsOrExtWithDefault = (extConfig = {}) => (def) => (propName) => extConfig[propName] || process.env[propName] || def || '';

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
