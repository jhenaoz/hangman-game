const Loki = require('lokijs');
const express = require('express');

const db = new Loki('hangman.json');
const words = db.addCollection('words');
let count = 2;
words.insert({ word: 'hangman', id: 0 });
words.insert({ word: 'dog', id: 1 });

// eslint-disable-next-line new-cap
const router = express.Router();
router.post('/', (request, response) => {
  const word = {
    id: count,
    word: request.body.word
  };
  // eslint-disable-next-line no-plusplus
  count++;
  const result = words.insert(word);
  response.send({ id: result.$loki, word: result.word });
});

router.get('/', (request, response) => {
  response.send(words.find());
});

router.get('/:id', (request, response) => {
  const word = words.find({ id: Number(request.params.id) });
  response.send(word);
});

module.exports = router;
