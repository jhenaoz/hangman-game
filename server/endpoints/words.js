const Loki = require('lokijs');
const express = require('express');

const db = new Loki('hangman.json');
const words = db.addCollection('words');

// eslint-disable-next-line new-cap
const router = express.Router();
router.post('/', (request, response) => {
  const result = words.insert(request.body);
  response.send({ id: result.$loki, word: result.word });
});

router.get('/', (request, response) => {
  response.send(words.find());
});

router.get('/:id', (request, response) => {
  response.send(words.find({ $loki: Number(request.params.id) }));
});

module.exports = router;
