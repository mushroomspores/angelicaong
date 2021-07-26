//js script for ph-veneer.html
// Get the modal
var bdstTwo1m = document.getElementById("bdst2-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var bdstTwo1tr = document.getElementById("bdst2-1-tr");
var bdstTwo1mc = document.getElementById("bdst2-1-mc");
bdstTwo1tr.onclick = function(){
  bdstTwo1m.style.display = "block";
  bdstTwo1mc.src = this.src;
}
// Get the <span> element that closes the modal
var bdstTwo1c = document.getElementById("bdst2-1-c");
// When the user clicks on <span> (x), close the modal
bdstTwo1c.onclick = function() {
  bdstTwo1m.style.display = "none";
}

var bdstTwo2m = document.getElementById("bdst2-2-m");
var bdstTwo2tr = document.getElementById("bdst2-2-tr");
var bdstTwo2mc = document.getElementById("bdst2-2-mc");
bdstTwo2tr.onclick = function(){
  bdstTwo2m.style.display = "block";
  bdstTwo2mc.src = this.src;
}
var bdstTwo2c = document.getElementById("bdst2-2-c");
bdstTwo2c.onclick = function() {
  bdstTwo2m.style.display = "none";
}

var bdstTwo3m = document.getElementById("bdst2-3-m");
var bdstTwo3tr = document.getElementById("bdst2-3-tr");
var bdstTwo3mc = document.getElementById("bdst2-3-mc");
bdstTwo3tr.onclick = function(){
  bdstTwo3m.style.display = "block";
  bdstTwo3mc.src = this.src;
}
var bdstTwo3c = document.getElementById("bdst2-3-c");
bdstTwo3c.onclick = function() {
  bdstTwo3m.style.display = "none";
}
