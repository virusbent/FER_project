angular.module('FER_app')
    .controller('homeCtrl', function () {
        console.log('> home controller initialised!');
        var hc  = this;
        hc.anon = {
            name    : 'Adventurer',
            isAnon  : true
        };

        // dummy data for testing
        hc.allRoomsData     = [
            {
            room_id : '1',
            id_literal: 'room1',
            address : 'address ADDRESS',
            tel     : '123-456-7890',
            details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
            room_id : '2',
            id_literal: 'room2',
            address : 'address2 ADDRESS2 address2 ADDRESS2',
            tel     : '123-456-7890-123-456-7890',
            details : 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
            room_id : '3',
            id_literal: 'room3',
            address : 'address3 ADDRESS3 address3',
            tel     : '123-333-3333',
            details : 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
        ];

        hc.currentRoom = hc.allRoomsData[0];

        // moves the slides with recomended rooms.
        // 'direction' decides if the slide moves left or right.
        // if the counter reaches the end of array it will use the last id that was used. 
        hc.moveSlide = function(direction){
            console.log(direction);
            var currRoomId = hc.currentRoom.room_id;
            var maxId = hc.allRoomsData.length;
            console.log('> moveSlide: ', currRoomId);
            if (direction === "move_right") {
                currRoomId++;
                if (currRoomId > maxId){
                    currRoomId = maxId;
                    console.log('reached the right end >|');
                }else {
                    hc.currentRoom = hc.allRoomsData[currRoomId-1];
                    console.log('moved to room #', currRoomId);
                }
            }else if (direction === "move_left") {
                if (currRoomId == 1){
                    console.log('reached the left end |<');
                }else {
                    currRoomId--;
                    hc.currentRoom = hc.allRoomsData[currRoomId-1];
                    console.log('moved to room #', currRoomId);
                }
            }else {
                console.log('no such direction, you must be delusioning...');
            }
        };
    });
