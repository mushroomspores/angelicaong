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

var suspension1m = document.getElementById("suspension-1-m");
var suspension1tr = document.getElementById("suspension-1-tr");
var suspension1mc = document.getElementById("suspension-1-mc");
suspension1tr.onclick = function(){
  suspension1m.style.display = "block";
  suspension1mc.src = this.src;
}
var suspension1c = document.getElementById("suspension-1-c");
suspension1c.onclick = function() {
  suspension1m.style.display = "none";
}
suspension1m.onclick = function() {
  suspension1m.style.display = "none";
}

var suspension2m = document.getElementById("suspension-2-m");
var suspension2tr = document.getElementById("suspension-2-tr");
var suspension2mc = document.getElementById("suspension-2-mc");
suspension2tr.onclick = function(){
  suspension2m.style.display = "block";
  suspension2mc.src = this.src;
}
var suspension2c = document.getElementById("suspension-2-c");
suspension2c.onclick = function() {
  suspension2m.style.display = "none";
}
suspension2m.onclick = function() {
  suspension2m.style.display = "none";
}

var suspension3m = document.getElementById("suspension-3-m");
var suspension3tr = document.getElementById("suspension-3-tr");
var suspension3mc = document.getElementById("suspension-3-mc");
suspension3tr.onclick = function(){
  suspension3m.style.display = "block";
  suspension3mc.src = this.src;
}
var suspension3c = document.getElementById("suspension-3-c");
suspension3c.onclick = function() {
  suspension3m.style.display = "none";
}
suspension3m.onclick = function() {
  suspension3m.style.display = "none";
}

var suspension5m = document.getElementById("suspension-5-m");
var suspension5tr = document.getElementById("suspension-5-tr");
var suspension5mc = document.getElementById("suspension-5-mc");
suspension5tr.onclick = function(){
  suspension5m.style.display = "block";
  suspension5mc.src = this.src;
}
var suspension5c = document.getElementById("suspension-5-c");
suspension5c.onclick = function() {
  suspension5m.style.display = "none";
}
suspension5m.onclick = function() {
  suspension5m.style.display = "none";
}
