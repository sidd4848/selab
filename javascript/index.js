function myMap() {
var mapProp= {
    center:new google.maps.LatLng(20.348838, 85.815952),
    zoom:17
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker(20.348890,85.814786);
  marker.setMap(map);
}
function scrollkro(){
   window.scrollTo(0,500);
}
