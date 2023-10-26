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

var otfexh1m = document.getElementById("otfexh-1-m");
var otfexh1tr = document.getElementById("otfexh-1-tr");
var otfexh1mc = document.getElementById("otfexh-1-mc");
otfexh1tr.onclick = function(){
  otfexh1m.style.display = "block";
  otfexh1mc.src = this.src;
}
var otfexh1c = document.getElementById("otfexh-1-c");
otfexh1c.onclick = function() {
  otfexh1m.style.display = "none";
}
otfexh1m.onclick = function() {
  otfexh1m.style.display = "none";
}

var otfexh2m = document.getElementById("otfexh-2-m");
var otfexh2tr = document.getElementById("otfexh-2-tr");
var otfexh2mc = document.getElementById("otfexh-2-mc");
otfexh2tr.onclick = function(){
  otfexh2m.style.display = "block";
  otfexh2mc.src = this.src;
}
var otfexh2c = document.getElementById("otfexh-2-c");
otfexh2c.onclick = function() {
  otfexh2m.style.display = "none";
}
otfexh2m.onclick = function() {
  otfexh2m.style.display = "none";
}

var otfexh3m = document.getElementById("otfexh-3-m");
var otfexh3tr = document.getElementById("otfexh-3-tr");
var otfexh3mc = document.getElementById("otfexh-3-mc");
otfexh3tr.onclick = function(){
  otfexh3m.style.display = "block";
  otfexh3mc.src = this.src;
}
var otfexh3c = document.getElementById("otfexh-3-c");
otfexh3c.onclick = function() {
  otfexh3m.style.display = "none";
}
otfexh3m.onclick = function() {
  otfexh3m.style.display = "none";
}

var otfexh4m = document.getElementById("otfexh-4-m");
var otfexh4tr = document.getElementById("otfexh-4-tr");
var otfexh4mc = document.getElementById("otfexh-4-mc");
otfexh4tr.onclick = function(){
  otfexh4m.style.display = "block";
  otfexh4mc.src = this.src;
}
var otfexh4c = document.getElementById("otfexh-4-c");
otfexh4c.onclick = function() {
  otfexh4m.style.display = "none";
}
otfexh4m.onclick = function() {
  otfexh4m.style.display = "none";
}

var otfexh5m = document.getElementById("otfexh-5-m");
var otfexh5tr = document.getElementById("otfexh-5-tr");
var otfexh5mc = document.getElementById("otfexh-5-mc");
otfexh5tr.onclick = function(){
  otfexh5m.style.display = "block";
  otfexh5mc.src = this.src;
}
var otfexh5c = document.getElementById("otfexh-5-c");
otfexh5c.onclick = function() {
  otfexh5m.style.display = "none";
}
otfexh5m.onclick = function() {
  otfexh5m.style.display = "none";
}

var otfexh6m = document.getElementById("otfexh-6-m");
var otfexh6tr = document.getElementById("otfexh-6-tr");
var otfexh6mc = document.getElementById("otfexh-6-mc");
otfexh6tr.onclick = function(){
  otfexh6m.style.display = "block";
  otfexh6mc.src = this.src;
}
var otfexh6c = document.getElementById("otfexh-6-c");
otfexh6c.onclick = function() {
  otfexh6m.style.display = "none";
}
otfexh6m.onclick = function() {
  otfexh6m.style.display = "none";
}

var otfexh7m = document.getElementById("otfexh-7-m");
var otfexh7tr = document.getElementById("otfexh-7-tr");
var otfexh7mc = document.getElementById("otfexh-7-mc");
otfexh7tr.onclick = function(){
  otfexh7m.style.display = "block";
  otfexh7mc.src = this.src;
}
var otfexh7c = document.getElementById("otfexh-7-c");
otfexh7c.onclick = function() {
  otfexh7m.style.display = "none";
}
otfexh7m.onclick = function() {
  otfexh7m.style.display = "none";
}

var otfexh8m = document.getElementById("otfexh-8-m");
var otfexh8tr = document.getElementById("otfexh-8-tr");
var otfexh8mc = document.getElementById("otfexh-8-mc");
otfexh8tr.onclick = function(){
  otfexh8m.style.display = "block";
  otfexh8mc.src = this.src;
}
var otfexh8c = document.getElementById("otfexh-8-c");
otfexh8c.onclick = function() {
  otfexh8m.style.display = "none";
}
otfexh8m.onclick = function() {
  otfexh8m.style.display = "none";
}

var otfexh9m = document.getElementById("otfexh-9-m");
var otfexh9tr = document.getElementById("otfexh-9-tr");
var otfexh9mc = document.getElementById("otfexh-9-mc");
otfexh9tr.onclick = function(){
  otfexh9m.style.display = "block";
  otfexh9mc.src = this.src;
}
var otfexh9c = document.getElementById("otfexh-9-c");
otfexh9c.onclick = function() {
  otfexh9m.style.display = "none";
}
otfexh9m.onclick = function() {
  otfexh9m.style.display = "none";
}

var otfexh10m = document.getElementById("otfexh-10-m");
var otfexh10tr = document.getElementById("otfexh-10-tr");
var otfexh10mc = document.getElementById("otfexh-10-mc");
otfexh10tr.onclick = function(){
  otfexh10m.style.display = "block";
  otfexh10mc.src = this.src;
}
var otfexh10c = document.getElementById("otfexh-10-c");
otfexh10c.onclick = function() {
  otfexh10m.style.display = "none";
}
otfexh10m.onclick = function() {
  otfexh10m.style.display = "none";
}

