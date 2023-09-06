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

//js script for ph-veneer.html
// Get the modal
var mnwp1m = document.getElementById("mnwp-1-m");
// Get the image and insert it inmnwpde the modal - use its "alt" text as a caption
var mnwp1tr = document.getElementById("mnwp-1-tr");
var mnwp1mc = document.getElementById("mnwp-1-mc");
mnwp1tr.onclick = function(){
  mnwp1m.style.display = "block";
  mnwp1mc.src = this.src;
}
// Get the <span> element that closes the modal
var mnwp1c = document.getElementById("mnwp-1-c");
// When the user clicks on <span> (x), close the modal
mnwp1c.onclick = function() {
  mnwp1m.style.display = "none";
}
mnwp1m.onclick = function() {
  mnwp1m.style.display = "none";
}

var mnwp3m = document.getElementById("mnwp-3-m");
var mnwp3tr = document.getElementById("mnwp-3-tr");
var mnwp3mc = document.getElementById("mnwp-3-mc");
mnwp3tr.onclick = function(){
  mnwp3m.style.display = "block";
  mnwp3mc.src = this.src;
}
var mnwp3c = document.getElementById("mnwp-3-c");
mnwp3c.onclick = function() {
  mnwp3m.style.display = "none";
}
mnwp3m.onclick = function() {
  mnwp3m.style.display = "none";
}

var mnwp4m = document.getElementById("mnwp-4-m");
var mnwp4tr = document.getElementById("mnwp-4-tr");
var mnwp4mc = document.getElementById("mnwp-4-mc");
mnwp4tr.onclick = function(){
  mnwp4m.style.display = "block";
  mnwp4mc.src = this.src;
}
var mnwp4c = document.getElementById("mnwp-4-c");
mnwp4c.onclick = function() {
  mnwp4m.style.display = "none";
}
mnwp4m.onclick = function() {
  mnwp4m.style.display = "none";
}

var mnwp5m = document.getElementById("mnwp-5-m");
var mnwp5tr = document.getElementById("mnwp-5-tr");
var mnwp5mc = document.getElementById("mnwp-5-mc");
mnwp5tr.onclick = function(){
  mnwp5m.style.display = "block";
  mnwp5mc.src = this.src;
}
var mnwp5c = document.getElementById("mnwp-5-c");
mnwp5c.onclick = function() {
  mnwp5m.style.display = "none";
}
mnwp5m.onclick = function() {
  mnwp5m.style.display = "none";
}

var mnwp6m = document.getElementById("mnwp-6-m");
var mnwp6tr = document.getElementById("mnwp-6-tr");
var mnwp6mc = document.getElementById("mnwp-6-mc");
mnwp6tr.onclick = function(){
  mnwp6m.style.display = "block";
  mnwp6mc.src = this.src;
}
var mnwp6c = document.getElementById("mnwp-6-c");
mnwp6c.onclick = function() {
  mnwp6m.style.display = "none";
}
mnwp6m.onclick = function() {
  mnwp6m.style.display = "none";
}

var mnwp7m = document.getElementById("mnwp-7-m");
var mnwp7tr = document.getElementById("mnwp-7-tr");
var mnwp7mc = document.getElementById("mnwp-7-mc");
mnwp7tr.onclick = function(){
  mnwp7m.style.display = "block";
  mnwp7mc.src = this.src;
}
var mnwp7c = document.getElementById("mnwp-7-c");
mnwp7c.onclick = function() {
  mnwp7m.style.display = "none";
}
mnwp7m.onclick = function() {
  mnwp7m.style.display = "none";
}

var mnwp8m = document.getElementById("mnwp-8-m");
var mnwp8tr = document.getElementById("mnwp-8-tr");
var mnwp8mc = document.getElementById("mnwp-8-mc");
mnwp8tr.onclick = function(){
  mnwp8m.style.display = "block";
  mnwp8mc.src = this.src;
}
var mnwp8c = document.getElementById("mnwp-8-c");
mnwp8c.onclick = function() {
  mnwp8m.style.display = "none";
}
mnwp8m.onclick = function() {
  mnwp8m.style.display = "none";
}

var mnwp2m = document.getElementById("mnwp-2-m");
var mnwp2tr = document.getElementById("mnwp-2-tr");
var mnwp2mc = document.getElementById("mnwp-2-mc");
mnwp2tr.onclick = function(){
  mnwp2m.style.display = "block";
  mnwp2mc.src = this.src;
}
var mnwp2c = document.getElementById("mnwp-2-c");
mnwp2c.onclick = function() {
  mnwp2m.style.display = "none";
}
mnwp2m.onclick = function() {
  mnwp2m.style.display = "none";
}
