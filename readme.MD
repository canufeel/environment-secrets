# Environment-secrets for nodejs

## Install

```
npm install environment-secrets
```

## Usage

```
// environment.js
import {
 generateSecretsOrExtWithDefault,
 wrapWithPropNames
} from 'environment-secrets';

let extConfig;
try {
  extConfig = require('./secrets'); // import secrets.json if available
} catch (err) {
  extConfig = {};
}

const secretsOrExtWithDefault = generateSecretsOrExtWithDefault(
  extConfig
);

const props = {
  MY_ENV_PROP: secretsOrExtWithDefault('hello world') // specified environment variable and default for it
  OTHER_ENV_PROP: 100
};

export default wrapWithPropNames(props);

```

1. This module first would look for the presence of property by its name in `extConfig` local json file - `secrets.json` in example. 
2. If variable was not found it would fallback to trying to get variable by name from current environment - `process.env['MY_ENV_PROP']` etc.
3. If variable was not found in environment we stick to default value which can be specified as an argument to `secretsOrExtWithDefault`.
