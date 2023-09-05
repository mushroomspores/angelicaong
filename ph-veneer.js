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
var vn1m = document.getElementById("vn-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var vn1tr = document.getElementById("vn-1-tr");
var vn1mc = document.getElementById("vn-1-mc");
vn1tr.onclick = function(){
  vn1m.style.display = "block";
  vn1mc.src = this.src;
}
// Get the <span> element that closes the modal
var vn1c = document.getElementById("vn-1-c");
// When the user clicks on <span> (x), close the modal
vn1c.onclick = function() {
  vn1m.style.display = "none";
}
vn1m.onclick = function() {
  vn1m.style.display = "none";
}

var vn2m = document.getElementById("vn-2-m");
var vn2tr = document.getElementById("vn-2-tr");
var vn2mc = document.getElementById("vn-2-mc");
vn2tr.onclick = function(){
  vn2m.style.display = "block";
  vn2mc.src = this.src;
}
var vn2c = document.getElementById("vn-2-c");
vn2c.onclick = function() {
  vn2m.style.display = "none";
}
vn2m.onclick = function() {
  vn2m.style.display = "none";
}

var vn3m = document.getElementById("vn-3-m");
var vn3tr = document.getElementById("vn-3-tr");
var vn3mc = document.getElementById("vn-3-mc");
vn3tr.onclick = function(){
  vn3m.style.display = "block";
  vn3mc.src = this.src;
}
var vn3c = document.getElementById("vn-3-c");
vn3c.onclick = function() {
  vn3m.style.display = "none";
}
vn3m.onclick = function() {
  vn3m.style.display = "none";
}

var vn4m = document.getElementById("vn-4-m");
var vn4tr = document.getElementById("vn-4-tr");
var vn4mc = document.getElementById("vn-4-mc");
vn4tr.onclick = function(){
  vn4m.style.display = "block";
  vn4mc.src = this.src;
}
var vn4c = document.getElementById("vn-4-c");
vn4c.onclick = function() {
  vn4m.style.display = "none";
}
vn4m.onclick = function() {
  vn4m.style.display = "none";
}

var vn5m = document.getElementById("vn-5-m");
var vn5tr = document.getElementById("vn-5-tr");
var vn5mc = document.getElementById("vn-5-mc");
vn5tr.onclick = function(){
  vn5m.style.display = "block";
  vn5mc.src = this.src;
}
var vn5c = document.getElementById("vn-5-c");
vn5c.onclick = function() {
  vn5m.style.display = "none";
}
vn5m.onclick = function() {
  vn5m.style.display = "none";
}

var vn6m = document.getElementById("vn-6-m");
var vn6tr = document.getElementById("vn-6-tr");
var vn6mc = document.getElementById("vn-6-mc");
vn6tr.onclick = function(){
  vn6m.style.display = "block";
  vn6mc.src = this.src;
}
var vn6c = document.getElementById("vn-6-c");
vn6c.onclick = function() {
  vn6m.style.display = "none";
}
vn6m.onclick = function() {
  vn6m.style.display = "none";
}
