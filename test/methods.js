var arg86 = require('../src');
var assert = require('assert');

describe('api', function () {
  describe('getPlayers method', function () {
    it('should return all players', function (done) {
      arg86.getPlayers().then(function (data) {
          assert.equal(data.length, 22);
          done();
        });
    });

    it('should return players by criteria', function (done) {
      arg86.getPlayers('Sergio')
        .then(function (data) {
          assert.equal(data.length, 2);
          done();
        });
    });

    it('should emit getPlayers event', function (done) {
      var searchFromEvent;

      arg86.on('getPlayers', function (search) {
        searchFromEvent = search;
      });

      arg86.getPlayers('Sergio')
        .then(function (data) {
          assert.equal(data.length, 2);
          assert.equal(searchFromEvent, 'Sergio');
          done();
        });
    });
  });

  describe('getPlayer method', function () {
    it('should return a player', function (done) {
      arg86.getPlayer(10)
        .then(function (data) {
          assert.equal(data.name, 'Diego Maradona');
          done();
        });
    });
  });
});