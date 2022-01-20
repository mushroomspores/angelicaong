AOS.init({
  duration: 900,
})

var pa10fm = document.getElementById("pa-10f-m");
var pa10ftr = document.getElementById("pa-10f-tr");
var pa10fmc = document.getElementById("pa-10f-mc");
pa10ftr.onclick = function(){
  pa10fm.style.display = "block";
  pa10fmc.src = this.src;
}
  var pa10fc = document.getElementById("pa-10f-c");
pa10fc.onclick = function() {
  pa10fm.style.display = "none";
}
pa10fm.onclick = function() {
  pa10fm.style.display = "none";
}
pa10ftr.addEventListener("mouseover", function() {
  pa10ftr.style.opacity = 0.7 ;
})
pa10ftr.addEventListener("mouseout", function() {
  pa10ftr.style.opacity = 1.0 ;
})

var pa10bm = document.getElementById("pa-10b-m");
var pa10btr = document.getElementById("pa-10b-tr");
var pa10bmc = document.getElementById("pa-10b-mc");
pa10btr.onclick = function(){
  pa10bm.style.display = "block";
  pa10bmc.src = this.src;
}
  var pa10bc = document.getElementById("pa-10b-c");
pa10bc.onclick = function() {
  pa10bm.style.display = "none";
}
pa10bm.onclick = function() {
  pa10bm.style.display = "none";
}
pa10btr.addEventListener("mouseover", function() {
  pa10btr.style.opacity = 0.7 ;
})
pa10btr.addEventListener("mouseout", function() {
  pa10btr.style.opacity = 1.0 ;
})
