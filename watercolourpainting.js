AOS.init({
  duration: 1200,
})
// js script for watercolourpainting.html
var aftsunm = document.getElementById("aftsun-m");
var aftsuntr = document.getElementById("aftsun-tr");
var aftsunmc = document.getElementById("aftsun-mc");
aftsuntr.onclick = function(){
  aftsunm.style.display = "block";
  aftsunmc.src = paintingimages.jpg.src;
}
  var aftsunc = document.getElementById("aftsun-c");
aftsunc.onclick = function() {
  aftsunm.style.display = "none";
}
aftsunm.onclick = function() {
  aftsunm.style.display = "none";
}

var atmospherem = document.getElementById("atmosphere-m");
var atmospheretr = document.getElementById("atmosphere-tr");
var atmospheremc = document.getElementById("atmosphere-mc");
atmospheretr.onclick = function(){
  atmospherem.style.display = "block";
  atmospheremc.src = paintingimages.jpg.src;
}
  var atmospherec = document.getElementById("atmosphere-c");
atmospherec.onclick = function() {
  atmospherem.style.display = "none";
}
atmospherem.onclick = function() {
  atmospherem.style.display = "none";
}
