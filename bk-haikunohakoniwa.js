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

var hnh13m = document.getElementById("hnh-13-m");
var hnh13tr = document.getElementById("hnh-13-tr");
var hnh13mc = document.getElementById("hnh-13-mc");
hnh13tr.onclick = function(){
  hnh13m.style.display = "block";
  hnh13mc.src = this.src;
}
var hnh13c = document.getElementById("hnh-13-c");
hnh13c.onclick = function() {
  hnh13m.style.display = "none";
}
hnh13m.onclick = function() {
  hnh13m.style.display = "none";
}

var hnh12m = document.getElementById("hnh-12-m");
var hnh12tr = document.getElementById("hnh-12-tr");
var hnh12mc = document.getElementById("hnh-12-mc");
hnh12tr.onclick = function(){
  hnh12m.style.display = "block";
  hnh12mc.src = this.src;
}
var hnh12c = document.getElementById("hnh-12-c");
hnh12c.onclick = function() {
  hnh12m.style.display = "none";
}
hnh12m.onclick = function() {
  hnh12m.style.display = "none";
}

var hnh3m = document.getElementById("hnh-3-m");
var hnh3tr = document.getElementById("hnh-3-tr");
var hnh3mc = document.getElementById("hnh-3-mc");
hnh3tr.onclick = function(){
  hnh3m.style.display = "block";
  hnh3mc.src = this.src;
}
var hnh3c = document.getElementById("hnh-3-c");
hnh3c.onclick = function() {
  hnh3m.style.display = "none";
}
hnh3m.onclick = function() {
  hnh3m.style.display = "none";
}

var hnh4m = document.getElementById("hnh-4-m");
var hnh4tr = document.getElementById("hnh-4-tr");
var hnh4mc = document.getElementById("hnh-4-mc");
hnh4tr.onclick = function(){
  hnh4m.style.display = "block";
  hnh4mc.src = this.src;
}
var hnh4c = document.getElementById("hnh-4-c");
hnh4c.onclick = function() {
  hnh4m.style.display = "none";
}
hnh4m.onclick = function() {
  hnh4m.style.display = "none";
}

var hnh5m = document.getElementById("hnh-5-m");
var hnh5tr = document.getElementById("hnh-5-tr");
var hnh5mc = document.getElementById("hnh-5-mc");
hnh5tr.onclick = function(){
  hnh5m.style.display = "block";
  hnh5mc.src = this.src;
}
var hnh5c = document.getElementById("hnh-5-c");
hnh5c.onclick = function() {
  hnh5m.style.display = "none";
}
hnh5m.onclick = function() {
  hnh5m.style.display = "none";
}

var hnh6m = document.getElementById("hnh-6-m");
var hnh6tr = document.getElementById("hnh-6-tr");
var hnh6mc = document.getElementById("hnh-6-mc");
hnh6tr.onclick = function(){
  hnh6m.style.display = "block";
  hnh6mc.src = this.src;
}
var hnh6c = document.getElementById("hnh-6-c");
hnh6c.onclick = function() {
  hnh6m.style.display = "none";
}
hnh6m.onclick = function() {
  hnh6m.style.display = "none";
}

var hnh8m = document.getElementById("hnh-8-m");
var hnh8tr = document.getElementById("hnh-8-tr");
var hnh8mc = document.getElementById("hnh-8-mc");
hnh8tr.onclick = function(){
  hnh8m.style.display = "block";
  hnh8mc.src = this.src;
}
var hnh8c = document.getElementById("hnh-8-c");
hnh8c.onclick = function() {
  hnh8m.style.display = "none";
}
hnh8m.onclick = function() {
  hnh8m.style.display = "none";
}

var hnh9m = document.getElementById("hnh-9-m");
var hnh9tr = document.getElementById("hnh-9-tr");
var hnh9mc = document.getElementById("hnh-9-mc");
hnh9tr.onclick = function(){
  hnh9m.style.display = "block";
  hnh9mc.src = this.src;
}
var hnh9c = document.getElementById("hnh-9-c");
hnh9c.onclick = function() {
  hnh9m.style.display = "none";
}
hnh9m.onclick = function() {
  hnh9m.style.display = "none";
}

var hnh10m = document.getElementById("hnh-10-m");
var hnh10tr = document.getElementById("hnh-10-tr");
var hnh10mc = document.getElementById("hnh-10-mc");
hnh10tr.onclick = function(){
  hnh10m.style.display = "block";
  hnh10mc.src = this.src;
}
var hnh10c = document.getElementById("hnh-10-c");
hnh10c.onclick = function() {
  hnh10m.style.display = "none";
}
hnh10m.onclick = function() {
  hnh10m.style.display = "none";
}

var hnh11m = document.getElementById("hnh-11-m");
var hnh11tr = document.getElementById("hnh-11-tr");
var hnh11mc = document.getElementById("hnh-11-mc");
hnh11tr.onclick = function(){
  hnh11m.style.display = "block";
  hnh11mc.src = this.src;
}
var hnh11c = document.getElementById("hnh-11-c");
hnh11c.onclick = function() {
  hnh11m.style.display = "none";
}
hnh11m.onclick = function() {
  hnh11m.style.display = "none";
}
