/**
 * Created by Evgeniy on 10/15/2016.
 */
angular.module('FER_app')
    .controller('orderReviewCtrl', ["$scope", "$state", "roomFactory", "confirmationService",
     function ($scope, $state, roomFactory, confirmationService) {
        console.log('rooms controller initialised!');
        var orc          = this;

        $scope.theDate   = '';
        $scope.theTime   = '';
        orc.isOrderReady = false;
        orc.currRoomData = {};

        // gets the room data from the factory
        // and sends it in the details-before-order directive
        // exectutes itself after declaration
        orc.roomDataToDirective = function(){
            var id = roomFactory.getRoomId();
            orc.currRoomData = roomFactory.getCurrentRoom(id);
            console.log('roomDataToDirective: ', orc.currRoomData);
        }
        orc.roomDataToDirective();


        orc.DayScheduleData =
        {
            day         : '',
            isDayFull   : false,
            schedule    :
            {
                time    : ['18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00'],
                status  : ['']
            }
        }

        orc.saveOrderTime = function(event){
            $scope.theTime = event.target.innerHTML;
        }

        orc.addToCart = function (){
            if (orc.isOrderReady === true)
            {
                orc.currRoomData.date = {
                    date: $scope.theDate,
                    time: $scope.theTime
                };
                // update roomData with order date and time
                roomFactory.setCurrentRoom(orc.currRoomData);
                $state.go('cart');
                // pass date and time to the cart
                // confirmationService.handleOrderDate($scope.theDate, $scope.theTime);
            }
            else
            {
                console.log('isOrderReady: ', orc.isOrderReady);
            }
        }

    // Datepicker - Angular Bootstrap
        orc.today = function(){
            $scope.date = new Date();
        };
        orc.today();

        orc.dateOptions = {
            minDate     : new Date(),
            showWeeks   : false
        }

    // Watchers
        $scope.$watch('date', function(){
            $scope.theDate = $scope.date.customFormat("#YYYY#-#MM#-#DD#");
            $scope.theTime = '';
        });
        $scope.$watchGroup(['theDate', 'theTime'], function(newValues, oldValues){
            //console.log('new - old : ', newValues, ' - ', oldValues);
            if(newValues[0] !== '' & newValues[1] !== ''){
                orc.isOrderReady = true;
                console.log('ready?->', orc.isOrderReady, ' to send?-> ', newValues);
            }else{
                orc.isOrderReady = false;
            }
        });

        // orc.prepareDateAndTime = function(dateAndTime){
        //     confirmationService.handleOrderDate(dateAndTime[0], dateAndTime[1]);
        // }

        // $scope.disableDay(dateToDisable, mode) = function(){
        //     // take 'dateToDisable' and look where to push it to disable some day if 'isDayFull' = true
        // }

// Helper function - formating the date to yyyy-mm-dd format
//*** This code is copyright 2002-2016 by Gavin Kistner, !@phrogz.net
//*** It is covered under the license viewable at http://phrogz.net/JS/_ReuseLicense.txt
Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h==0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = hhh<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};
    }]);
