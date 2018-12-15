# WorkClout's JavaScript Linting Rules
Welcome to WorkClout's JavaScript Lint configuration. Here you will find lint rules for the following types of projects:
* Jest
* React projects
* React Native projects
* Node.js projects

## Prettier
We are actively integrating Prettier into our lint rules. Currently, Prettier is ready for use in all frontend projects (i.e. React or React Native). Prettier support for Node projects is still underway. See examples below.

## How to Use
This project treats all dependencies as first-class citizens. What this means is that, for simplicity's sake, eslint installs all peer dependencies as regular dependencies. For now, the only dependency you'll need to install other than eslint-config-workclout is eslint itself. **This will probably change in the future as it's not a best practice.**

### Install Packages
```bash
yarn add eslint eslint-config-workclout
```

### Add it to your .eslintrc
Node.js project example:
```json
{
  "extends": [
    "workclout",
    "workclout/rules/node"
  ]
}
```

Node.js with Jest example:
```json
{
  "extends": [
    "workclout/rules/node",
    "workclout/rules/jest"
  ]
}
```

React with Jest example:
```json
{
  "extends": [
    "workclout/rules/react",
    "workclout/rules/jest",
    "workclout/rules/prettier"
  ]
}
```

### Add "lint" and "format" Scripts to package.json
```json
{
  "scripts": {
    "lint": "eslint ./",
    "format": "eslint --fix ./"
  }
}
```

## Credit Where Credit is Due
These lint rules are heavily inspired by [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript).
