var service = require('./service.js');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var app = new EventEmitter();

app.updatePlayerName = function (number, playerName) {
  app.emit('updatePlayerName', number, playerName);

  return service.getFile()
    .then(function (players) {
      var player = data.filter(function (p) {
        return p.number === number;
      })[0];

      player.name = playerName;

      return service.updateFile(data);
    })
    .then(function () {
      return number + ' player was updated with name ' + playerName;
    })
    .then(function (text) {
      console.log(text);
    })
    .catch(function (err) {
      console.error(err);
    });
};

app.getPlayers = function (search) {
  app.emit('getPlayers', search);

  return service.readFile()
    .then(function (data) {
      var result = data;

      if (search) {
        result = _.filter(data, function (p) {
          var regExp = new RegExp(search, 'i');
          return regExp.test(p.name);
        });
      }

      return result;
    });
};

app.getPlayer = function (number) {
  return app.getPlayers()
    .then(function (players) {
      return _.find(players, { number: number });
    });
};

module.exports = app;