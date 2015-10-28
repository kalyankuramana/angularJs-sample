'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')


  .controller('stats', function($scope,$http,$timeout) {
      var count={number:0};
      var res={};
      var flag=0;
          
         /*
          (function poll () {
            
            $timeout(function () {
              
                 $http.defaults.useXDomain = true;
                 //var defer=$q.defer();
                  $http.get("http://localhost:9090/MyglammInternal/rest/apiv1/bookings/count")
                  .success(function(response) {
                        res=response;
                        //defer.resolve(response);
                        if($scope.sid=="1"){
                            count.number=res.countTotal;
                            
                          }
                          else if($scope.sid=="2"){
                          count.number=res.countMonth;

                          }
                          else if($scope.sid=="3"){
                            count.number=res.countWeek;
                          }
                          else if($scope.sid=="4"){
                            count.number=res.countToday;
                          } 
                          $scope.cnt=count;
                  });
              poll();
            }, 3000);
          })();*/
    //if($scope.comments=="New Bookings!"){
      
         
          
     // }

})

    .directive('stats',function() {
      return {
      templateUrl:'scripts/directives/dashboard/stats/stats.html',
      restrict:'E',
      replace:true,
      scope: {
        'model': '=',
        'comments': '@',
        'number':'@',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'sid':'@'
      }
      
    }
  });
