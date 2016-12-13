angular.module('FER_app')
    .factory('roomFactory', function(){
        console.log('> roomFactory initialised');

        var factory      = {};
        var roomID       = '';
        var editRoomID   = '';
        var currentRoom  = {};
        var currentRoomArr  = [];

        // factory.setRoomID = function(id){
        //     roomID = id;
        // }
        factory.getRoomId = function(){
            return roomID;
        }

        factory.getEditRoomID = function(){
            return editRoomID;
        }
        // returns true. it will serve as flag for the Ctrl to redirect to edit page.
        factory.setEditRoomID = function(id){
            editRoomID = id;
            return true;
        }
        factory.setCurrentRoom = function(data){
            roomID = data.id_literal;
            //currentRoom = data;
            // console.log('> roomFactory: this room has been saved (', currentRoom, ')');
            //-------
            currentRoomArr.push(data);
            console.log('> roomFactory: this room has been saved (', data, ')');
        }
        factory.getCurrentRoom = function(id){
            var numberOfRooms = currentRoomArr.length;
            if(numberOfRooms == 1){
                return currentRoomArr[0];
            }else {
                for(var i=0; i<numberOfRooms; i++){
                    if(currentRoomArr[i].id_literal === id){
                        console.log(currentRoomArr[i]);
                        return currentRoomArr[i];
                    }else {
                        return null
                    }
                }
            }
        }

        factory.deleteRoomFromOrder = function(id){
            console.log('room to delete: ', id);
            for(var i=0; i<currentRoomArr.length; i++){
                if(currentRoomArr[i].id_literal === id){
                    console.log('**********', currentRoomArr[i]);
                    currentRoomArr.splice(i, i+1);
                    console.log('****', currentRoomArr);
                    return true;
                }else {
                    return false;
                }
            }
        }

        return factory;
    })
