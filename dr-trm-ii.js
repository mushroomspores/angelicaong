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
var trmii1m = document.getElementById("trm-ii-1-m");
// Get the image and insert it intrmiide the modal - use its "alt" text as a caption
var trmii1tr = document.getElementById("trm-ii-1-tr");
var trmii1mc = document.getElementById("trm-ii-1-mc");
trmii1tr.onclick = function(){
  trmii1m.style.display = "block";
  trmii1mc.src = this.src;
}
// Get the <span> element that closes the modal
var trmii1c = document.getElementById("trm-ii-1-c");
// When the user clicks on <span> (x), close the modal
trmii1c.onclick = function() {
  trmii1m.style.display = "none";
}
trmii1m.onclick = function() {
  trmii1m.style.display = "none";
}

var trmii2m = document.getElementById("trm-ii-2-m");
var trmii2tr = document.getElementById("trm-ii-2-tr");
var trmii2mc = document.getElementById("trm-ii-2-mc");
trmii2tr.onclick = function(){
  trmii2m.style.display = "block";
  trmii2mc.src = this.src;
}
var trmii2c = document.getElementById("trm-ii-2-c");
trmii2c.onclick = function() {
  trmii2m.style.display = "none";
}
trmii2m.onclick = function() {
  trmii2m.style.display = "none";
}

var trmii3m = document.getElementById("trm-ii-3-m");
var trmii3tr = document.getElementById("trm-ii-3-tr");
var trmii3mc = document.getElementById("trm-ii-3-mc");
trmii3tr.onclick = function(){
  trmii3m.style.display = "block";
  trmii3mc.src = this.src;
}
var trmii3c = document.getElementById("trm-ii-3-c");
trmii3c.onclick = function() {
  trmii3m.style.display = "none";
}
trmii3m.onclick = function() {
  trmii3m.style.display = "none";
}

var trmii4m = document.getElementById("trm-ii-4-m");
var trmii4tr = document.getElementById("trm-ii-4-tr");
var trmii4mc = document.getElementById("trm-ii-4-mc");
trmii4tr.onclick = function(){
  trmii4m.style.display = "block";
  trmii4mc.src = this.src;
}
var trmii4c = document.getElementById("trm-ii-4-c");
trmii4c.onclick = function() {
  trmii4m.style.display = "none";
}
trmii4m.onclick = function() {
  trmii4m.style.display = "none";
}

var trmii5m = document.getElementById("trm-ii-5-m");
var trmii5tr = document.getElementById("trm-ii-5-tr");
var trmii5mc = document.getElementById("trm-ii-5-mc");
trmii5tr.onclick = function(){
  trmii5m.style.display = "block";
  trmii5mc.src = this.src;
}
var trmii5c = document.getElementById("trm-ii-5-c");
trmii5c.onclick = function() {
  trmii5m.style.display = "none";
}
trmii5m.onclick = function() {
  trmii5m.style.display = "none";
}

var trmii6m = document.getElementById("trm-ii-6-m");
var trmii6tr = document.getElementById("trm-ii-6-tr");
var trmii6mc = document.getElementById("trm-ii-6-mc");
trmii6tr.onclick = function(){
  trmii6m.style.display = "block";
  trmii6mc.src = this.src;
}
var trmii6c = document.getElementById("trm-ii-6-c");
trmii6c.onclick = function() {
  trmii6m.style.display = "none";
}
trmii6m.onclick = function() {
  trmii6m.style.display = "none";
}
