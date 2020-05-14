const soundEffects = require("./index.js");
soundEffects.play("upload").then(() => {
  console.log("Finished starting to play stuff");
});
