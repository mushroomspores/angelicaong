AOS.init({
  duration: 1200,
})
//js script for ph-veneer.html
// Get the modal
var int1m = document.getElementById("int-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var int1tr = document.getElementById("int-1-tr");
var int1mc = document.getElementById("int-1-mc");
int1tr.onclick = function(){
  int1m.style.display = "block";
  int1mc.src = this.src;
}
// Get the <span> element that closes the modal
var int1c = document.getElementById("int-1-c");
// When the user clicks on <span> (x), close the modal
int1c.onclick = function() {
  int1m.style.display = "none";
}
int1m.onclick = function() {
  int1m.style.display = "none";
}

var int2m = document.getElementById("int-2-m");
var int2tr = document.getElementById("int-2-tr");
var int2mc = document.getElementById("int-2-mc");
int2tr.onclick = function(){
  int2m.style.display = "block";
  int2mc.src = this.src;
}
var int2c = document.getElementById("int-2-c");
int2c.onclick = function() {
  int2m.style.display = "none";
}
int2m.onclick = function() {
  int2m.style.display = "none";
}
