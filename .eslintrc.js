module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": [
    "standard",
    "promise",
    "react",
    "react-native"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "env": {
    "react-native/react-native": true
  }
};