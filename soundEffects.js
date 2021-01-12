const tone = require("tonegenerator");
const noteToFrequency = require("notes-to-frequencies");
module.exports = () => [
  {
    name: "upload",
    createSamples: () => {
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
    },
  },
  {
    name: "change",
    createSamples: () => {
      const lengthInSecs = 0.05;
      const shape = "triangle"; // triangle, square, sine, saw
      const tones = [
        tone({ shape, lengthInSecs, freq: noteToFrequency("b4"), volume: 6 }),
        tone({ shape, lengthInSecs, freq: noteToFrequency("c4"), volume: 8 }),
        tone({ shape, lengthInSecs, freq: noteToFrequency("b4"), volume: 6 }),
      ];
      return [].concat.apply([], tones);
    },
  },
  {
    name: "error",
    createSamples: () => {
      const lengthInSecs = 0.03;
      const shape = "triangle"; // triangle, square, sine, saw
      const tones = [
        // prettier-ignore
        tone({ shape, lengthInSecs: 0.03, freq: noteToFrequency("e5"), volume: 16 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 20 }),
        tone({ shape, lengthInSecs: 0.03, freq: noteToFrequency("e5"), volume: 20 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 20 }),
        tone({ shape, lengthInSecs: 0.03, freq: noteToFrequency("e5"), volume: 20 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 20 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 20 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 15 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 12 }),
        tone({ shape, lengthInSecs: 0.09, freq: noteToFrequency("b5"), volume: 13 }),
      ];
      return [].concat.apply([], tones);
    },
  },
];
