# Node Sound Effects

Play various sound effects within your node scripts.

## "Aren't there a million of these?"

No actually, they either don't offer Windows support, or are completely abandoned such as [node-sfx](https://github.com/adriancooney/node-sfx), [play.js](https://github.com/Marak/play.js) and various beep packages.

## Usage

```bash
npm i node-sound-effects
```

```js
const soundEffects = require("node-sound-effects");
soundEffects.play("upload");
```

## Sound Effects list

| Name   | Description            |
| ------ | ---------------------- |
| upload | Ascending major melody |
