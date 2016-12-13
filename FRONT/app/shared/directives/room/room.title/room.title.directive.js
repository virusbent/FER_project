//TODO: fix the damn directive. it doesnt show it's content
angular.module('FER_app')
    .directive('roomTitle', function(){
        var url = './app/shared/directives/room/room.title/title.';
        return{
            restrict: 'A',
            link    : function(scope, element, attrs){
                url = url + attrs.type + '.html';
                console.log('>>> TESTING <<<', url);
            },
            templateURL : url
        };
    });
