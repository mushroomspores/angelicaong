AOS.init({
  duration: 900,
})

var pa3fm = document.getElementById("pa-3f-m");
var pa3ftr = document.getElementById("pa-3f-tr");
var pa3fmc = document.getElementById("pa-3f-mc");
pa3ftr.onclick = function(){
  pa3fm.style.display = "block";
  pa3fmc.src = this.src;
}
  var pa3fc = document.getElementById("pa-3f-c");
pa3fc.onclick = function() {
  pa3fm.style.display = "none";
}
pa3fm.onclick = function() {
  pa3fm.style.display = "none";
}
pa3ftr.addEventListener("mouseover", function() {
  pa3ftr.style.opacity = 0.7 ;
})
pa3ftr.addEventListener("mouseout", function() {
  pa3ftr.style.opacity = 1.0 ;
})

var pa3bm = document.getElementById("pa-3b-m");
var pa3btr = document.getElementById("pa-3b-tr");
var pa3bmc = document.getElementById("pa-3b-mc");
pa3btr.onclick = function(){
  pa3bm.style.display = "block";
  pa3bmc.src = this.src;
}
  var pa3bc = document.getElementById("pa-3b-c");
pa3bc.onclick = function() {
  pa3bm.style.display = "none";
}
pa3bm.onclick = function() {
  pa3bm.style.display = "none";
}
pa3btr.addEventListener("mouseover", function() {
  pa3btr.style.opacity = 0.7 ;
})
pa3btr.addEventListener("mouseout", function() {
  pa3btr.style.opacity = 1.0 ;
})
