module.exports = function() {
  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          "targets": {
            "node": "current"
          },
          "debug": false
        }
      ]
    ],
    plugins: [
      require("@babel/plugin-proposal-class-properties"),
      require("@babel/plugin-proposal-object-rest-spread")
    ]
  }
}
