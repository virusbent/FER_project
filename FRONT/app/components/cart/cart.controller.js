angular.module('FER_app')
    .controller('cartCtrl', ["$scope", "$state", "roomFactory", "buyFinalService", function($scope, $state, roomFactory, buyFinalService){
        console.log('cart controller is initialised');
        var cc = this;

        cc.orderedRoom  = {};

        cc.pullRoomData = function(){
            cc.orderedRoom = roomFactory.getCurrentRoom(roomFactory.getRoomId());
            console.log('cart > got : ', cc.orderedRoom);
        };
        cc.pullRoomData();

    // CART ACTION BUTTONS
        cc.payForOrder = function(event){
            console.log('pay - ', event.target.id);
            buyFinalService.handleFinalOrder();
        };

        cc.editThisOrder = function(event){
            flag = roomFactory.setEditRoomID(event.target.id);
            if (flag === true){
                $state.go('orderReview');
            }else {
                console.log('>roomFactory.setEditRoomID -- ERROR!');
            }
        };

        cc.deleteThisOrder = function(event){
            //send only id of the room
            var isSuccess = roomFactory.deleteRoomFromOrder(event.target.id);
            if(true)
                $state.reload();
            else
                alert('couldnt delete the room from the cart');
        };
    }]);
