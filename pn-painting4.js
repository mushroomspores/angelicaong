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
var painting41m = document.getElementById("painting4-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var painting41tr = document.getElementById("painting4-1-tr");
var painting41mc = document.getElementById("painting4-1-mc");
painting41tr.onclick = function(){
  painting41m.style.display = "block";
  painting41mc.src = this.src;
}
// Get the <span> element that closes the modal
var painting41c = document.getElementById("painting4-1-c");
// When the user clicks on <span> (x), close the modal
painting41c.onclick = function() {
  painting41m.style.display = "none";
}
painting41m.onclick = function() {
  painting41m.style.display = "none";
}

var painting43m = document.getElementById("painting4-3-m");
var painting43tr = document.getElementById("painting4-3-tr");
var painting43mc = document.getElementById("painting4-3-mc");
painting43tr.onclick = function(){
  painting43m.style.display = "block";
  painting43mc.src = this.src;
}
var painting43c = document.getElementById("painting4-3-c");
painting43c.onclick = function() {
  painting43m.style.display = "none";
}
painting43m.onclick = function() {
  painting43m.style.display = "none";
}
var painting451m = document.getElementById("painting4-5-1-m");
var painting451tr = document.getElementById("painting4-5-1-tr");
var painting451mc = document.getElementById("painting4-5-1-mc");
painting451tr.onclick = function(){
  painting451m.style.display = "block";
  painting451mc.src = paintingimages.jpg.src;
}
var painting451c = document.getElementById("painting4-5-1-c");
painting451c.onclick = function() {
  painting451m.style.display = "none";
}
painting451m.onclick = function() {
  painting451m.style.display = "none";
}

var painting452m = document.getElementById("painting4-5-2-m");
var painting452tr = document.getElementById("painting4-5-2-tr");
var painting452mc = document.getElementById("painting4-5-2-mc");
painting452tr.onclick = function(){
  painting452m.style.display = "block";
  painting452mc.src = paintingimages.jpg.src;
}
var painting452c = document.getElementById("painting4-5-2-c");
painting452c.onclick = function() {
  painting452m.style.display = "none";
}
painting452m.onclick = function() {
  painting452m.style.display = "none";
}
var painting453m = document.getElementById("painting4-5-3-m");
var painting453tr = document.getElementById("painting4-5-3-tr");
var painting453mc = document.getElementById("painting4-5-3-mc");
painting453tr.onclick = function(){
  painting453m.style.display = "block";
  painting453mc.src = paintingimages.jpg.src;
}
var painting453c = document.getElementById("painting4-5-3-c");
painting453c.onclick = function() {
  painting453m.style.display = "none";
}
painting453m.onclick = function() {
  painting453m.style.display = "none";
}
