var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
      var nameId =[{Name:"Campus 15",	price:18, Avail:9},
{Name:"Campus 2",	price:17, Avail:10},
{Name:"InfoCity",	price:15, Avail:23},
{Name:"Campus 6",	price:14, Avail:28},
{Name:"Campus 2",	price:17, Avail:10},
{Name:"InfoCity",	price:15, Avail:23},
{Name:"Campus 6",	price:14, Avail:28},
{Name:"Campus 2",	price:17, Avail:10},
{Name:"InfoCity",	price:15, Avail:23},
{Name:"Campus 6",	price:14, Avail:28},
{Name:"Campus 2",	price:17, Avail:10},
{Name:"InfoCity",	price:15, Avail:23},
{Name:"Campus 6",	price:14, Avail:28}
]
var spaceID=[{floor:"basement"},
{floor:"basement"},
{floor:"outside"},
{floor:"outside"},
{floor:"groundfloor"},
{floor:"basement"},
{floor:"groundfloor"},
{floor:"basement"},
{floor:"basement"},
{floor:"groundfloor"},
{floor:"outside"},
{floor:"outside"},
{floor:"basement"},
{floor:"groundfloor"},
{floor:"basement"},
]
$scope.Spaces=spaceID;
       $scope.names = nameId;
       $scope.one = true; // setting the first div visible when the page loads
$scope.two = false; // hidden
$scope.three = true;
$scope.four = false;
$scope.showOne = function() {
  $scope.one = false;
  $scope.three = false;
  $scope.two = true;
  $scope.showTwo = function(){
    $scope.two = false;
    $scope.four = true;
  }
};
});
function travel(x){
  console.log(x);
  document.getElementsByTagName("progress")[0].setAttribute("value", 60);

}
function travel2(){
  document.getElementsByTagName("progress")[0].setAttribute("value", 100);
}
