module.exports = {
  presets: [
    [
      require("@babel/preset-env"),
      {
        "targets": {
          "node": "current"
        },
        "debug": false
      }
    ],
    require("@babel/preset-react")
  ],
  ignore: ["node_modules"],
  plugins: [
    require("@babel/plugin-proposal-class-properties"),
    require("@babel/plugin-proposal-object-rest-spread")
  ]
};
