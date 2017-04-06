var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope,$http) {

var price;
var nameId;
var spaceID;
$http.get("data.json")
  .success(function(response) {
    $scope.names = response.records;
  });

  $http.get("data2.json")
    .success(function(response) {
      $scope.Spaces = response.records2;
    });


       $scope.one = true; // setting the first div visible when the page loads
$scope.two = false; // hidden
$scope.three = true;
$scope.four = false;
$scope.showOne = function(name, paisa) {
    nameId = name;
    price =paisa;
  $scope.one = false;
  $scope.three = false;
  $scope.two = true;
  $scope.showTwo = function(floorId){
    spaceID = floorId;
    $scope.two = false;
    $scope.four = true;
  }
};
});
function travel(){
  document.getElementsByTagName("progress")[0].setAttribute("value", 60);

}
function travel2(){
  document.getElementsByTagName("progress")[0].setAttribute("value", 100);
}
function data(x){
  console.log(x);
}
