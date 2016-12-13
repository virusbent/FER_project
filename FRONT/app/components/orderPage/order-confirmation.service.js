angular.module('FER_app')
    .service('confirmationService', ["$http", function($http){
        var service = this;

        var orderDateAndTime =
            {
                date    : '',
                time    : ''
            }

            // handles the date and time of the order to the cart-item.
            service.handleOrderDate = function(orderDate, orderTime){
                orderDateAndTime.date = orderDate;
                orderDateAndTime.time = orderTime;
                console.log('> orderDateAndTime is: ', orderDateAndTime);
            }
            
            service.getOrderDateAndTime = function(){
                return orderDateAndTime;
            }

        return service;
    }]);
