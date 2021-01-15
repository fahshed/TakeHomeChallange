const fs = require("fs");
const app = require("./src/app");

fs.readdir("./data", (err, files) => {
  files.forEach(async (file) => {
    await app.main(file);
    console.log("\n");
  });
});
