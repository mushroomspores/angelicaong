AOS.init({
  duration: 900,
})

var pa12fm = document.getElementById("pa-12f-m");
var pa12ftr = document.getElementById("pa-12f-tr");
var pa12fmc = document.getElementById("pa-12f-mc");
pa12ftr.onclick = function(){
  pa12fm.style.display = "block";
  pa12fmc.src = this.src;
}
  var pa12fc = document.getElementById("pa-12f-c");
pa12fc.onclick = function() {
  pa12fm.style.display = "none";
}
pa12fm.onclick = function() {
  pa12fm.style.display = "none";
}

var pa12bm = document.getElementById("pa-12b-m");
var pa12btr = document.getElementById("pa-12b-tr");
var pa12bmc = document.getElementById("pa-12b-mc");
pa12btr.onclick = function(){
  pa12bm.style.display = "block";
  pa12bmc.src = this.src;
}
  var pa12bc = document.getElementById("pa-12b-c");
pa12bc.onclick = function() {
  pa12bm.style.display = "none";
}
pa12bm.onclick = function() {
  pa12bm.style.display = "none";
}
