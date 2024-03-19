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

var imppoap2m = document.getElementById("imppoap-2-m");
var imppoap2tr = document.getElementById("imppoap-2-tr");
var imppoap2mc = document.getElementById("imppoap-2-mc");
imppoap2tr.onclick = function(){
  imppoap2m.style.display = "block";
  imppoap2mc.src = this.src;
}
var imppoap2c = document.getElementById("imppoap-2-c");
imppoap2c.onclick = function() {
  imppoap2m.style.display = "none";
}
imppoap2m.onclick = function() {
  imppoap2m.style.display = "none";
}

var imppoap1m = document.getElementById("imppoap-1-m");
var imppoap1tr = document.getElementById("imppoap-1-tr");
var imppoap1mc = document.getElementById("imppoap-1-mc");
imppoap1tr.onclick = function(){
  imppoap1m.style.display = "block";
  imppoap1mc.src = this.src;
}
var imppoap1c = document.getElementById("imppoap-1-c");
imppoap1c.onclick = function() {
  imppoap1m.style.display = "none";
}
imppoap1m.onclick = function() {
  imppoap1m.style.display = "none";
}

var imppoap3m = document.getElementById("imppoap-3-m");
var imppoap3tr = document.getElementById("imppoap-3-tr");
var imppoap3mc = document.getElementById("imppoap-3-mc");
imppoap3tr.onclick = function(){
  imppoap3m.style.display = "block";
  imppoap3mc.src = this.src;
}
var imppoap3c = document.getElementById("imppoap-3-c");
imppoap3c.onclick = function() {
  imppoap3m.style.display = "none";
}
imppoap3m.onclick = function() {
  imppoap3m.style.display = "none";
}

var imppoap4m = document.getElementById("imppoap-4-m");
var imppoap4tr = document.getElementById("imppoap-4-tr");
var imppoap4mc = document.getElementById("imppoap-4-mc");
imppoap4tr.onclick = function(){
  imppoap4m.style.display = "block";
  imppoap4mc.src = this.src;
}
var imppoap4c = document.getElementById("imppoap-4-c");
imppoap4c.onclick = function() {
  imppoap4m.style.display = "none";
}
imppoap4m.onclick = function() {
  imppoap4m.style.display = "none";
}

var imppoap5m = document.getElementById("imppoap-5-m");
var imppoap5tr = document.getElementById("imppoap-5-tr");
var imppoap5mc = document.getElementById("imppoap-5-mc");
imppoap5tr.onclick = function(){
  imppoap5m.style.display = "block";
  imppoap5mc.src = this.src;
}
var imppoap5c = document.getElementById("imppoap-5-c");
imppoap5c.onclick = function() {
  imppoap5m.style.display = "none";
}
imppoap5m.onclick = function() {
  imppoap5m.style.display = "none";
}

var imppoap6m = document.getElementById("imppoap-6-m");
var imppoap6tr = document.getElementById("imppoap-6-tr");
var imppoap6mc = document.getElementById("imppoap-6-mc");
imppoap6tr.onclick = function(){
  imppoap6m.style.display = "block";
  imppoap6mc.src = this.src;
}
var imppoap6c = document.getElementById("imppoap-6-c");
imppoap6c.onclick = function() {
  imppoap6m.style.display = "none";
}
imppoap6m.onclick = function() {
  imppoap6m.style.display = "none";
}
