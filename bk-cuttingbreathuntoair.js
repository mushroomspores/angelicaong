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

var cbua2m = document.getElementById("cbua-2-m");
var cbua2tr = document.getElementById("cbua-2-tr");
var cbua2mc = document.getElementById("cbua-2-mc");
cbua2tr.onclick = function(){
  cbua2m.style.display = "block";
  cbua2mc.src = this.src;
}
var cbua2c = document.getElementById("cbua-2-c");
cbua2c.onclick = function() {
  cbua2m.style.display = "none";
}
cbua2m.onclick = function() {
  cbua2m.style.display = "none";
}

var cbua13m = document.getElementById("cbua-13-m");
var cbua13tr = document.getElementById("cbua-13-tr");
var cbua13mc = document.getElementById("cbua-13-mc");
cbua13tr.onclick = function(){
  cbua13m.style.display = "block";
  cbua13mc.src = this.src;
}
var cbua13c = document.getElementById("cbua-13-c");
cbua13c.onclick = function() {
  cbua13m.style.display = "none";
}
cbua13m.onclick = function() {
  cbua13m.style.display = "none";
}

var cbua4m = document.getElementById("cbua-4-m");
var cbua4tr = document.getElementById("cbua-4-tr");
var cbua4mc = document.getElementById("cbua-4-mc");
cbua4tr.onclick = function(){
  cbua4m.style.display = "block";
  cbua4mc.src = this.src;
}
var cbua4c = document.getElementById("cbua-4-c");
cbua4c.onclick = function() {
  cbua4m.style.display = "none";
}
cbua4m.onclick = function() {
  cbua4m.style.display = "none";
}

var cbua1m = document.getElementById("cbua-1-m");
var cbua1tr = document.getElementById("cbua-1-tr");
var cbua1mc = document.getElementById("cbua-1-mc");
cbua1tr.onclick = function(){
  cbua1m.style.display = "block";
  cbua1mc.src = this.src;
}
var cbua1c = document.getElementById("cbua-1-c");
cbua1c.onclick = function() {
  cbua1m.style.display = "none";
}
cbua1m.onclick = function() {
  cbua1m.style.display = "none";
}

var cbua6m = document.getElementById("cbua-6-m");
var cbua6tr = document.getElementById("cbua-6-tr");
var cbua6mc = document.getElementById("cbua-6-mc");
cbua6tr.onclick = function(){
  cbua6m.style.display = "block";
  cbua6mc.src = this.src;
}
var cbua6c = document.getElementById("cbua-6-c");
cbua6c.onclick = function() {
  cbua6m.style.display = "none";
}
cbua6m.onclick = function() {
  cbua6m.style.display = "none";
}

var cbua7m = document.getElementById("cbua-7-m");
var cbua7tr = document.getElementById("cbua-7-tr");
var cbua7mc = document.getElementById("cbua-7-mc");
cbua7tr.onclick = function(){
  cbua7m.style.display = "block";
  cbua7mc.src = this.src;
}
var cbua7c = document.getElementById("cbua-7-c");
cbua7c.onclick = function() {
  cbua7m.style.display = "none";
}
cbua7m.onclick = function() {
  cbua7m.style.display = "none";
}

var cbua28m = document.getElementById("cbua-28-m");
var cbua28tr = document.getElementById("cbua-28-tr");
var cbua28mc = document.getElementById("cbua-28-mc");
cbua28tr.onclick = function(){
  cbua28m.style.display = "block";
  cbua28mc.src = this.src;
}
var cbua28c = document.getElementById("cbua-28-c");
cbua28c.onclick = function() {
  cbua28m.style.display = "none";
}
cbua28m.onclick = function() {
  cbua28m.style.display = "none";
}

var cbua31m = document.getElementById("cbua-31-m");
var cbua31tr = document.getElementById("cbua-31-tr");
var cbua31mc = document.getElementById("cbua-31-mc");
cbua31tr.onclick = function(){
  cbua31m.style.display = "block";
  cbua31mc.src = this.src;
}
var cbua31c = document.getElementById("cbua-31-c");
cbua31c.onclick = function() {
  cbua31m.style.display = "none";
}
cbua31m.onclick = function() {
  cbua31m.style.display = "none";
}
