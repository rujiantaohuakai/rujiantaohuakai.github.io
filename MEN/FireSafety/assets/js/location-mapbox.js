'use strict';






$(document).ready(function(){





mapboxgl.accessToken = 'pk.eyJ1IjoiYWxva21pc2hyYTExIiwiYSI6ImNqeGJwM2Y1bDAwN3EzbnF0eXJnczRtMWQifQ.drH7yyTlfdgTuxdznvxujg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-74.50, 40], // starting position [lng, lat]
zoom:9 // starting zoom
});

document.getElementById('Abidjan').addEventListener('click', function () {

map.flyTo({
center: [
5.30966, -4.01266],

});
var marker = new mapboxgl.Marker()
  .setLngLat([5.30966, -4.01266])
.addTo(map);


});

document.getElementById('Bissau').addEventListener('click', function () {

map.flyTo({
center: [
11.7723463, -15.16962],

});

var marker = new mapboxgl.Marker()
  .setLngLat([11.7723463, -15.16962])
.addTo(map);


});




document.getElementById('braga').addEventListener('click', function () {

map.flyTo({
center: [
-8.42005,
41.55032],

});

var marker = new mapboxgl.Marker()
  .setLngLat([-8.42005,
41.55032])
.addTo(map);
});

document.getElementById('Entro').addEventListener('click', function () {

map.flyTo({
center: [
-8.46667,
39.46667]
});
var marker = new mapboxgl.Marker()
  .setLngLat([-8.46667,
39.46667])
.addTo(map);


});


document.getElementById('Funchal').addEventListener('click', function () {

map.flyTo({
center: [
32.63333,-16.9]
});

var marker = new mapboxgl.Marker()
  .setLngLat([32.63333,-16.9])
.addTo(map);


});

document.getElementById('Mangualde').addEventListener('click', function () {

map.flyTo({
center: [
40.60425, -7.76115]
});

var marker = new mapboxgl.Marker()
  .setLngLat([40.60425, -7.76115])
.addTo(map);


});

document.getElementById('Ovar').addEventListener('click', function () {

map.flyTo({
center: [
40.85862, -8.62513]
});
var marker = new mapboxgl.Marker()
  .setLngLat([40.85862, -8.62513])
.addTo(map);


});

document.getElementById('Portimão').addEventListener('click', function () {

map.flyTo({
center: [
37.13856, -8.53775]
});

var marker = new mapboxgl.Marker()
  .setLngLat([37.13856, -8.53775])
.addTo(map);


});

document.getElementById('Setúbal').addEventListener('click', function () {

map.flyTo({
center: [
38.5333312, -8.8833298]
});
var marker = new mapboxgl.Marker()
  .setLngLat([38.5333312, -8.8833298])
.addTo(map);


});



 









});
