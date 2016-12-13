angular.module('FER_app')
    .directive('ferDaySchedule', function(){
        return{
            restrict    : 'E',
            templateUrl : './app/shared/directives/room/day-schedule/day-schedule.view.html',
            scope       :
            {
                scheduleData        : "=",
                handleTime          : "="
            },
            link        : function(scope, element, attrs)
            {
                console.log('> ferDaySchedule initialised');
                scope.handleMe = function(event) {
                    var val = event.target.attributes.id;
                    console.log('1clicked: ', val);
                    console.log('2clicked: ', attrs.value);
                    console.log('3clicked: ', event.target.value);
                }
            }
        }
    });
