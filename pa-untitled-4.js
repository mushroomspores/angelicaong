AOS.init({
  duration: 900,
})

var pa4fm = document.getElementById("pa-4f-m");
var pa4ftr = document.getElementById("pa-4f-tr");
var pa4fmc = document.getElementById("pa-4f-mc");
pa4ftr.onclick = function(){
  pa4fm.style.display = "block";
  pa4fmc.src = this.src;
}
  var pa4fc = document.getElementById("pa-4f-c");
pa4fc.onclick = function() {
  pa4fm.style.display = "none";
}
pa4fm.onclick = function() {
  pa4fm.style.display = "none";
}
pa4ftr.addEventListener("mouseover", function() {
  pa4ftr.style.opacity = 0.7 ;
})
pa4ftr.addEventListener("mouseout", function() {
  pa4ftr.style.opacity = 1.0 ;
})

var pa4bm = document.getElementById("pa-4b-m");
var pa4btr = document.getElementById("pa-4b-tr");
var pa4bmc = document.getElementById("pa-4b-mc");
pa4btr.onclick = function(){
  pa4bm.style.display = "block";
  pa4bmc.src = this.src;
}
  var pa4bc = document.getElementById("pa-4b-c");
pa4bc.onclick = function() {
  pa4bm.style.display = "none";
}
pa4bm.onclick = function() {
  pa4bm.style.display = "none";
}
pa4btr.addEventListener("mouseover", function() {
  pa4btr.style.opacity = 0.7 ;
})
pa4btr.addEventListener("mouseout", function() {
  pa4btr.style.opacity = 1.0 ;
})
