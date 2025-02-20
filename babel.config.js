module.exports = {
    "presets": [
      ["@babel/preset-env", { "targets": { "node": "current" } }],
      "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "module-resolver",
        {
          "alias": {
            "@domain": "./src/domain",
            "@infra": "./src/infra"
          }
        }
      ],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
}