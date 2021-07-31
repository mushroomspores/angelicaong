//js script for ph-veneer.html
// Get the modal
var painting31m = document.getElementById("painting3-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var painting31tr = document.getElementById("painting3-1-tr");
var painting31mc = document.getElementById("painting3-1-mc");
painting31tr.onclick = function(){
  painting31m.style.display = "block";
  painting31mc.src = this.src;
}
// Get the <span> element that closes the modal
var painting31c = document.getElementById("painting3-1-c");
// When the user clicks on <span> (x), close the modal
painting31c.onclick = function() {
  painting31m.style.display = "none";
}
painting31m.onclick = function() {
  painting31m.style.display = "none";
}

var painting32m = document.getElementById("painting3-2-m");
var painting32tr = document.getElementById("painting3-2-tr");
var painting32mc = document.getElementById("painting3-2-mc");
painting32tr.onclick = function(){
  painting32m.style.display = "block";
  painting32mc.src = this.src;
}
var painting32c = document.getElementById("painting3-2-c");
painting32c.onclick = function() {
  painting32m.style.display = "none";
}
painting32m.onclick = function() {
  painting32m.style.display = "none";
}
