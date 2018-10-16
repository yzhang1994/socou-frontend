module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  "rules": {
    "no-console": [0],
    "semi": [0],
    "react/jsx-filename-extension": [0],
    "import/prefer-default-export": [0],
    "class-methods-use-this": [0],
    "react/prefer-stateless-function": [0]
  },
}
