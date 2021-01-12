const soundEffects = require("./index.js");
const playStuff = async () => {
  await soundEffects.play("error");
  await soundEffects.play("change");
  await soundEffects.play("upload");
};
playStuff().then(() => {
  console.log("Finished playing stuff");
});
