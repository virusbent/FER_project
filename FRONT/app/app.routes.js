/**
 * Created by Evgeniy on 10/15/2016.
 */
angular.module('FER_app')
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                    templateUrl : '',
                    controller  : 'homeCtrl',
                    controllerAs: 'hc'
                })
                .when('/home', {
                    templateUrl : './components/homepage/home.view.html',
                    controller  : 'homeCtrl',
                    controllerAs: 'hc'
                })
                .when('/rooms', {
                    templateUrl : './components/roomspage/rooms.view.html',
                    controller  : 'roomsCtrl',
                    controllerAs: 'rc'
                });
            $routeProvider.otherwise('/');
        }])