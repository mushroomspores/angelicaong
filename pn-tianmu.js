AOS.init({
  duration: 1200,
})
//js script for ph-veneer.html
// Get the modal
var tianmu1m = document.getElementById("tianmu-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var tianmu1tr = document.getElementById("tianmu-1-tr");
var tianmu1mc = document.getElementById("tianmu-1-mc");
tianmu1tr.onclick = function(){
  tianmu1m.style.display = "block";
  tianmu1mc.src = this.src;
}
// Get the <span> element that closes the modal
var tianmu1c = document.getElementById("tianmu-1-c");
// When the user clicks on <span> (x), close the modal
tianmu1c.onclick = function() {
  tianmu1m.style.display = "none";
}
tianmu1m.onclick = function() {
  tianmu1m.style.display = "none";
}

var tianmu2m = document.getElementById("tianmu-2-m");
var tianmu2tr = document.getElementById("tianmu-2-tr");
var tianmu2mc = document.getElementById("tianmu-2-mc");
tianmu2tr.onclick = function(){
  tianmu2m.style.display = "block";
  tianmu2mc.src = this.src;
}
var tianmu2c = document.getElementById("tianmu-2-c");
tianmu2c.onclick = function() {
  tianmu2m.style.display = "none";
}
tianmu2m.onclick = function() {
  tianmu2m.style.display = "none";
}
