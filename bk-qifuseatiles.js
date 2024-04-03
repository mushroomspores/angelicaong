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

var qifust2m = document.getElementById("qifust-2-m");
var qifust2tr = document.getElementById("qifust-2-tr");
var qifust2mc = document.getElementById("qifust-2-mc");
qifust2tr.onclick = function(){
  qifust2m.style.display = "block";
  qifust2mc.src = this.src;
}
var qifust2c = document.getElementById("qifust-2-c");
qifust2c.onclick = function() {
  qifust2m.style.display = "none";
}
qifust2m.onclick = function() {
  qifust2m.style.display = "none";
}

var qifust1m = document.getElementById("qifust-1-m");
var qifust1tr = document.getElementById("qifust-1-tr");
var qifust1mc = document.getElementById("qifust-1-mc");
qifust1tr.onclick = function(){
  qifust1m.style.display = "block";
  qifust1mc.src = this.src;
}
var qifust1c = document.getElementById("qifust-1-c");
qifust1c.onclick = function() {
  qifust1m.style.display = "none";
}
qifust1m.onclick = function() {
  qifust1m.style.display = "none";
}

var qifust3m = document.getElementById("qifust-3-m");
var qifust3tr = document.getElementById("qifust-3-tr");
var qifust3mc = document.getElementById("qifust-3-mc");
qifust3tr.onclick = function(){
  qifust3m.style.display = "block";
  qifust3mc.src = this.src;
}
var qifust3c = document.getElementById("qifust-3-c");
qifust3c.onclick = function() {
  qifust3m.style.display = "none";
}
qifust3m.onclick = function() {
  qifust3m.style.display = "none";
}

var qifust4m = document.getElementById("qifust-4-m");
var qifust4tr = document.getElementById("qifust-4-tr");
var qifust4mc = document.getElementById("qifust-4-mc");
qifust4tr.onclick = function(){
  qifust4m.style.display = "block";
  qifust4mc.src = this.src;
}
var qifust4c = document.getElementById("qifust-4-c");
qifust4c.onclick = function() {
  qifust4m.style.display = "none";
}
qifust4m.onclick = function() {
  qifust4m.style.display = "none";
}

var qifust5m = document.getElementById("qifust-5-m");
var qifust5tr = document.getElementById("qifust-5-tr");
var qifust5mc = document.getElementById("qifust-5-mc");
qifust5tr.onclick = function(){
  qifust5m.style.display = "block";
  qifust5mc.src = this.src;
}
var qifust5c = document.getElementById("qifust-5-c");
qifust5c.onclick = function() {
  qifust5m.style.display = "none";
}
qifust5m.onclick = function() {
  qifust5m.style.display = "none";
}

var qifust6m = document.getElementById("qifust-6-m");
var qifust6tr = document.getElementById("qifust-6-tr");
var qifust6mc = document.getElementById("qifust-6-mc");
qifust6tr.onclick = function(){
  qifust6m.style.display = "block";
  qifust6mc.src = this.src;
}
var qifust6c = document.getElementById("qifust-6-c");
qifust6c.onclick = function() {
  qifust6m.style.display = "none";
}
qifust6m.onclick = function() {
  qifust6m.style.display = "none";
}

var qifust7m = document.getElementById("qifust-7-m");
var qifust7tr = document.getElementById("qifust-7-tr");
var qifust7mc = document.getElementById("qifust-7-mc");
qifust7tr.onclick = function(){
  qifust7m.style.display = "block";
  qifust7mc.src = this.src;
}
var qifust7c = document.getElementById("qifust-7-c");
qifust7c.onclick = function() {
  qifust7m.style.display = "none";
}
qifust7m.onclick = function() {
  qifust7m.style.display = "none";
}
