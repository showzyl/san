module.exports = {
  presets: [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": [
          "> 5%",
          "iOS >= 6",
          "Android >= 2.3",
          "ExplorerMobile >= 10"
        ]
      }
    }],
  ]
}
