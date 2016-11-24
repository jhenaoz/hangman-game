(function(){
    'use strict';

    angular.module('hangman').controller('HomeController', HomeController)

    /** @ngInject */
    function HomeController(WordsService, PlayerService, $state){
        var vm = this;
        vm.player = {};
        vm.words = [];
        vm.submit = submit;
        init();
        
        function init() {
            WordsService.getAllWords().then(function(response){
                vm.words = response.data;
            });
        }

        function submit(){
            PlayerService.createPlayer(vm.player).then(function(response) {
                console.log(response);
                $state.go('hangman');
            });
        };
    }
}());
