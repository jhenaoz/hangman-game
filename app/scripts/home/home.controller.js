(function(){
    'use strict';

    angular
        .module('hangman')
        .controller('HomeController', HomeController)

    /** @ngInject */
    function HomeController(WordsService){
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
            console.log(vm);
        };
    }
}());
