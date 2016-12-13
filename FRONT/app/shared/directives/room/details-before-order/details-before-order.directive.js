angular.module('FER_app')
    .directive('ferRoomDetailsBeforeOrder', function(){
        return{
            restrict    : 'E',
            scope       : { roomData: "=" },
            templateUrl : './app/shared/directives/room/details-before-order/details-before-order.view.html',
            link        : function(scope, element, attrs){
                console.log('ferRoomDetailsBeforeOrder directive is initialised');
                console.log('ferRoomDetailsBeforeOrder: ', scope.roomData);
            }
        };
    });
