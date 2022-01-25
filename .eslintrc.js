module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        htmlWhitespaceSensitivity: "ignore",
      },
    ],
    "vue/no-multiple-template-root": "off",
    "no-unused-vars": "off",
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
};
