(function(){
    'use strict';

    angular
        .module('hangman')
        .service('PlayerService', PlayerService)

    /** @ngInject */
    function PlayerService($http){
        this.createPlayer = createPlayer;

        function createPlayer(player) {
            return $http.post('/api/players', player);
        }
    }

}())
;