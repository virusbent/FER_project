angular.module('FER_app')
    .directive('roomPreview', function() {
        return{
            restrict    : 'E',
            replace     : true,
            templateUrl : './app/shared/directives/room/room.small/room.small.view.html',
            controller  : function (){
                console.log('roomPreview: hi!');
            }
        }
    });

// templateUrl : 'shared/room/room.small/room.small.view.html',
