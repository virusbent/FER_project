angular.module('FER_app')
    .service("roomService", ["$http", function($http){
        var service = this;

        service.getRoomData = function(){
            console.log('> getRoomData service initialised');
            return $http({
                method  : 'GET',
                url     : 'http://localhost:3000/api/erooms/get_room_data',
                headers : {"Content-Type":"application/x-www-urlencoded"}
            });
        }

        service.addRoomData = function(payload){
            console.log('> addRoomData service initialised');
            return $http({
                method  : 'POST',
                url     : 'http://localhost:3000/api/erooms/add_new',
                headers : {"Content-Type":"application/x-www-urlencoded"},
                data    : payload
            });
        }
        
        
        
        return service;
    }]);
