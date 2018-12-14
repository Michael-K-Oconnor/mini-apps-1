module.exports = {
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "rules": {
        "no-use-before-define": 0,
        "no-undef": 0,
        "prefer-destructuring" : 0,
        "no-restricted-syntax" : 0,
        "react/no-unused-state": 1,
        "react/prop-types" : 0
    },
};