module.exports = {
  extends: "react-app",
  plugins: ["simple-import-sort"],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    "simple-import-sort/sort": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^@?\\w"],
          [
            "^@components(/.*|$)|@images(/.*|$)|@stores(/.*|$)|@constants(/.*|$)|@helpers(/.*|$)",
          ],
          ["^[^.]"],
          ["^\\."],
        ],
      },
    ],
  },
};
