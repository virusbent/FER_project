angular.module('FER_app')
    .factory('mainFactory', function(){
        console.log('> mainFactory: initialised');
        var factory = {};
        factory.anon = {
            name    : 'Adventurer',
            isAnon  : true
        };
        
        return factory;
    })
