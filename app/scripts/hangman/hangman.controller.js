(function(){
    'use strict';
    angular.module('hangman').controller('HangmanController', HangmanController)

    /** @ngInject */
    function HangmanController(GameService){
        var vm = this;
        vm.keyboard = [];
        vm.wordToGuess = '';
        init();

        function init() {
            GameService.initGame().then(function(){
                vm.keyboard = GameService.keyboard;
                vm.wordToGuess = GameService.wordToGuess;
            });
        }

    }
}());