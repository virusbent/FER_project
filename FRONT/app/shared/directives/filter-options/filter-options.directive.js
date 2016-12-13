//TODO: FIX this damn directive
//    it should choose if the filter by (type or rating) is shown
angular.module('FER_app')
    .directive('ferFilterOptionsBar', function(){
        console.log('> ferFilterOptionsBar : initialised');
        //var url = './app/shared/directives/filter-options/filter-options.view.by-type.html';
        var url      = './app/shared/directives/filter-options/filter-by.view.html';
        var urls    = {
            type            : './app/shared/directives/filter-options/filter-options.view.by-type.html',
            rating          : './app/shared/directives/filter-options/filter-options.view.by-rating.html',
            none            : './app/shared/directives/filter-options/filter-by.view.html'
        };
        urls.isShowingNow = urls.none;
        return{
            restrict    : 'E',
            link        : function(scope, element, attrs){
                // scope.filterUrl  = "";
                // scope.SetFilterUrl = function(param){
                //     switch(param){
                //         case "Type":{
                //             scope.filterUrl = './app/shared/directives/filter-options/filter-options.view.by-type.html';
                //                 break;
                //         }
                //         case "None":{
                //             scope.filterUrl  = "";
                //             break;
                //         }
                //     }
                // }
                //
                // console.log('link > ', urls.isShowingNow);
                // attrs.$observe('opt', function(newVal){
                //     console.log('data chanded -> ', newVal);
                //     if(newVal === 'noFilter'){
                //         urls.isShowingNow = urls.none;
                //         console.log(url);
                //     } else if (newVal === 'byType') {
                //         urls.isShowingNow = urls.type;
                //     } else if (newVal === 'byRating') {
                //         urls.isShowingNow = urls.rating;
                //         console.log(url);
                //     } else {                                // default
                //         urls.isShowingNow = urls.none;
                //         console.log('default -> ', url);
                //     }
                // })
                // scope.$watch('filterOptions', function(newVal, oldVal){
                //     console.log("data changed to: ", newVal, ' from: ', oldVal);
                // });
            },
            // controller  : ['$scope', function($scope){
            //     console.log('directive controller >');
            //     $scope.$watch('filterOptions', function(newVal, oldVal){
            //         console.log("data changed to: ", newVal, ' from: ', oldVal);
            //     });
            // }],
            templateUrl :  url
        }
    });
