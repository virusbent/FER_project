angular.module('FER_app')
    .filter('filterType', function(){
        return function(room, type){
            if(room.type === type){
                return room;
            }
            else {
                return
            }
        }
    });
