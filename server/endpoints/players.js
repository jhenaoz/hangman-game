const Loki = require('lokijs');
const express = require('express');

const db = new Loki('hangman.json');
const players = db.addCollection('players');
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', (request, response) => {
  const result = players.insert(request.body);
  response.send({ id: result.$loki, word: result.playerName });
});

router.get('/', (request, response) => {
  response.send(players.find());
});

router.get('/:id', (request, response) => {
  response.send(players.find({ $loki: Number(request.params.id) }));
});

module.exports = router;
