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
var ihcmacl1m = document.getElementById("ihc-macl-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var ihcmacl1tr = document.getElementById("ihc-macl-1-tr");
var ihcmacl1mc = document.getElementById("ihc-macl-1-mc");
ihcmacl1tr.onclick = function(){
  ihcmacl1m.style.display = "block";
  ihcmacl1mc.src = this.src;
}
// Get the <span> element that closes the modal
var ihcmacl1c = document.getElementById("ihc-macl-1-c");
// When the user clicks on <span> (x), close the modal
ihcmacl1c.onclick = function() {
  ihcmacl1m.style.display = "none";
}
ihcmacl1m.onclick = function() {
  ihcmacl1m.style.display = "none";
}

var ihcmacl2m = document.getElementById("ihc-macl-2-m");
var ihcmacl2tr = document.getElementById("ihc-macl-2-tr");
var ihcmacl2mc = document.getElementById("ihc-macl-2-mc");
ihcmacl2tr.onclick = function(){
  ihcmacl2m.style.display = "block";
  ihcmacl2mc.src = this.src;
}
var ihcmacl2c = document.getElementById("ihc-macl-2-c");
ihcmacl2c.onclick = function() {
  ihcmacl2m.style.display = "none";
}
ihcmacl2m.onclick = function() {
  ihcmacl2m.style.display = "none";
}

var ihcmacl3m = document.getElementById("ihc-macl-3-m");
var ihcmacl3tr = document.getElementById("ihc-macl-3-tr");
var ihcmacl3mc = document.getElementById("ihc-macl-3-mc");
ihcmacl3tr.onclick = function(){
  ihcmacl3m.style.display = "block";
  ihcmacl3mc.src = this.src;
}
var ihcmacl3c = document.getElementById("ihc-macl-3-c");
ihcmacl3c.onclick = function() {
  ihcmacl3m.style.display = "none";
}
ihcmacl3m.onclick = function() {
  ihcmacl3m.style.display = "none";
}

var ihcmacl4m = document.getElementById("ihc-macl-4-m");
var ihcmacl4tr = document.getElementById("ihc-macl-4-tr");
var ihcmacl4mc = document.getElementById("ihc-macl-4-mc");
ihcmacl4tr.onclick = function(){
  ihcmacl4m.style.display = "block";
  ihcmacl4mc.src = this.src;
}
var ihcmacl4c = document.getElementById("ihc-macl-4-c");
ihcmacl4c.onclick = function() {
  ihcmacl4m.style.display = "none";
}
ihcmacl4m.onclick = function() {
  ihcmacl4m.style.display = "none";
}

var ihcmacl5m = document.getElementById("ihc-macl-5-m");
var ihcmacl5tr = document.getElementById("ihc-macl-5-tr");
var ihcmacl5mc = document.getElementById("ihc-macl-5-mc");
ihcmacl5tr.onclick = function(){
  ihcmacl5m.style.display = "block";
  ihcmacl5mc.src = this.src;
}
var ihcmacl5c = document.getElementById("ihc-macl-5-c");
ihcmacl5c.onclick = function() {
  ihcmacl5m.style.display = "none";
}
ihcmacl5m.onclick = function() {
  ihcmacl5m.style.display = "none";
}

var ihcmacl6m = document.getElementById("ihc-macl-6-m");
var ihcmacl6tr = document.getElementById("ihc-macl-6-tr");
var ihcmacl6mc = document.getElementById("ihc-macl-6-mc");
ihcmacl6tr.onclick = function(){
  ihcmacl6m.style.display = "block";
  ihcmacl6mc.src = this.src;
}
var ihcmacl6c = document.getElementById("ihc-macl-6-c");
ihcmacl6c.onclick = function() {
  ihcmacl6m.style.display = "none";
}
ihcmacl6m.onclick = function() {
  ihcmacl6m.style.display = "none";
}

var ihcmacl7m = document.getElementById("ihc-macl-7-m");
var ihcmacl7tr = document.getElementById("ihc-macl-7-tr");
var ihcmacl7mc = document.getElementById("ihc-macl-7-mc");
ihcmacl7tr.onclick = function(){
  ihcmacl7m.style.display = "block";
  ihcmacl7mc.src = this.src;
}
var ihcmacl7c = document.getElementById("ihc-macl-7-c");
ihcmacl7c.onclick = function() {
  ihcmacl7m.style.display = "none";
}
ihcmacl7m.onclick = function() {
  ihcmacl7m.style.display = "none";
}
