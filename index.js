const noteToFrequency = require("notes-to-frequencies");
const header = require("waveheader");
const fs = require("fs");
const player = require("node-wav-player");
const generatedDir = `${__dirname}/generated`;
const { createSamplesUpload, createSamplesChange } = require("./createSamples");
const saveWav = (samples, filename) => {
  if (fs.existsSync(filename)) return;
  const file = fs.createWriteStream(filename);
  file.write(
    header(samples.length, {
      bitDepth: 8,
    })
  );
  // -128->127 to 0->255
  const data = Uint8Array.from(samples, (val) => val + 128);
  buffer = Buffer.from(data);
  file.write(buffer);
  file.end();
};
class SoundEffects {
  constructor() {
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
