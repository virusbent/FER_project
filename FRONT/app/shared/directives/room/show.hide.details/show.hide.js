angular.module('FER_app')
    .directive('showHide', function($timeout){
        // testing function
        function devAlertme(scope,element,attrs){
            element.bind('click', function(){
                alert(element.innerHTML);
            })
        };
        // function doShowDoHide(scope,element,attrs){
        //     console.log('> doShowDoHide : initialised');
        //     var mainElement2 = $('#'+scope.id);
        //     var mainElement = document.getElementById(scope.id);
        //     console.log(": ", mainElement2);
        //     var jElement = $(mainElement);
        //     console.log(jElement);
        //
        //     element.bind('click', function(){
        //         console.log("clicked");
        //         if (jElement.hasClass('details-collapse') === true){
        //             console.log('doShowDoHide : expanding...');
        //             jElement.removeClass('details-collapse');
        //             jElement.addClass('details-expand');
        //         }
        //         else if (jElement.hasClass('details-expand')){
        //             console.log('doShowDoHide : collapsing...');
        //             jElement.removeClass('details-expand');
        //             jElement.addClass('details-collapse');
        //         }
        //     })
        // };

        return {
            restrict: 'A',
            scope   : { id: "@roomId" },
            link    : function(scope,element,attrs){
                $timeout(function(){

                    console.log('> doShowDoHide : initialised');
                    var mainElement = $('#'+scope.id);
                    console.log(": ", mainElement);
                    element.bind('click', function(){
                        console.log("clicked");
                        if (mainElement.hasClass('details-collapse') === true){
                            console.log('doShowDoHide : expanding...');
                            mainElement.removeClass('details-collapse');
                            mainElement.addClass('details-expand');
                        }
                        else if (mainElement.hasClass('details-expand')){
                            console.log('doShowDoHide : collapsing...');
                            mainElement.removeClass('details-expand');
                            mainElement.addClass('details-collapse');
                        }
                    })


                });
            }
        }
    });
