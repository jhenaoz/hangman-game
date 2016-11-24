(function(){
    'use strict';

    angular.module('hangman').service('GameService', GameService)

    /** @ngInject */
    function GameService(WordsService){
        var alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s',
        'd','f','g','h','j','k','l','ñ','z','x','c','v','b','n','m'];
        
        this.round = 0;
        this.keyboard = [];
        this.errorsNumber = 0;
        this.initGame = initGame;
        this.wordToGuess = '';

        function initGame() {
            this.errorsNumber = 0;
            this.keyboard = [];
            for (var i = 0; i <= alphabet.length ; i++) {
                this.keyboard.push({letter: alphabet[i], used:false});
            }
            var self = this;
            return getRandomWord().then(function(word){
                self.wordToGuess = word;
            });
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomWord() {
            return WordsService.getAllWords().then(function(words) {
              return WordsService.getWord(getRandomInt(0, words.data.length - 1)).then(function(word){
                  return word.data[0].word;
              });
            });
        }

        function guessAttempt(letter) {
            if (this.wordToGuess.indexOf(letter) > 0) {
                this.errorsNumber++;
                if (errorsNumber === 5) {
                    throw('Max guess attempts reached');
                }
            }
            this.keyboard[this.keyboard.indexOf(letter)].used = true;
        }

    }

}());