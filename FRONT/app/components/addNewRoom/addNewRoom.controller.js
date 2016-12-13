angular.module('FER_app')
    .controller('addNewRoomCtrl',  ["$scope", "$state" ,"roomService", "NgMap", function($scope, $state, roomService, NgMap){
        var anrc = this;
        console.log('> addNewRoomCtrl: initialised');

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

        anrc.saveNewEscapeRoom = function(){
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

        anrc.sendNewRoomData = function(data){
            console.log('>sendNewRoomData: sending data...');
            roomService.addRoomData(data)
                .then(function(){
                $state.go('home');
            }, function(err){
                console.log('>SOME ERROR HAS BEEN OCCURED WHILE SENDING THE DATA');
            })
        }


    }])
