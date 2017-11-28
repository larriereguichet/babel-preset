module.exports = function() {
  return {
    presets: [
      require("./index.js"),
      require("@babel/preset-react")
    ]
  }
}
