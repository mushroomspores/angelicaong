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

// js script for ph-tsukanomano.html
// Get the modal
var untasp1m = document.getElementById("untasp-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var untasp1tr = document.getElementById("untasp-1-tr");
var untasp1mc = document.getElementById("untasp-1-mc");
untasp1tr.onclick = function(){
  untasp1m.style.display = "block";
  untasp1mc.src = this.src;
}
// Get the <span> element that closes the modal
var untasp1c = document.getElementById("untasp-1-c");
// When the user clicks on <span> (x), close the modal
untasp1c.onclick = function() {
  untasp1m.style.display = "none";
}
// When the user clicks anywhere again, close the modal
untasp1m.onclick = function() {
  untasp1m.style.display = "none";
}


var untasp2m = document.getElementById("untasp-2-m");
var untasp2tr = document.getElementById("untasp-2-tr");
var untasp2mc = document.getElementById("untasp-2-mc");
untasp2tr.onclick = function(){
  untasp2m.style.display = "block";
  untasp2mc.src = this.src;
}
var untasp2c = document.getElementById("untasp-2-c");
untasp2c.onclick = function() {
  untasp2m.style.display = "none";
}
untasp2m.onclick = function() {
  untasp2m.style.display = "none";
}

var untasp3m = document.getElementById("untasp-3-m");
var untasp3tr = document.getElementById("untasp-3-tr");
var untasp3mc = document.getElementById("untasp-3-mc");
untasp3tr.onclick = function(){
  untasp3m.style.display = "block";
  untasp3mc.src = this.src;
}
var untasp3c = document.getElementById("untasp-3-c");
untasp3c.onclick = function() {
  untasp3m.style.display = "none";
}
untasp3m.onclick = function() {
  untasp3m.style.display = "none";
}

var untasp4m = document.getElementById("untasp-4-m");
var untasp4tr = document.getElementById("untasp-4-tr");
var untasp4mc = document.getElementById("untasp-4-mc");
untasp4tr.onclick = function(){
  untasp4m.style.display = "block";
  untasp4mc.src = this.src;
}
var untasp4c = document.getElementById("untasp-4-c");
untasp4c.onclick = function() {
  untasp4m.style.display = "none";
}
untasp4m.onclick = function() {
  untasp4m.style.display = "none";
}

var untasp5m = document.getElementById("untasp-5-m");
var untasp5tr = document.getElementById("untasp-5-tr");
var untasp5mc = document.getElementById("untasp-5-mc");
untasp5tr.onclick = function(){
  untasp5m.style.display = "block";
  untasp5mc.src = this.src;
}
var untasp5c = document.getElementById("untasp-5-c");
untasp5c.onclick = function() {
  untasp5m.style.display = "none";
}
untasp5m.onclick = function() {
  untasp5m.style.display = "none";
}

var untasp6m = document.getElementById("untasp-6-m");
var untasp6tr = document.getElementById("untasp-6-tr");
var untasp6mc = document.getElementById("untasp-6-mc");
untasp6tr.onclick = function(){
  untasp6m.style.display = "block";
  untasp6mc.src = this.src;
}
var untasp6c = document.getElementById("untasp-6-c");
untasp6c.onclick = function() {
  untasp6m.style.display = "none";
}
untasp6m.onclick = function() {
  untasp6m.style.display = "none";
}

var untasp7m = document.getElementById("untasp-7-m");
var untasp7tr = document.getElementById("untasp-7-tr");
var untasp7mc = document.getElementById("untasp-7-mc");
untasp7tr.onclick = function(){
  untasp7m.style.display = "block";
  untasp7mc.src = this.src;
}
var untasp7c = document.getElementById("untasp-7-c");
untasp7c.onclick = function() {
  untasp7m.style.display = "none";
}
untasp7m.onclick = function() {
  untasp7m.style.display = "none";
}

var untasp8m = document.getElementById("untasp-8-m");
var untasp8tr = document.getElementById("untasp-8-tr");
var untasp8mc = document.getElementById("untasp-8-mc");
untasp8tr.onclick = function(){
  untasp8m.style.display = "block";
  untasp8mc.src = this.src;
}
var untasp8c = document.getElementById("untasp-8-c");
untasp8c.onclick = function() {
  untasp8m.style.display = "none";
}
untasp8m.onclick = function() {
  untasp8m.style.display = "none";
}

var untasp9m = document.getElementById("untasp-9-m");
var untasp9tr = document.getElementById("untasp-9-tr");
var untasp9mc = document.getElementById("untasp-9-mc");
untasp9tr.onclick = function(){
  untasp9m.style.display = "block";
  untasp9mc.src = this.src;
}
var untasp9c = document.getElementById("untasp-9-c");
untasp9c.onclick = function() {
  untasp9m.style.display = "none";
}
untasp9m.onclick = function() {
  untasp9m.style.display = "none";
}

var untasp10m = document.getElementById("untasp-10-m");
var untasp10tr = document.getElementById("untasp-10-tr");
var untasp10mc = document.getElementById("untasp-10-mc");
untasp10tr.onclick = function(){
  untasp10m.style.display = "block";
  untasp10mc.src = this.src;
}
var untasp10c = document.getElementById("untasp-10-c");
untasp10c.onclick = function() {
  untasp10m.style.display = "none";
}
untasp10m.onclick = function() {
  untasp10m.style.display = "none";
}

var untasp11m = document.getElementById("untasp-11-m");
var untasp11tr = document.getElementById("untasp-11-tr");
var untasp11mc = document.getElementById("untasp-11-mc");
untasp11tr.onclick = function(){
  untasp11m.style.display = "block";
  untasp11mc.src = this.src;
}
var untasp11c = document.getElementById("untasp-11-c");
untasp11c.onclick = function() {
  untasp11m.style.display = "none";
}
untasp11m.onclick = function() {
  untasp11m.style.display = "none";
}

var untasp12m = document.getElementById("untasp-12-m");
var untasp12tr = document.getElementById("untasp-12-tr");
var untasp12mc = document.getElementById("untasp-12-mc");
untasp12tr.onclick = function(){
  untasp12m.style.display = "block";
  untasp12mc.src = this.src;
}
var untasp12c = document.getElementById("untasp-12-c");
untasp12c.onclick = function() {
  untasp12m.style.display = "none";
}
untasp12m.onclick = function() {
  untasp12m.style.display = "none";
}

var untasp13m = document.getElementById("untasp-13-m");
var untasp13tr = document.getElementById("untasp-13-tr");
var untasp13mc = document.getElementById("untasp-13-mc");
untasp13tr.onclick = function(){
  untasp13m.style.display = "block";
  untasp13mc.src = this.src;
}
var untasp13c = document.getElementById("untasp-13-c");
untasp13c.onclick = function() {
  untasp13m.style.display = "none";
}
untasp13m.onclick = function() {
  untasp13m.style.display = "none";
}

var untasp14m = document.getElementById("untasp-14-m");
var untasp14tr = document.getElementById("untasp-14-tr");
var untasp14mc = document.getElementById("untasp-14-mc");
untasp14tr.onclick = function(){
  untasp14m.style.display = "block";
  untasp14mc.src = this.src;
}
var untasp14c = document.getElementById("untasp-14-c");
untasp14c.onclick = function() {
  untasp14m.style.display = "none";
}
untasp14m.onclick = function() {
  untasp14m.style.display = "none";
}

var untasp15m = document.getElementById("untasp-15-m");
var untasp15tr = document.getElementById("untasp-15-tr");
var untasp15mc = document.getElementById("untasp-15-mc");
untasp15tr.onclick = function(){
  untasp15m.style.display = "block";
  untasp15mc.src = this.src;
}
var untasp15c = document.getElementById("untasp-15-c");
untasp15c.onclick = function() {
  untasp15m.style.display = "none";
}
untasp15m.onclick = function() {
  untasp15m.style.display = "none";
}

var untasp16m = document.getElementById("untasp-16-m");
var untasp16tr = document.getElementById("untasp-16-tr");
var untasp16mc = document.getElementById("untasp-16-mc");
untasp16tr.onclick = function(){
  untasp16m.style.display = "block";
  untasp16mc.src = this.src;
}
var untasp16c = document.getElementById("untasp-16-c");
untasp16c.onclick = function() {
  untasp16m.style.display = "none";
}
untasp16m.onclick = function() {
  untasp16m.style.display = "none";
}

var untasp17m = document.getElementById("untasp-17-m");
var untasp17tr = document.getElementById("untasp-17-tr");
var untasp17mc = document.getElementById("untasp-17-mc");
untasp17tr.onclick = function(){
  untasp17m.style.display = "block";
  untasp17mc.src = this.src;
}
var untasp17c = document.getElementById("untasp-17-c");
untasp17c.onclick = function() {
  untasp17m.style.display = "none";
}
untasp17m.onclick = function() {
  untasp17m.style.display = "none";
}

var untasp18m = document.getElementById("untasp-18-m");
var untasp18tr = document.getElementById("untasp-18-tr");
var untasp18mc = document.getElementById("untasp-18-mc");
untasp18tr.onclick = function(){
  untasp18m.style.display = "block";
  untasp18mc.src = this.src;
}
var untasp18c = document.getElementById("untasp-18-c");
untasp18c.onclick = function() {
  untasp18m.style.display = "none";
}
untasp18m.onclick = function() {
  untasp18m.style.display = "none";
}

var untasp19m = document.getElementById("untasp-19-m");
var untasp19tr = document.getElementById("untasp-19-tr");
var untasp19mc = document.getElementById("untasp-19-mc");
untasp19tr.onclick = function(){
  untasp19m.style.display = "block";
  untasp19mc.src = this.src;
}
var untasp19c = document.getElementById("untasp-19-c");
untasp19c.onclick = function() {
  untasp19m.style.display = "none";
}
untasp19m.onclick = function() {
  untasp19m.style.display = "none";
}
