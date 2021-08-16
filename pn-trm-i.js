AOS.init({
  duration: 1200,
})
//js script for ph-veneer.html
// Get the modal
var trmi1m = document.getElementById("trm-i-1-m");
// Get the image and insert it intrmide the modal - use its "alt" text as a caption
var trmi1tr = document.getElementById("trm-i-1-tr");
var trmi1mc = document.getElementById("trm-i-1-mc");
trmi1tr.onclick = function(){
  trmi1m.style.display = "block";
  trmi1mc.src = this.src;
}
// Get the <span> element that closes the modal
var trmi1c = document.getElementById("trm-i-1-c");
// When the user clicks on <span> (x), close the modal
trmi1c.onclick = function() {
  trmi1m.style.display = "none";
}
trmi1m.onclick = function() {
  trmi1m.style.display = "none";
}

var trmi2m = document.getElementById("trm-i-2-m");
var trmi2tr = document.getElementById("trm-i-2-tr");
var trmi2mc = document.getElementById("trm-i-2-mc");
trmi2tr.onclick = function(){
  trmi2m.style.display = "block";
  trmi2mc.src = this.src;
}
var trmi2c = document.getElementById("trm-i-2-c");
trmi2c.onclick = function() {
  trmi2m.style.display = "none";
}
trmi2m.onclick = function() {
  trmi2m.style.display = "none";
}

var trmi3m = document.getElementById("trm-i-3-m");
var trmi3tr = document.getElementById("trm-i-3-tr");
var trmi3mc = document.getElementById("trm-i-3-mc");
trmi3tr.onclick = function(){
  trmi3m.style.display = "block";
  trmi3mc.src = this.src;
}
var trmi3c = document.getElementById("trm-i-3-c");
trmi3c.onclick = function() {
  trmi3m.style.display = "none";
}
trmi3m.onclick = function() {
  trmi3m.style.display = "none";
}

var trmi4m = document.getElementById("trm-i-4-m");
var trmi4tr = document.getElementById("trm-i-4-tr");
var trmi4mc = document.getElementById("trm-i-4-mc");
trmi4tr.onclick = function(){
  trmi4m.style.display = "block";
  trmi4mc.src = this.src;
}
var trmi4c = document.getElementById("trm-i-4-c");
trmi4c.onclick = function() {
  trmi4m.style.display = "none";
}
trmi4m.onclick = function() {
  trmi4m.style.display = "none";
}
