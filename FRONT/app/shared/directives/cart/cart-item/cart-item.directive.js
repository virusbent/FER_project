angular.module('FER_app')
    .directive('ferCartItem', function(){
        return{
            restrict    : 'E',
            replace     : true,
            scope       :
            {
                orderData: "=",
                payForOrder: "=",
                editThisOrder: "=",
                deleteThisOrder: "="
            },
            templateUrl : './app/shared/directives/cart/cart-item/cart-item.view.html',
            link        : function(scope, element, attrs){
                console.log('showing item: ', scope.orderData.id_literal);
            }
        }
    });
