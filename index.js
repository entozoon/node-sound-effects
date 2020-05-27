const player = require("node-wav-player");
const generatedDir = `${__dirname}/generated`;
const { createSamplesUpload, createSamplesChange } = require("./createSamples");
const saveWav = require("./saveWav");
class SoundEffects {
  constructor() {
    // Create the various sound effects sets of samples and save as wavs
    // This could be neater.. a CreateSamples class perhaps, when there are a bunch. Move to TS too
    const samplesUpload = createSamplesUpload();
    saveWav(samplesUpload, `${generatedDir}/upload.wav`);
    const samplesChange = createSamplesChange();
    saveWav(samplesChange, `${generatedDir}/change.wav`);
    this.ready = true;
  }
  play(name) {
    const path = `${generatedDir}/${name}.wav`;
    return player.play({ path }).catch((error) => {
      console.error("node-sound-effects error:", error);
    });
  }
}
module.exports = new SoundEffects();
