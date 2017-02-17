console.log("hello angular");

let app = angular.module('angularTestApp', []);

app.controller('MainController',function($scope){


  scope.number = 0;

  $scope.message = "hello from the controller";

  $scope.changeMessage = function(){
      $scope.message="the button was clicked!"

      $scope.paragraphClass = "highlighted";

      $scope.clicked = true;

  };

  $scope.addOne= function() {
    $scope.number += 1;

  };

  $scope.hasEatenTooMany = function() {
    if($scope.number >=10) {
      return true;
    }else{ false; }


  }

});
