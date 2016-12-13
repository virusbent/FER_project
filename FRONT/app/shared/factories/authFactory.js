angular.module('FER_app')
    .factory('authFactory', ["$rootScope", function($rootScope){
        console.log('> authFactory: initialised');
        var factory         = {};
        // isLoggedIn false by default
        var loginFlag       = {
            user_id     : '',
            isLoggedIn  : false
        };
        // by default
        $rootScope.isLoggedIn   = false;


        factory.setLoginFlag = function(id){
            console.log('authFactory: setting flag for - ', id);
            loginFlag.user_id       = id;
            loginFlag.isLoggedIn    = true;
            // with $rootScope
            $rootScope.currentUserID = id;
            $rootScope.isLoggedIn   = true;
        };
        factory.getLoginFlag = function(){
            return loginFlag;
        };

        return factory;
    }])
