angular.module('FER_app')
    .directive('roomFullView', function() {
        return{
            restrict    : 'E',
            replace     : true,
            scope       : {
                data        : "=roomData",
                handleThisRoom: "="
            },
            templateUrl : './app/shared/directives/room/room.big/room.big.view.html',
            controller  : function (NgMap, $scope){
                console.log('roomFullView: hi!');
                //data is all the dynamic information about the room
                console.log('roomFullView: ', $scope.data);
                // google maps
                NgMap.getMap().then(function(map) {
                console.log(map.getCenter());
                // console.log('markers', map.markers);
                // console.log('shapes', map.shapes);
              });
          }
        }
    });
