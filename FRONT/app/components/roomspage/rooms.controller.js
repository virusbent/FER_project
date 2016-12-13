/**
 * Created by Evgeniy on 10/15/2016.
 */
angular.module('FER_app')
    .controller('roomsCtrl', ["$scope", "$state", "roomService", "roomFactory", "mockFactory", "$filter", function ($scope, $state, roomService, roomFactory, mockFactory, $filter) {
        console.log('rooms controller initialised!');
        var rc          = this;
        rc.title        = 'Take a look at all the rooms we have to offer!';

        $scope.type     = "Regular";
        var a = $filter('filterType')(['a','b'],'a');

        //roomData will be pulled from DB. hard-codded for now
        // it will be a big ARRAY OF OBJECTS that will contain all of the rooms per page
        // the view will loop through this array and show each room independendly.
        rc.allRoomsData = mockFactory.getMockData();
        // rc.allRoomsData     = [
        //     {
        //     room_id : '1',
        //     id_literal: 'room1',
        //     address : 'address ADDRESS',
        //     tel     : '123-456-7890',
        //     details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        //     },
        //     {
        //     room_id : '2',
        //     id_literal: 'room2',
        //     address : 'address2 ADDRESS2 address2 ADDRESS2',
        //     tel     : '123-456-7890-123-456-7890',
        //     details : 'consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        //     },
        // ];

        // TODO: send the http request to get the roomdata and push it to the directive
        rc.applyFilter = function(event){
            console.log('rc.Clicked: ', event.target.id);
            var onFilter = event.target.id.split('.');
            if (onFilter[0] === 'type'){
                console.log('filter set to type...');
                if(onFilter[1] === 'recommended'){
                    console.log('...recommended');
                    // filter the array of rooms by type: recommended.
                    $scope.type = "Recommended";
                } else if (onFilter[1] === 'trending') {
                    console.log('...trending');
                    // filter the array of rooms by type: trending.
                    $scope.type = "Trending";
                }else if (onFilter[1] === 'showAll') {
                    // show recommended with trending, but don't sort.
                    console.log('...recommended AND trending');
                    $scope.type = "showAll";
                }
            }
            else if (onFilter[0] === 'rating'){
                console.log('filter set to type...');
                if(onFilter[1] === 'star4'){
                    console.log('...star4');
                } else if (onFilter[1] === 'star3') {
                    console.log('...star3');
                }else if (onFilter[1] === 'showAll') {
                    console.log('...all stars');
                }
            }
            else {
                console.log('filter set to default value');
            }
        }

        //TODO: change the name to handleThisRoom. change it in the room directive too. DONE
        rc.handleThisRoom = function(event){
            console.log('handleThisRoom reached');
            var id = event.target.id;
            // TODO: handle only the data of the room that coresponds with the id!
            for(i=0;i<rc.allRoomsData.length; i++){
                if(rc.allRoomsData[i].room_id == id){
                    roomFactory.setCurrentRoom(rc.allRoomsData[i]);
                    console.log('found : ', rc.allRoomsData[i]);
                    $state.go('orderReview');
                }
            }
        }
    }]);


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
