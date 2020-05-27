const tone = require("tonegenerator");
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
const createSamplesChange = () => {
  const lengthInSecs = 0.05;
  const shape = "triangle";
  const tones = [
    tone({ shape, lengthInSecs, freq: noteToFrequency("b4"), volume: 10 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("c4"), volume: 12 }),
    tone({ shape, lengthInSecs, freq: noteToFrequency("b4"), volume: 10 }),
  ];
  return [].concat.apply([], tones);
};
module.exports = { createSamplesUpload, createSamplesChange };
