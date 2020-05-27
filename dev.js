const soundEffects = require("./index.js");
const playStuff = async () => {
  await soundEffects.play("change");
  await soundEffects.play("upload");
  console.log("Finished starting to play stuff");
};
playStuff();
