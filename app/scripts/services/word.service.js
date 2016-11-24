(function(){
    'use strict';
    angular.module('hangman').service('WordsService', WordsService)

    /** @ngInject */
    function WordsService($http){
        this.getAllWords = function() {
            return $http.get('/api/words');
        };;

        return this;
    }

}());