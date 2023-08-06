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


var tenjitsu1m = document.getElementById("tenjitsu-1-m");
var tenjitsu1tr = document.getElementById("tenjitsu-1-tr");
var tenjitsu1mc = document.getElementById("tenjitsu-1-mc");
tenjitsu1tr.onclick = function(){
  tenjitsu1m.style.display = "block";
  tenjitsu1mc.src = this.src;
}
var tenjitsu1c = document.getElementById("tenjitsu-1-c");
tenjitsu1c.onclick = function() {
  tenjitsu1m.style.display = "none";
}
tenjitsu1m.onclick = function() {
  tenjitsu1m.style.display = "none";
}

var tenjitsu2m = document.getElementById("tenjitsu-2-m");
var tenjitsu2tr = document.getElementById("tenjitsu-2-tr");
var tenjitsu2mc = document.getElementById("tenjitsu-2-mc");
tenjitsu2tr.onclick = function(){
  tenjitsu2m.style.display = "block";
  tenjitsu2mc.src = this.src;
}
var tenjitsu2c = document.getElementById("tenjitsu-2-c");
tenjitsu2c.onclick = function() {
  tenjitsu2m.style.display = "none";
}
tenjitsu2m.onclick = function() {
  tenjitsu2m.style.display = "none";
}

var tenjitsu3m = document.getElementById("tenjitsu-3-m");
var tenjitsu3tr = document.getElementById("tenjitsu-3-tr");
var tenjitsu3mc = document.getElementById("tenjitsu-3-mc");
tenjitsu3tr.onclick = function(){
  tenjitsu3m.style.display = "block";
  tenjitsu3mc.src = this.src;
}
var tenjitsu3c = document.getElementById("tenjitsu-3-c");
tenjitsu3c.onclick = function() {
  tenjitsu3m.style.display = "none";
}
tenjitsu3m.onclick = function() {
  tenjitsu3m.style.display = "none";
}

var tenjitsu4m = document.getElementById("tenjitsu-4-m");
var tenjitsu4tr = document.getElementById("tenjitsu-4-tr");
var tenjitsu4mc = document.getElementById("tenjitsu-4-mc");
tenjitsu4tr.onclick = function(){
  tenjitsu4m.style.display = "block";
  tenjitsu4mc.src = this.src;
}
var tenjitsu4c = document.getElementById("tenjitsu-4-c");
tenjitsu4c.onclick = function() {
  tenjitsu4m.style.display = "none";
}
tenjitsu4m.onclick = function() {
  tenjitsu4m.style.display = "none";
}

var tenjitsu5m = document.getElementById("tenjitsu-5-m");
var tenjitsu5tr = document.getElementById("tenjitsu-5-tr");
var tenjitsu5mc = document.getElementById("tenjitsu-5-mc");
tenjitsu5tr.onclick = function(){
  tenjitsu5m.style.display = "block";
  tenjitsu5mc.src = this.src;
}
var tenjitsu5c = document.getElementById("tenjitsu-5-c");
tenjitsu5c.onclick = function() {
  tenjitsu5m.style.display = "none";
}
tenjitsu5m.onclick = function() {
  tenjitsu5m.style.display = "none";
}

var tenjitsu6m = document.getElementById("tenjitsu-6-m");
var tenjitsu6tr = document.getElementById("tenjitsu-6-tr");
var tenjitsu6mc = document.getElementById("tenjitsu-6-mc");
tenjitsu6tr.onclick = function(){
  tenjitsu6m.style.display = "block";
  tenjitsu6mc.src = this.src;
}
var tenjitsu6c = document.getElementById("tenjitsu-6-c");
tenjitsu6c.onclick = function() {
  tenjitsu6m.style.display = "none";
}
tenjitsu6m.onclick = function() {
  tenjitsu6m.style.display = "none";
}
