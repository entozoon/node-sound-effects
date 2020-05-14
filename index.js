const noteToFrequency = require("notes-to-frequencies");
const tone = require("tonegenerator");
const header = require("waveheader");
const fs = require("fs");
const player = require("node-wav-player");
const createSamplesUpload = () => {
  const lengthInSecs = 0.05;
  const shape = "triangle"; // triangle, square, sine, saw
  const tones = [
    tone({ shape, lengthInSecs, freq: noteToFrequency("c4"), volume: 3 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("e4"), volume: 7 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("f4"), volume: 12 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("g4"), volume: 16 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("e4"), volume: 18 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("f4"), volume: 20 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("g4"), volume: 16 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("b5"), volume: 10 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("c5"), volume: 5 }),
  ];
  return [].concat.apply([], tones);
};
const saveWav = (samples, filename) => {
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
    saveWav(samplesUpload, "upload.wav");
    this.ready = true;
  }
  play(name) {
    const path = `./${name}.wav`;
    return player.play({ path }).catch((error) => {
      console.error("node-sound-effects error:", error);
    });
  }
}
module.exports = new SoundEffects();
