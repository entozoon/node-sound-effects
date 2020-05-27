const fs = require("fs");
const header = require("waveheader");
const getDirName = require("path").dirname;
const dev = process.argv[2] && process.argv[2] == "--dev" ? true : false;
const saveWav = (samples, filename) => {
  // If wav exists, be reet (unless dev)
  if (!dev && fs.existsSync(filename)) return;
  // Create generated dir
  if (!fs.existsSync(getDirName(filename))) {
    fs.mkdirSync(getDirName(filename));
  }
  // Stream write the wav
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
module.exports = saveWav;
