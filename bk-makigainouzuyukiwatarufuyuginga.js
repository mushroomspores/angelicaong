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

var makigai1m = document.getElementById("makigai-1-m");
var makigai1tr = document.getElementById("makigai-1-tr");
var makigai1mc = document.getElementById("makigai-1-mc");
makigai1tr.onclick = function(){
  makigai1m.style.display = "block";
  makigai1mc.src = this.src;
}
var makigai1c = document.getElementById("makigai-1-c");
makigai1c.onclick = function() {
  makigai1m.style.display = "none";
}
makigai1m.onclick = function() {
  makigai1m.style.display = "none";
}

var makigai3m = document.getElementById("makigai-3-m");
var makigai3tr = document.getElementById("makigai-3-tr");
var makigai3mc = document.getElementById("makigai-3-mc");
makigai3tr.onclick = function(){
  makigai3m.style.display = "block";
  makigai3mc.src = this.src;
}
var makigai3c = document.getElementById("makigai-3-c");
makigai3c.onclick = function() {
  makigai3m.style.display = "none";
}
makigai3m.onclick = function() {
  makigai3m.style.display = "none";
}

var makigai4m = document.getElementById("makigai-4-m");
var makigai4tr = document.getElementById("makigai-4-tr");
var makigai4mc = document.getElementById("makigai-4-mc");
makigai4tr.onclick = function(){
  makigai4m.style.display = "block";
  makigai4mc.src = this.src;
}
var makigai4c = document.getElementById("makigai-4-c");
makigai4c.onclick = function() {
  makigai4m.style.display = "none";
}
makigai4m.onclick = function() {
  makigai4m.style.display = "none";
}

var makigai6m = document.getElementById("makigai-6-m");
var makigai6tr = document.getElementById("makigai-6-tr");
var makigai6mc = document.getElementById("makigai-6-mc");
makigai6tr.onclick = function(){
  makigai6m.style.display = "block";
  makigai6mc.src = this.src;
}
var makigai6c = document.getElementById("makigai-6-c");
makigai6c.onclick = function() {
  makigai6m.style.display = "none";
}
makigai6m.onclick = function() {
  makigai6m.style.display = "none";
}

var makigai8m = document.getElementById("makigai-8-m");
var makigai8tr = document.getElementById("makigai-8-tr");
var makigai8mc = document.getElementById("makigai-8-mc");
makigai8tr.onclick = function(){
  makigai8m.style.display = "block";
  makigai8mc.src = this.src;
}
var makigai8c = document.getElementById("makigai-8-c");
makigai8c.onclick = function() {
  makigai8m.style.display = "none";
}
makigai8m.onclick = function() {
  makigai8m.style.display = "none";
}

var makigai9m = document.getElementById("makigai-9-m");
var makigai9tr = document.getElementById("makigai-9-tr");
var makigai9mc = document.getElementById("makigai-9-mc");
makigai9tr.onclick = function(){
  makigai9m.style.display = "block";
  makigai9mc.src = this.src;
}
var makigai9c = document.getElementById("makigai-9-c");
makigai9c.onclick = function() {
  makigai9m.style.display = "none";
}
makigai9m.onclick = function() {
  makigai9m.style.display = "none";
}

var makigai10m = document.getElementById("makigai-10-m");
var makigai10tr = document.getElementById("makigai-10-tr");
var makigai10mc = document.getElementById("makigai-10-mc");
makigai10tr.onclick = function(){
  makigai10m.style.display = "block";
  makigai10mc.src = this.src;
}
var makigai10c = document.getElementById("makigai-10-c");
makigai10c.onclick = function() {
  makigai10m.style.display = "none";
}
makigai10m.onclick = function() {
  makigai10m.style.display = "none";
}
