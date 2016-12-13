angular.module('FER_app')
    .service("buyFinalService", ["$http", function($http){
        var service = this;

        service.handleFinalOrder = function(theOrder){
            console.log('> handling Final Order');
            return $http({
                method  : 'POST',
                url     : 'http://localhost:3000/api/cart/checkout_final',
                headers : {"Content-Type":"application/x-www-urlencoded"},
                data    : theOrder
            });
        };



        return service;
    }]);
