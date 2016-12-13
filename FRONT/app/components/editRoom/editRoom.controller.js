angular.module('FER_app')
    .controller('editRoomCtrl',  ["$scope", "$state" ,"roomService", "NgMap", function($scope, $state, roomService, NgMap){
        var erc = this;
        console.log('> editRoomCtrl: initialised');

        // page inputs
        $scope.roomName     = '';
        $scope.roomDesc     = '';
        $scope.roomAddress  = '';
        $scope.roomLvl      = '';
        $scope.roomNum      = '';
        $scope.roomTel      = '';
        $scope.imgURL       = '';

        var newRoom =
        {
            name        : '',
            description : '',
            address     : '',
            lvl         : '',
            number      : '',
            tel         : '',
            imgs        : []
        };

        NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        // console.log('markers', map.markers);
        // console.log('shapes', map.shapes);
      });

        erc.saveNewEscapeRoom = function(){
            newRoom =
            {
                name        : $scope.roomName,
                description : $scope.roomDesc,
                address     : $scope.roomAddress,
                lvl         : $scope.roomLvl,
                number      : $scope.roomNum,
                tel         : $scope.roomTel
            };
            //newRoom.imgs = push($scope.imgURL);
            console.log('saving new escape room...');
            console.log('saved: ', newRoom);
        }
    }])
