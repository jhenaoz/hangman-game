(function(){
    'use strict';
    angular.module('hangman').service('WordsService', WordsService)

    /** @ngInject */
    function WordsService($http){
        this.getAllWords = function() {
            return $http.get('/api/words');
        };

        this.getWord = function(id) {
            return $http.get('/api/words/' + id);
        }

        return this;
    }

}());