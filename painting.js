AOS.init({
  duration: 900,
})

var phoneDropbtn = document.getElementById("phonedrop-btn")
phoneDropbtn.addEventListener("click", myFunction);

function myFunction() {
  var phoneDrop = document.getElementById("phone-droplist");
  var slideshow = document.getElementById("landing-page-slideshow")
  if (phoneDrop.style.display == '' || phoneDrop.style.display == "none") {
    phoneDrop.style.display = "block";
    slideshow.style.display = "none";
  } else {
    phoneDrop.style.display = "none";
    slideshow.style.display = "block";
  }
}

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

var painting2mm = document.getElementById("painting2-m-m");
var painting2mtr = document.getElementById("painting2-m-tr");
var painting2mmc = document.getElementById("painting2-m-mc");
painting2mtr.onclick = function(){
  painting2mm.style.display = "block";
  painting2mmc.src = paintingimages.jpg.src;
}
  var painting2mc = document.getElementById("painting2-m-c");
painting2mc.onclick = function() {
  painting2mm.style.display = "none";
}
painting2mm.onclick = function() {
  painting2mm.style.display = "none";
}

var painting1mm = document.getElementById("painting1-m-m");
var painting1mtr = document.getElementById("painting1-m-tr");
var painting1mmc = document.getElementById("painting1-m-mc");
painting1mtr.onclick = function(){
  painting1mm.style.display = "block";
  painting1mmc.src = paintingimages.jpg.src;
}
  var painting1mc = document.getElementById("painting1-m-c");
painting1mc.onclick = function() {
  painting1mm.style.display = "none";
}
painting1mm.onclick = function() {
  painting1mm.style.display = "none";
}

var untpgmm = document.getElementById("unt-pg-m-m");
var untpgmtr = document.getElementById("unt-pg-m-tr");
var untpgmmc = document.getElementById("unt-pg-m-mc");
untpgmtr.onclick = function(){
  untpgmm.style.display = "block";
  untpgmmc.src = paintingimages.jpg.src;
}
  var untpgmc = document.getElementById("unt-pg-m-c");
untpgmc.onclick = function() {
  untpgmm.style.display = "none";
}
untpgmm.onclick = function() {
  untpgmm.style.display = "none";
}
