const path = require("path");

module.exports = {
  apps: [
    {
      name: "karbon-admin",
      script: "./apps/karbon-admin/index.js",
      env: {
        NODE_ENV: "production",
        API_KEY: "SOME-CRAZY-RANDO",
        PORT: 5050,
        DOWNLOAD_FOLDER: path.join(__dirname, "temp", "downloads") + path.sep
      }
    },
    {
      name: "inbox",
      script: "./apps/inbox/index.js",
      env: {
        NODE_ENV: "production",
        PORT: 5055
      }
    }
  ]
};
