angular.module('FER_app')
    .service("passAuthData", ["$http", "authFactory", function($http, authFactory){
        var service = this;

        service.handleLoginData = function (loginData){
            console.log('> handle-Login : ', loginData);
            return $http({
                url     : 'http://localhost:3000/auth/login',
                method  : 'POST',
                data    : JSON.stringify(loginData),
                headers : {"content-type":"application/x-www-urlencoded"}
            });
        };

        service.handleSignupData = function (signupData){
            console.log('> handle-Signup : ', signupData);
            return $http({
                url     : 'http://localhost:3000/auth/signup',
                method  : 'POST',
                data    : JSON.stringify(signupData),
                headers : {"content-type":"application/json"}
            });
        };

        // generating a unix timestamp used as unique id
        service.generateId = function(){
            return + new Date();
        };


    // *** FOR DEVELOPMENT ONLY ***
        var users_db_sim = [];

        service.authCheck = function(dataToCheck){
            for (var i = 0; i < users_db_sim.length; i++) {
                if (users_db_sim[i].email === dataToCheck.email) {
                    if (users_db_sim[i].pass === dataToCheck.password) {
                        console.log('passing user_id | loging in | ', users_db_sim[i].user_id);
                        return users_db_sim[i].user_id;
                    }
                }else {
                    console.log('WRONG credentials');
                    return false
                }
            }
        };

        service.completeSignup = function(userToSave){
            var userToSaveMod = {};
            if (userToSave.passwordInput === userToSave.passwordReInput) {
                userToSaveMod.user_id  = service.generateId();
                userToSaveMod.username = userToSave.username;
                userToSaveMod.email    = userToSave.email;
                userToSaveMod.pass     = userToSave.password;
            }
            users_db_sim.push(userToSaveMod);
            console.log(userToSaveMod.user_id, ' - is saved!');
        };



        return service;
    }]);
