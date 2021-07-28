//js script for ph-veneer.html
// Get the modal
var bdstOne1m = document.getElementById("bdst1-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var bdstOne1tr = document.getElementById("bdst1-1-tr");
var bdstOne1mc = document.getElementById("bdst1-1-mc");
bdstOne1tr.onclick = function(){
  bdstOne1m.style.display = "block";
  bdstOne1mc.src = this.src;
}
// Get the <span> element that closes the modal
var bdstOne1c = document.getElementById("bdst1-1-c");
// When the user clicks on <span> (x), close the modal
bdstOne1c.onclick = function() {
  bdstOne1m.style.display = "none";
}
bdstOne1m.onclick = function() {
  bdstOne1m.style.display = "none";
}

var bdstOne2m = document.getElementById("bdst1-2-m");
var bdstOne2tr = document.getElementById("bdst1-2-tr");
var bdstOne2mc = document.getElementById("bdst1-2-mc");
bdstOne2tr.onclick = function(){
  bdstOne2m.style.display = "block";
  bdstOne2mc.src = this.src;
}
var bdstOne2c = document.getElementById("bdst1-2-c");
bdstOne2c.onclick = function() {
  bdstOne2m.style.display = "none";
}
bdstOne2m.onclick = function() {
  bdstOne2m.style.display = "none";
}

var bdstOne3m = document.getElementById("bdst1-3-m");
var bdstOne3tr = document.getElementById("bdst1-3-tr");
var bdstOne3mc = document.getElementById("bdst1-3-mc");
bdstOne3tr.onclick = function(){
  bdstOne3m.style.display = "block";
  bdstOne3mc.src = this.src;
}
var bdstOne3c = document.getElementById("bdst1-3-c");
bdstOne3c.onclick = function() {
  bdstOne3m.style.display = "none";
}
bdstOne3m.onclick = function() {
  bdstOne3m.style.display = "none";
}
