/**
 * Created by Evgeniy on 10/15/2016.
 */
(function () {
    angular.module('FER_app', ['ui.router', 'ngAnimate', 'ngMap', 'ui.bootstrap'])
        .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home',
                    {
                        url         : '/home',
                        controller  : 'homeCtrl',
                        controllerAs: 'hc',
                        templateUrl : './app/components/homepage/home.view.html'
                    })
                .state('rooms',
                    {
                        url         : '/rooms',
                        controller  : 'roomsCtrl',
                        controllerAs: 'rc',
                        templateUrl : './app/components/roomspage/rooms.view.html'
                    })
                .state('authentication',
                    {
                        url         : '/authentication',
                        controller  : 'authPageCtrl',
                        controllerAs: 'apc',
                        templateUrl : './app/components/authpage/authentication.view.html'
                    })
                .state('addNewRoom',
                    {
                        url         : '/add_new_room',
                        controller  : 'addNewRoomCtrl',
                        controllerAs: 'anrc',
                        templateUrl : './app/components/addNewRoom/addNewRoom.view.html'
                    })
                .state('editRoom',
                    {
                        url         : '/edit_room',
                        controller  : 'editRoomCtrl',
                        controllerAs: 'erc',
                        templateUrl : './app/components/editRoom/editRoom.view.html'
                    })
                .state('orderReview',
                    {
                        url         : '/order_review',
                        controller  : 'orderReviewCtrl',
                        controllerAs: 'orc',
                        templateUrl : './app/components/orderPage/order-review.view.html'
                    })
                .state('cart',
                    {
                        url         : '/cart',
                        controller  : 'cartCtrl',
                        controllerAs: 'cc',
                        templateUrl : './app/components/cart/cart.view.html'
                    })
        }]).run(["$rootScope", "$state", '$location', function ($rootScope, $state, $location)
    {
        console.log('app is running...');
        $rootScope.isLoggedIn    = false;
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //event.preventDefault();
            console.log('> Trying to redirect to home page...\n\r', toState.name);
            if($rootScope.isLoggedIn === false)
            {
                if(toState.name == "home" | toState.name == "rooms")
                {
                    event.preventDefault();
                    console.log('You are not logged in!');
                    $state.go('authentication');
                }
            }
            else
            {
                //event.preventDefault();
                console.log('Welcome');
                //$state.go(toState.name);
                return
            }
        })
        // in rootScope I will only store UserID, not the whole User data.
        // I think rootScope is not for sharing data between controllers (Factory is),
        // But for this example I'm using it in such way.
        $rootScope.currentUserID = '';
    }])
})();
