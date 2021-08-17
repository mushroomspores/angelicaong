AOS.init({
  duration: 900,
})
//js script for pn-unt-tw.html
// Get the modal
var unttw1m = document.getElementById("unt-tw-1-m");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var unttw1tr = document.getElementById("unt-tw-1-tr");
var unttw1mc = document.getElementById("unt-tw-1-mc");
unttw1tr.onclick = function(){
  unttw1m.style.display = "block";
  unttw1mc.src = this.src;
}
// Get the <span> element that closes the modal
var unttw1c = document.getElementById("unt-tw-1-c");
// When the user clicks on <span> (x), close the modal
unttw1c.onclick = function() {
  unttw1m.style.display = "none";
}
unttw1m.onclick = function() {
  unttw1m.style.display = "none";
}

var unttw2m = document.getElementById("unt-tw-2-m");
var unttw2tr = document.getElementById("unt-tw-2-tr");
var unttw2mc = document.getElementById("unt-tw-2-mc");
unttw2tr.onclick = function(){
  unttw2m.style.display = "block";
  unttw2mc.src = this.src;
}
var unttw2c = document.getElementById("unt-tw-2-c");
unttw2c.onclick = function() {
  unttw2m.style.display = "none";
}
unttw2m.onclick = function() {
  unttw2m.style.display = "none";
}
