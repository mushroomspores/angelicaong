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

var snkhb1m = document.getElementById("snk-hb-1-m");
var snkhb1tr = document.getElementById("snk-hb-1-tr");
var snkhb1mc = document.getElementById("snk-hb-1-mc");
snkhb1tr.onclick = function(){
  snkhb1m.style.display = "block";
  snkhb1mc.src = this.src;
}
var snkhb1c = document.getElementById("snk-hb-1-c");
snkhb1c.onclick = function() {
  snkhb1m.style.display = "none";
}
snkhb1m.onclick = function() {
  snkhb1m.style.display = "none";
}

var snkhb2m = document.getElementById("snk-hb-2-m");
var snkhb2tr = document.getElementById("snk-hb-2-tr");
var snkhb2mc = document.getElementById("snk-hb-2-mc");
snkhb2tr.onclick = function(){
  snkhb2m.style.display = "block";
  snkhb2mc.src = this.src;
}
var snkhb2c = document.getElementById("snk-hb-2-c");
snkhb2c.onclick = function() {
  snkhb2m.style.display = "none";
}
snkhb2m.onclick = function() {
  snkhb2m.style.display = "none";
}

var snkhb3m = document.getElementById("snk-hb-3-m");
var snkhb3tr = document.getElementById("snk-hb-3-tr");
var snkhb3mc = document.getElementById("snk-hb-3-mc");
snkhb3tr.onclick = function(){
  snkhb3m.style.display = "block";
  snkhb3mc.src = this.src;
}
var snkhb3c = document.getElementById("snk-hb-3-c");
snkhb3c.onclick = function() {
  snkhb3m.style.display = "none";
}
snkhb3m.onclick = function() {
  snkhb3m.style.display = "none";
}

var snkhb4m = document.getElementById("snk-hb-4-m");
var snkhb4tr = document.getElementById("snk-hb-4-tr");
var snkhb4mc = document.getElementById("snk-hb-4-mc");
snkhb4tr.onclick = function(){
  snkhb4m.style.display = "block";
  snkhb4mc.src = this.src;
}
var snkhb4c = document.getElementById("snk-hb-4-c");
snkhb4c.onclick = function() {
  snkhb4m.style.display = "none";
}
snkhb4m.onclick = function() {
  snkhb4m.style.display = "none";
}

var snkhb7m = document.getElementById("snk-hb-7-m");
var snkhb7tr = document.getElementById("snk-hb-7-tr");
var snkhb7mc = document.getElementById("snk-hb-7-mc");
snkhb7tr.onclick = function(){
  snkhb7m.style.display = "block";
  snkhb7mc.src = this.src;
}
var snkhb7c = document.getElementById("snk-hb-7-c");
snkhb7c.onclick = function() {
  snkhb7m.style.display = "none";
}
snkhb7m.onclick = function() {
  snkhb7m.style.display = "none";
}

var snkhb8m = document.getElementById("snk-hb-8-m");
var snkhb8tr = document.getElementById("snk-hb-8-tr");
var snkhb8mc = document.getElementById("snk-hb-8-mc");
snkhb8tr.onclick = function(){
  snkhb8m.style.display = "block";
  snkhb8mc.src = this.src;
}
var snkhb8c = document.getElementById("snk-hb-8-c");
snkhb8c.onclick = function() {
  snkhb8m.style.display = "none";
}
snkhb8m.onclick = function() {
  snkhb8m.style.display = "none";
}

var snkhb9m = document.getElementById("snk-hb-9-m");
var snkhb9tr = document.getElementById("snk-hb-9-tr");
var snkhb9mc = document.getElementById("snk-hb-9-mc");
snkhb9tr.onclick = function(){
  snkhb9m.style.display = "block";
  snkhb9mc.src = this.src;
}
var snkhb9c = document.getElementById("snk-hb-9-c");
snkhb9c.onclick = function() {
  snkhb9m.style.display = "none";
}
snkhb9m.onclick = function() {
  snkhb9m.style.display = "none";
}

var snkhb10m = document.getElementById("snk-hb-10-m");
var snkhb10tr = document.getElementById("snk-hb-10-tr");
var snkhb10mc = document.getElementById("snk-hb-10-mc");
snkhb10tr.onclick = function(){
  snkhb10m.style.display = "block";
  snkhb10mc.src = this.src;
}
var snkhb10c = document.getElementById("snk-hb-10-c");
snkhb10c.onclick = function() {
  snkhb10m.style.display = "none";
}
snkhb10m.onclick = function() {
  snkhb10m.style.display = "none";
}

var snkhb11m = document.getElementById("snk-hb-11-m");
var snkhb11tr = document.getElementById("snk-hb-11-tr");
var snkhb11mc = document.getElementById("snk-hb-11-mc");
snkhb11tr.onclick = function(){
  snkhb11m.style.display = "block";
  snkhb11mc.src = this.src;
}
var snkhb11c = document.getElementById("snk-hb-11-c");
snkhb11c.onclick = function() {
  snkhb11m.style.display = "none";
}
snkhb11m.onclick = function() {
  snkhb11m.style.display = "none";
}

var snkhb13m = document.getElementById("snk-hb-13-m");
var snkhb13tr = document.getElementById("snk-hb-13-tr");
var snkhb13mc = document.getElementById("snk-hb-13-mc");
snkhb13tr.onclick = function(){
  snkhb13m.style.display = "block";
  snkhb13mc.src = this.src;
}
var snkhb13c = document.getElementById("snk-hb-13-c");
snkhb13c.onclick = function() {
  snkhb13m.style.display = "none";
}
snkhb13m.onclick = function() {
  snkhb13m.style.display = "none";
}

var snkhb17m = document.getElementById("snk-hb-17-m");
var snkhb17tr = document.getElementById("snk-hb-17-tr");
var snkhb17mc = document.getElementById("snk-hb-17-mc");
snkhb17tr.onclick = function(){
  snkhb17m.style.display = "block";
  snkhb17mc.src = this.src;
}
var snkhb17c = document.getElementById("snk-hb-17-c");
snkhb17c.onclick = function() {
  snkhb17m.style.display = "none";
}
snkhb17m.onclick = function() {
  snkhb17m.style.display = "none";
}

var snkhb18m = document.getElementById("snk-hb-18-m");
var snkhb18tr = document.getElementById("snk-hb-18-tr");
var snkhb18mc = document.getElementById("snk-hb-18-mc");
snkhb18tr.onclick = function(){
  snkhb18m.style.display = "block";
  snkhb18mc.src = this.src;
}
var snkhb18c = document.getElementById("snk-hb-18-c");
snkhb18c.onclick = function() {
  snkhb18m.style.display = "none";
}
snkhb18m.onclick = function() {
  snkhb18m.style.display = "none";
}

var snkhb20m = document.getElementById("snk-hb-20-m");
var snkhb20tr = document.getElementById("snk-hb-20-tr");
var snkhb20mc = document.getElementById("snk-hb-20-mc");
snkhb20tr.onclick = function(){
  snkhb20m.style.display = "block";
  snkhb20mc.src = this.src;
}
var snkhb20c = document.getElementById("snk-hb-20-c");
snkhb20c.onclick = function() {
  snkhb20m.style.display = "none";
}
snkhb20m.onclick = function() {
  snkhb20m.style.display = "none";
}
