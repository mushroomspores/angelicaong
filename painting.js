// js script for painting.html
var painting2m = document.getElementById("painting2-m");
var painting2tr = document.getElementById("painting2-tr");
var painting2mc = document.getElementById("painting2-mc");
painting2tr.onclick = function(){
  painting2m.style.display = "block";
  painting2mc.src = paintingimages.jpg.src;
}
  var painting2c = document.getElementById("painting2-c");
painting2c.onclick = function() {
  painting2m.style.display = "none";
}
painting2m.onclick = function() {
  painting2m.style.display = "none";
}

var painting1m = document.getElementById("painting1-m");
var painting1tr = document.getElementById("painting1-tr");
var painting1mc = document.getElementById("painting1-mc");
painting1tr.onclick = function(){
  painting1m.style.display = "block";
  painting1mc.src = paintingimages.jpg.src;
}
  var painting1c = document.getElementById("painting1-c");
painting1c.onclick = function() {
  painting1m.style.display = "none";
}
painting1m.onclick = function() {
  painting1m.style.display = "none";
}

var untpgm = document.getElementById("unt-pg-m");
var untpgtr = document.getElementById("unt-pg-tr");
var untpgmc = document.getElementById("unt-pg-mc");
untpgtr.onclick = function(){
  untpgm.style.display = "block";
  untpgmc.src = paintingimages.jpg.src;
}
  var untpgc = document.getElementById("unt-pg-c");
untpgc.onclick = function() {
  untpgm.style.display = "none";
}
untpgm.onclick = function() {
  untpgm.style.display = "none";
}
