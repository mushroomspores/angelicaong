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

var p2fi12m = document.getElementById("p2fi-12-m");
var p2fi12tr = document.getElementById("p2fi-12-tr");
var p2fi12mc = document.getElementById("p2fi-12-mc");
p2fi12tr.onclick = function(){
  p2fi12m.style.display = "block";
  p2fi12mc.src = photographyimages/poem2fi/poem2fi-ar1-bg-2021-angelicaong.jpg.src;
}
var p2fi12c = document.getElementById("p2fi-12-c");
p2fi12c.onclick = function() {
  p2fi12m.style.display = "none";
}
p2fi12m.onclick = function() {
  p2fi12m.style.display = "none";
}

var p2fi10m = document.getElementById("p2fi-10-m");
var p2fi10tr = document.getElementById("p2fi-10-tr");
var p2fi10mc = document.getElementById("p2fi-10-mc");
p2fi10tr.onclick = function(){
  p2fi10m.style.display = "block";
  p2fi10mc.src = this.src;
}
var p2fi10c = document.getElementById("p2fi-10-c");
p2fi10c.onclick = function() {
  p2fi10m.style.display = "none";
}
p2fi10m.onclick = function() {
  p2fi10m.style.display = "none";
}

var p2fi1m = document.getElementById("p2fi-1-m");
var p2fi1tr = document.getElementById("p2fi-1-tr");
var p2fi1mc = document.getElementById("p2fi-1-mc");
p2fi1tr.onclick = function(){
  p2fi1m.style.display = "block";
  p2fi1mc.src = this.src;
}
var p2fi1c = document.getElementById("p2fi-1-c");
p2fi1c.onclick = function() {
  p2fi1m.style.display = "none";
}
p2fi1m.onclick = function() {
  p2fi1m.style.display = "none";
}

var p2fi2m = document.getElementById("p2fi-2-m");
var p2fi2tr = document.getElementById("p2fi-2-tr");
var p2fi2mc = document.getElementById("p2fi-2-mc");
p2fi2tr.onclick = function(){
  p2fi2m.style.display = "block";
  p2fi2mc.src = this.src;
}
var p2fi2c = document.getElementById("p2fi-2-c");
p2fi2c.onclick = function() {
  p2fi2m.style.display = "none";
}
p2fi2m.onclick = function() {
  p2fi2m.style.display = "none";
}

var p2fi3m = document.getElementById("p2fi-3-m");
var p2fi3tr = document.getElementById("p2fi-3-tr");
var p2fi3mc = document.getElementById("p2fi-3-mc");
p2fi3tr.onclick = function(){
  p2fi3m.style.display = "block";
  p2fi3mc.src = this.src;
}
var p2fi3c = document.getElementById("p2fi-3-c");
p2fi3c.onclick = function() {
  p2fi3m.style.display = "none";
}
p2fi3m.onclick = function() {
  p2fi3m.style.display = "none";
}

var p2fi4m = document.getElementById("p2fi-4-m");
var p2fi4tr = document.getElementById("p2fi-4-tr");
var p2fi4mc = document.getElementById("p2fi-4-mc");
p2fi4tr.onclick = function(){
  p2fi4m.style.display = "block";
  p2fi4mc.src = this.src;
}
var p2fi4c = document.getElementById("p2fi-4-c");
p2fi4c.onclick = function() {
  p2fi4m.style.display = "none";
}
p2fi4m.onclick = function() {
  p2fi4m.style.display = "none";
}

var p2fi5m = document.getElementById("p2fi-5-m");
var p2fi5tr = document.getElementById("p2fi-5-tr");
var p2fi5mc = document.getElementById("p2fi-5-mc");
p2fi5tr.onclick = function(){
  p2fi5m.style.display = "block";
  p2fi5mc.src = this.src;
}
var p2fi5c = document.getElementById("p2fi-5-c");
p2fi5c.onclick = function() {
  p2fi5m.style.display = "none";
}
p2fi5m.onclick = function() {
  p2fi5m.style.display = "none";
}

var p2fi6m = document.getElementById("p2fi-6-m");
var p2fi6tr = document.getElementById("p2fi-6-tr");
var p2fi6mc = document.getElementById("p2fi-6-mc");
p2fi6tr.onclick = function(){
  p2fi6m.style.display = "block";
  p2fi6mc.src = this.src;
}
var p2fi6c = document.getElementById("p2fi-6-c");
p2fi6c.onclick = function() {
  p2fi6m.style.display = "none";
}
p2fi6m.onclick = function() {
  p2fi6m.style.display = "none";
}

var p2fi7m = document.getElementById("p2fi-7-m");
var p2fi7tr = document.getElementById("p2fi-7-tr");
var p2fi7mc = document.getElementById("p2fi-7-mc");
p2fi7tr.onclick = function(){
  p2fi7m.style.display = "block";
  p2fi7mc.src = this.src;
}
var p2fi7c = document.getElementById("p2fi-7-c");
p2fi7c.onclick = function() {
  p2fi7m.style.display = "none";
}
p2fi7m.onclick = function() {
  p2fi7m.style.display = "none";
}

var p2fi8m = document.getElementById("p2fi-8-m");
var p2fi8tr = document.getElementById("p2fi-8-tr");
var p2fi8mc = document.getElementById("p2fi-8-mc");
p2fi8tr.onclick = function(){
  p2fi8m.style.display = "block";
  p2fi8mc.src = this.src;
}
var p2fi8c = document.getElementById("p2fi-8-c");
p2fi8c.onclick = function() {
  p2fi8m.style.display = "none";
}
p2fi8m.onclick = function() {
  p2fi8m.style.display = "none";
}

var p2fi9m = document.getElementById("p2fi-9-m");
var p2fi9tr = document.getElementById("p2fi-9-tr");
var p2fi9mc = document.getElementById("p2fi-9-mc");
p2fi9tr.onclick = function(){
  p2fi9m.style.display = "block";
  p2fi9mc.src = this.src;
}
var p2fi9c = document.getElementById("p2fi-9-c");
p2fi9c.onclick = function() {
  p2fi9m.style.display = "none";
}
p2fi9m.onclick = function() {
  p2fi9m.style.display = "none";
}

var p2fi11m = document.getElementById("p2fi-11-m");
var p2fi11tr = document.getElementById("p2fi-11-tr");
var p2fi11mc = document.getElementById("p2fi-11-mc");
p2fi11tr.onclick = function(){
  p2fi11m.style.display = "block";
  p2fi11mc.src = this.src;
}
var p2fi11c = document.getElementById("p2fi-11-c");
p2fi11c.onclick = function() {
  p2fi11m.style.display = "none";
}
p2fi11m.onclick = function() {
  p2fi11m.style.display = "none";
}
