angular.module('FER_app')
    .controller('authPageCtrl', ['$scope', '$state', "$rootScope", "passAuthData", "authFactory", function($scope, $state, $rootScope, passAuthData, authFactory){
        console.log('> authentication-page controller initialised');

        var apc = this;
        // login vars
        $scope.emailLogin       = '';
        $scope.passwordLogin    = '';
        // signup vars
        $scope.usernameInput    = '';
        $scope.emailInput       = '';
        $scope.passwordInput    = '';
        $scope.passwordReInput  = '';

        // authChoise - flag - this will decide what part of the page to show
        // login or signup (default: login-true, signup-false)
        apc.authChoise  = {
            login :
                {
                    isMethodChosen      : true,
                    isRequireBlocking   : false
                },
            signup :
                {
                    isMethodChosen      : false,
                    isRequireBlocking   : true
                }
        };


        // greys-out section that is NOT chosen by the user.
        // isLogin - login section, isSignup - signup section.
        apc.changeAuthFlag = function(isLogin, isSignup){
            if (isLogin === true & isSignup === false)
            {
                apc.authChoise.login.isMethodChosen     = true;
                apc.authChoise.login.isRequireBlocking  = false;

                apc.authChoise.signup.isMethodChosen    = false;
                apc.authChoise.signup.isRequireBlocking = true;
            }
            else if (isSignup === true & isLogin === false)
            {
                apc.authChoise.signup.isMethodChosen    = true;
                apc.authChoise.signup.isRequireBlocking = false;

                apc.authChoise.login.isMethodChosen     = false;
                apc.authChoise.login.isRequireBlocking  = true;
            }
            else
            {
                // in case some unexpected error, idk
                console.log('wtf m8');
            }

        }

        apc.submitLogin = function(){
            console.log('> passing login information to server...');
            var login =
                {
                    email   : $scope.emailLogin,
                    password: $scope.passwordLogin
                }
            // send the information to the server for authentication
            passAuthData.handleLoginData(login)
            .then(function(){
                console.log('> submitLogin: done!');
                $state.go('home');
            }).catch(function(error){
                console.log('> submitLogin: ERROR: ', error);
                $state.go('authentication');
            })
        }
        apc.submitSignup = function(){
            console.log('> passing new user information to server...');
            // send the information to the server to save new user data
            var signup =
                {
                    username    : $scope.usernameInput,
                    email       : $scope.emailInput,
                    password    : $scope.passwordInput,
                    password2   : $scope.passwordReInput
                }
            passAuthData.handleSignupData(signup)
            .then(function(){
                console.log('> submitSignup: done!');
                $state.go('home');
            }).catch(function(error){
                console.log('> submitSignup: ERROR: ', error);
                $state.go('authentication');
            })
        }

        // chosing authentication method - login or signup
        apc.chooseAuthMethod = function(keyword){
            if(keyword === 'login')
            {
                // here comes function that greys-out the 'signup' section
                apc.changeAuthFlag(true, false);
            }
            else if(keyword === 'signup')
            {
                // here comes function that greys-out the 'login' section
                apc.changeAuthFlag(false, true);
                // $("login").style.display  = "";
                // $("signup").style.display = "none";
            }
        }


    // *** FOR DEVELOPMENT ONLY ***

        apc.DEV_authSubmit = function (){
            if (apc.authChoise.signup.isMethodChosen === true) {
                console.log('submit method is sign-up');
                var signupData =
                    {
                        username    : $scope.usernameInput,
                        email       : $scope.emailInput,
                        password    : $scope.passwordInput,
                        password2   : $scope.passwordReInput
                    };
                passAuthData.completeSignup(signupData);
                $state.go('authentication');
            }else if (apc.authChoise.login.isMethodChosen === true) {
                var login =
                    {
                        email   : $scope.emailLogin,
                        password: $scope.passwordLogin
                    }
                console.log('submit method is login');
                // response will contain logged in user id.
                var response = passAuthData.authCheck(login);
                if (response) {
                    // saving user_id for future check if the user is logged in,
                    // then redirect to homepage.
                    console.log('got response with: ', response);
                    authFactory.setLoginFlag(response);
                    $rootScope.currentUserID = response;
                    $state.go('home');
                }else {
                    console.log('No such user');
                }
            }else {
                alert("somehow you managed to break the code and NOT to choose authentication method... how?!");
            }
        };

    }]);
