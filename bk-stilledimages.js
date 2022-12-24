AOS.init({
  duration: 900,
})

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