var otfexh11m = document.getElementById("otfexh-11-m");
var otfexh11tr = document.getElementById("otfexh-11-tr");
var otfexh11mc = document.getElementById("otfexh-11-mc");
otfexh11tr.onclick = function(){
  otfexh11m.style.display = "block";
  otfexh11mc.src = this.src;
}
var otfexh11c = document.getElementById("otfexh-11-c");
otfexh11c.onclick = function() {
  otfexh11m.style.display = "none";
}
otfexh11m.onclick = function() {
  otfexh11m.style.display = "none";
}

var otfexh12m = document.getElementById("otfexh-12-m");
var otfexh12tr = document.getElementById("otfexh-12-tr");
var otfexh12mc = document.getElementById("otfexh-12-mc");
otfexh12tr.onclick = function(){
  otfexh12m.style.display = "block";
  otfexh12mc.src = this.src;
}
var otfexh12c = document.getElementById("otfexh-12-c");
otfexh12c.onclick = function() {
  otfexh12m.style.display = "none";
}
otfexh12m.onclick = function() {
  otfexh12m.style.display = "none";
}

var otfexh13m = document.getElementById("otfexh-13-m");
var otfexh13tr = document.getElementById("otfexh-13-tr");
var otfexh13mc = document.getElementById("otfexh-13-mc");
otfexh13tr.onclick = function(){
  otfexh13m.style.display = "block";
  otfexh13mc.src = this.src;
}
var otfexh13c = document.getElementById("otfexh-13-c");
otfexh13c.onclick = function() {
  otfexh13m.style.display = "none";
}
otfexh13m.onclick = function() {
  otfexh13m.style.display = "none";
}

var otfexh14m = document.getElementById("otfexh-14-m");
var otfexh14tr = document.getElementById("otfexh-14-tr");
var otfexh14mc = document.getElementById("otfexh-14-mc");
otfexh14tr.onclick = function(){
  otfexh14m.style.display = "block";
  otfexh14mc.src = this.src;
}
var otfexh14c = document.getElementById("otfexh-14-c");
otfexh14c.onclick = function() {
  otfexh14m.style.display = "none";
}
otfexh14m.onclick = function() {
  otfexh14m.style.display = "none";
}

var otfexh15m = document.getElementById("otfexh-15-m");
var otfexh15tr = document.getElementById("otfexh-15-tr");
var otfexh15mc = document.getElementById("otfexh-15-mc");
otfexh15tr.onclick = function(){
  otfexh15m.style.display = "block";
  otfexh15mc.src = this.src;
}
var otfexh15c = document.getElementById("otfexh-15-c");
otfexh15c.onclick = function() {
  otfexh15m.style.display = "none";
}
otfexh15m.onclick = function() {
  otfexh15m.style.display = "none";
}

var otfexh16m = document.getElementById("otfexh-16-m");
var otfexh16tr = document.getElementById("otfexh-16-tr");
var otfexh16mc = document.getElementById("otfexh-16-mc");
otfexh16tr.onclick = function(){
  otfexh16m.style.display = "block";
  otfexh16mc.src = this.src;
}
var otfexh16c = document.getElementById("otfexh-16-c");
otfexh16c.onclick = function() {
  otfexh16m.style.display = "none";
}
otfexh16m.onclick = function() {
  otfexh16m.style.display = "none";
}

var otfexh17m = document.getElementById("otfexh-17-m");
var otfexh17tr = document.getElementById("otfexh-17-tr");
var otfexh17mc = document.getElementById("otfexh-17-mc");
otfexh17tr.onclick = function(){
  otfexh17m.style.display = "block";
  otfexh17mc.src = this.src;
}
var otfexh17c = document.getElementById("otfexh-17-c");
otfexh17c.onclick = function() {
  otfexh17m.style.display = "none";
}
otfexh17m.onclick = function() {
  otfexh17m.style.display = "none";
}

var otfexh18m = document.getElementById("otfexh-18-m");
var otfexh18tr = document.getElementById("otfexh-18-tr");
var otfexh18mc = document.getElementById("otfexh-18-mc");
otfexh18tr.onclick = function(){
  otfexh18m.style.display = "block";
  otfexh18mc.src = this.src;
}
var otfexh18c = document.getElementById("otfexh-18-c");
otfexh18c.onclick = function() {
  otfexh18m.style.display = "none";
}
otfexh18m.onclick = function() {
  otfexh18m.style.display = "none";
}

var otfexh19m = document.getElementById("otfexh-19-m");
var otfexh19tr = document.getElementById("otfexh-19-tr");
var otfexh19mc = document.getElementById("otfexh-19-mc");
otfexh19tr.onclick = function(){
  otfexh19m.style.display = "block";
  otfexh19mc.src = this.src;
}
var otfexh19c = document.getElementById("otfexh-19-c");
otfexh19c.onclick = function() {
  otfexh19m.style.display = "none";
}
otfexh19m.onclick = function() {
  otfexh19m.style.display = "none";
}

var otfexh20m = document.getElementById("otfexh-20-m");
var otfexh20tr = document.getElementById("otfexh-20-tr");
var otfexh20mc = document.getElementById("otfexh-20-mc");
otfexh20tr.onclick = function(){
  otfexh20m.style.display = "block";
  otfexh20mc.src = this.src;
}
var otfexh20c = document.getElementById("otfexh-20-c");
otfexh20c.onclick = function() {
  otfexh20m.style.display = "none";
}
otfexh20m.onclick = function() {
  otfexh20m.style.display = "none";
}
