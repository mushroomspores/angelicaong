// Get the modal
var tnmn5m = document.getElementById("tnmn-5-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var tnmn5tr = document.getElementById("tnmn-5-tr");
var tnmn5mc = document.getElementById("tnmn-5-mc");
tnmn5tr.onclick = function(){
  tnmn5m.style.display = "block";
  tnmn5mc.src = this.src;
}
// Get the <span> element that closes the modal
var tnmn5c = document.getElementById("tnmn-5-c");
// When the user clicks on <span> (x), close the modal
tnmn5c.onclick = function() {
  tnmn5m.style.display = "none";
}

var tnmn2m = document.getElementById("tnmn-2-m");
var tnmn2tr = document.getElementById("tnmn-2-tr");
var tnmn2mc = document.getElementById("tnmn-2-mc");
tnmn2tr.onclick = function(){
  tnmn2m.style.display = "block";
  tnmn2mc.src = this.src;
}
var tnmn2c = document.getElementById("tnmn-2-c");
tnmn2c.onclick = function() {
  tnmn2m.style.display = "none";
}

var tnmn3m = document.getElementById("tnmn-3-m");
var tnmn3tr = document.getElementById("tnmn-3-tr");
var tnmn3mc = document.getElementById("tnmn-3-mc");
tnmn3tr.onclick = function(){
  tnmn3m.style.display = "block";
  tnmn3mc.src = this.src;
}
var tnmn3c = document.getElementById("tnmn-3-c");
tnmn3c.onclick = function() {
  tnmn3m.style.display = "none";
}
