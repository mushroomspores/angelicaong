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

var aftsunmm = document.getElementById("aftsun-m-m");
var aftsunmtr = document.getElementById("aftsun-m-tr");
var aftsunmmc = document.getElementById("aftsun-m-mc");
aftsunmtr.onclick = function(){
  aftsunmm.style.display = "block";
  aftsunmmc.src = paintingimages.jpg.src;
}
  var aftsunmc = document.getElementById("aftsun-m-c");
aftsunmc.onclick = function() {
  aftsunmm.style.display = "none";
}
aftsunmm.onclick = function() {
  aftsunmm.style.display = "none";
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

var atmospheremm = document.getElementById("atmosphere-m-m");
var atmospheremtr = document.getElementById("atmosphere-m-tr");
var atmospheremmc = document.getElementById("atmosphere-m-mc");
atmospheremtr.onclick = function(){
  atmospheremm.style.display = "block";
  atmospheremmc.src = paintingimages.jpg.src;
}
  var atmospheremc = document.getElementById("atmosphere-m-c");
atmospheremc.onclick = function() {
  atmospheremm.style.display = "none";
}
atmospheremm.onclick = function() {
  atmospheremm.style.display = "none";
}
