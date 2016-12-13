/**
 * Created by Evgeniy on 10/15/2016.
 */
angular.module('FER_app')
    .controller('mainCtrl',
    ["$scope", "$rootScope", 
    function ($scope, $rootScope) {
        console.log('main controller initialised!');

        var main = this;
        main.loggedUserSettings     = false;             // showing only when User is logged in.
        main.nonLoggedUserSetting   = true;              // by default - showing.
        main.showAdditionalSettings = false;             // by default - not showing

        $scope.toggleSettings = function () {
            console.log('toggling!');
            if(main.showAdditionalSettings === false)
            {
                console.log('show is false -> changing to true');
                main.showAdditionalSettings = true;
            }
            else
            {
                console.log('show is true -> changing to false');
                main.showAdditionalSettings = false;
            }
        }

        $rootScope.$watch('isLoggedIn', function(){
            if($rootScope.isLoggedIn === true){
                main.loggedUserSettings     = true;
                main.nonLoggedUserSetting   = false;
            }else {
                main.loggedUserSettings     = false;
                main.nonLoggedUserSetting   = true;
            }
        });
    }]);
