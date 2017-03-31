# Argentina 86

[![Greenkeeper badge](https://badges.greenkeeper.io/nescalante/argentina-86.svg)](https://greenkeeper.io/)

Argentina 86 players data app used as an introduction to Node

## Getting started

- Install node from [https://nodejs.org/](https://nodejs.org/) (version 4.2.2 is ok)
- Create a new folder and once in that folder run `npm install argentina-86`
- Create a new file (called `index.js` for example) with this content:

```js
var arg86 = require("argentina-86");

arg86.getPlayers()
  .then(function(data) {
    var names = data.map(function (p) { return p.name; });
    console.log(names);
  });
```

- Run it into a terminal with `node index.js`
- You can now start to study the entire squad
