'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
  
        .config(['$httpProvider', function($httpProvider) {
              $httpProvider.defaults.useXDomain = true;
              delete $httpProvider.defaults.headers.common['X-Requested-With'];
          }
      ])
      .controller("formController", function($scope, $http) {
      
        $scope.isdisabled=false;
          $scope.bookingform = {};
          
          $scope.bookingform.submit = function () {
              $scope.isdisabled=true;
             /* var url = "Controller/enq_postadmin.php";
              $http.post(url, $scope.formData).success(function (da) {
                  alert(da);
                  $scope.formData = "";
              }); 
              */
        /*      var data={services:'',customername:'',bookingTime:'',serviceTime:'',location:'',amount:''};*/
                var url1="http://localhost:9090/MyglammInternal/rest/apiv1/bookings/new"
              var data1={};
              var services;
              var chk= $scope.bookingform.checkbox;
              var i=0;
              for(var x in chk){
                if(chk[x]!="0" && chk[x]!="undefined" && chk[x]!=null){
                  if(i==0){
                    services=chk[x];
                    i=1;
                  }
                  else{
                    services = services+"|" + chk[x];
                  }
                }
              }
              data1.services=services;
              data1.customerName=$scope.bookingform.customer;
              data1.bookingTime=$scope.bookingform.bookingTime;
              data1.serviceTime=$scope.bookingform.serviceTime;
              data1.loc=$scope.bookingform.loc;
              data1.amount=$scope.bookingform.amount;
              
              var req = {
                   method: 'POST',
                   url: url1,
                   headers: {
                        
                        'Content-Type': 'application/x-www-form-urlencoded'
                   },
                   data: $.param(data1)
                  }
                  $http.defaults.useXDomain = true;
                  $http(req).then(function(response){
                    window.ws.send(response.data);
                     console.log(response.data);
                  },function(response){
                    window.ws.send("request failed");
                     console.log(response.data);
                  });
        $scope.isdisabled=false;
    };


  })   
      


    .directive('bookingsform',function() {
    	return {
  		templateUrl:'scripts/directives/form/form.html',
  		restrict:'E',
  		replace:true,

  		
  	}
  });
