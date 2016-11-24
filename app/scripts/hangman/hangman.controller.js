(function(){
    'use strict';
    angular.module('hangman').controller('HangmanController', HangmanController)

    /** @ngInject */
    function HangmanController(GameService){
        var vm = this;
        vm.keyboard = [];
        vm.wordToGuess = '';
        vm.errorsNumber = 0;
        vm.guessLetter = guessLetter;
        vm.getLetter = getLetter;
        init();

        function init() {
            GameService.initGame().then(function(){
                vm.keyboard = GameService.keyboard;
                vm.wordToGuess = GameService.wordToGuess;
                vm.errorsNumber = GameService.errorsNumber;
            });
        }

        function guessLetter(key) {
            key.used = true;
            GameService.guessAttempt(key.letter);
            vm.errorsNumber = GameService.errorsNumber;
        }
        
        function getLetter(letter){
            return GameService.getLetter(letter);
        }
    }
}());