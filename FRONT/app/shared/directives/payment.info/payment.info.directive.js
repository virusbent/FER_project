angular.module('FER_app')
    .directive('ferPaymentOptions', function(){
        return{
            restrict    : 'E',
            replace     : true,
            templateUrl : './app/shared/directives/payment.info/payment.info.view.html'
        }
    });
