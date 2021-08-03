//js script for ph-veneer.html
// Get the modal
var bksi1m = document.getElementById("bk-si-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var bksi1tr = document.getElementById("bk-si-1-tr");
var bksi1mc = document.getElementById("bk-si-1-mc");
bksi1tr.onclick = function(){
  bksi1m.style.display = "block";
  bksi1mc.src = this.src;
}
// Get the <span> element that closes the modal
var bksi1c = document.getElementById("bk-si-1-c");
// When the user clicks on <span> (x), close the modal
bksi1c.onclick = function() {
  bksi1m.style.display = "none";
}
bksi1m.onclick = function() {
  bksi1m.style.display = "none";
}

var bksi3m = document.getElementById("bk-si-3-m");
var bksi3tr = document.getElementById("bk-si-3-tr");
var bksi3mc = document.getElementById("bk-si-3-mc");
bksi3tr.onclick = function(){
  bksi3m.style.display = "block";
  bksi3mc.src = this.src;
}
var bksi3c = document.getElementById("bk-si-3-c");
bksi3c.onclick = function() {
  bksi3m.style.display = "none";
}
bksi3m.onclick = function() {
  bksi3m.style.display = "none";
}

var bksi4m = document.getElementById("bk-si-4-m");
var bksi4tr = document.getElementById("bk-si-4-tr");
var bksi4mc = document.getElementById("bk-si-4-mc");
bksi4tr.onclick = function(){
  bksi4m.style.display = "block";
  bksi4mc.src = this.src;
}
var bksi4c = document.getElementById("bk-si-4-c");
bksi4c.onclick = function() {
  bksi4m.style.display = "none";
}
bksi4m.onclick = function() {
  bksi4m.style.display = "none";
}
