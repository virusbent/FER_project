angular.module('FER_app')
    .directive('paymentInfo', function(){
        return{
            restrict    : 'E',
            replace     : 'true',
            templateUrl : './app/shared/directives/room/howtopay.info/howtopay.view.html',
            controller  : function(){
                console.log('paymentInfo: hi!');
            }
        }
    })
