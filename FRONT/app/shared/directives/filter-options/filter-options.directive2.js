angular.module('FER_app')
    .directive('ferFilterOptionsBar', function(){
        console.log('> ferFilterOptionsBar : initialised');
        var url      = './app/shared/directives/filter-options/filter-by.view.html';
        return{
            restrict    : 'E',
            templateUrl :  url
        }
});
