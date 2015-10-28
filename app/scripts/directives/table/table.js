'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
  
  .controller('bookings', function($scope,$http,$timeout) {
                    WebSocketTest();
                    var page=0;
                    var count='';
                    var shouldUpdate=0;
                    $scope.hideit=true;
                    $scope.hidethis=false;
                   //var url=+page;
                    $scope.prev = function(){
                      page--;
                      if(page==0){
                        $scope.hideit=true;
                        $scope.hidethis=false;
                        return 0;
                      }
                      
                      $scope.hidethis=false;
                    };
                    $scope.next = function () {
                      page++;
                      if(page>=Math.floor((count.countTotal/10))){
                        $scope.hidethis=true;
                        
                      }
                        if(page!=0){
                          $scope.hideit=false;
                        }
                      
                      
                    };
                   
                          
                             $http.defaults.useXDomain = true;
                             //var defer=$q.defer();
                              $http.get("http://localhost:9090/MyglammInternal/rest/apiv1/bookings/?sort=0&page="+page)
                              .success(function(response) {
                                  shouldUpdate=1;
                                    $scope.bookings=response.bookings;
                                    count=response.count;

                              });
                         
                    
                    (function poll () {
            
                        $timeout(function () {
                          //console.log(window.bookings + 'in controller');
                                if(shouldUpdate){
                                  $scope.bookings=window.bookings;
                                  
                                }
                          poll();
                      }, 3000);
                    })();
                  
                  
              })
       
       
    .directive('bookings',function() {
    	return {
  		templateUrl:'scripts/directives/table/table.html',
  		restrict:'E',
  		replace:true,

  		
  	}
  });
