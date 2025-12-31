AOS.init({
    duration: 900,
  })
  
  var phoneDropbtn = document.getElementById("phonedrop-btn")
  phoneDropbtn.addEventListener("click", myFunction);
  
  function myFunction() {
    var phoneDrop = document.getElementById("phone-droplist");
    var slideshow = document.getElementById("landing-page-slideshow")
    if (phoneDrop.style.display == '' || phoneDrop.style.display == "none") {
      phoneDrop.style.display = "block";
      slideshow.style.display = "none";
    } else {
      phoneDrop.style.display = "none";
      slideshow.style.display = "block";
    }
  }

  var driftingnimbus1m = document.getElementById("driftingnimbus-1-m");
  var driftingnimbus1tr = document.getElementById("driftingnimbus-1-tr");
  var driftingnimbus1mc = document.getElementById("driftingnimbus-1-mc");
  driftingnimbus1tr.onclick = function(){
    driftingnimbus1m.style.display = "block";
    driftingnimbus1mc.src = this.src;
  }
  var driftingnimbus1c = document.getElementById("driftingnimbus-1-c");
  driftingnimbus1c.onclick = function() {
    driftingnimbus1m.style.display = "none";
  }
  driftingnimbus1m.onclick = function() {
    driftingnimbus1m.style.display = "none";
  }

  var driftingnimbus2m = document.getElementById("driftingnimbus-2-m");
  var driftingnimbus2tr = document.getElementById("driftingnimbus-2-tr");
  var driftingnimbus2mc = document.getElementById("driftingnimbus-2-mc");
  driftingnimbus2tr.onclick = function(){
    driftingnimbus2m.style.display = "block";
    driftingnimbus2mc.src = this.src;
  }
  var driftingnimbus2c = document.getElementById("driftingnimbus-2-c");
  driftingnimbus2c.onclick = function() {
    driftingnimbus2m.style.display = "none";
  }
  driftingnimbus2m.onclick = function() {
    driftingnimbus2m.style.display = "none";
  }

  var driftingnimbus3m = document.getElementById("driftingnimbus-3-m");
  var driftingnimbus3tr = document.getElementById("driftingnimbus-3-tr");
  var driftingnimbus3mc = document.getElementById("driftingnimbus-3-mc");
  driftingnimbus3tr.onclick = function(){
    driftingnimbus3m.style.display = "block";
    driftingnimbus3mc.src = this.src;
  }
  var driftingnimbus3c = document.getElementById("driftingnimbus-3-c");
  driftingnimbus3c.onclick = function() {
    driftingnimbus3m.style.display = "none";
  }
  driftingnimbus3m.onclick = function() {
    driftingnimbus3m.style.display = "none";
  }
  
  var driftingnimbus4m = document.getElementById("driftingnimbus-4-m");
  var driftingnimbus4tr = document.getElementById("driftingnimbus-4-tr");
  var driftingnimbus4mc = document.getElementById("driftingnimbus-4-mc");
  driftingnimbus4tr.onclick = function(){
    driftingnimbus4m.style.display = "block";
    driftingnimbus4mc.src = this.src;
  }
  var driftingnimbus4c = document.getElementById("driftingnimbus-4-c");
  driftingnimbus4c.onclick = function() {
    driftingnimbus4m.style.display = "none";
  }
  driftingnimbus4m.onclick = function() {
    driftingnimbus4m.style.display = "none";
  }

  var driftingnimbus5m = document.getElementById("driftingnimbus-5-m");
  var driftingnimbus5tr = document.getElementById("driftingnimbus-5-tr");
  var driftingnimbus5mc = document.getElementById("driftingnimbus-5-mc");
  driftingnimbus5tr.onclick = function(){
    driftingnimbus5m.style.display = "block";
    driftingnimbus5mc.src = this.src;
  }
  var driftingnimbus5c = document.getElementById("driftingnimbus-5-c");
  driftingnimbus5c.onclick = function() {
    driftingnimbus5m.style.display = "none";
  }
  driftingnimbus5m.onclick = function() {
    driftingnimbus5m.style.display = "none";
  }
  
  var driftingnimbus6m = document.getElementById("driftingnimbus-6-m");
  var driftingnimbus6tr = document.getElementById("driftingnimbus-6-tr");
  var driftingnimbus6mc = document.getElementById("driftingnimbus-6-mc");
  driftingnimbus6tr.onclick = function(){
    driftingnimbus6m.style.display = "block";
    driftingnimbus6mc.src = this.src;
  }
  var driftingnimbus6c = document.getElementById("driftingnimbus-6-c");
  driftingnimbus6c.onclick = function() {
    driftingnimbus6m.style.display = "none";
  }
  driftingnimbus6m.onclick = function() {
    driftingnimbus6m.style.display = "none";
  }

  var driftingnimbus7m = document.getElementById("driftingnimbus-7-m");
  var driftingnimbus7tr = document.getElementById("driftingnimbus-7-tr");
  var driftingnimbus7mc = document.getElementById("driftingnimbus-7-mc");
  driftingnimbus7tr.onclick = function(){
    driftingnimbus7m.style.display = "block";
    driftingnimbus7mc.src = this.src;
  }
  var driftingnimbus7c = document.getElementById("driftingnimbus-7-c");
  driftingnimbus7c.onclick = function() {
    driftingnimbus7m.style.display = "none";
  }
  driftingnimbus7m.onclick = function() {
    driftingnimbus7m.style.display = "none";
  }

  var driftingnimbus8m = document.getElementById("driftingnimbus-8-m");
  var driftingnimbus8tr = document.getElementById("driftingnimbus-8-tr");
  var driftingnimbus8mc = document.getElementById("driftingnimbus-8-mc");
  driftingnimbus8tr.onclick = function(){
    driftingnimbus8m.style.display = "block";
    driftingnimbus8mc.src = this.src;
  }
  var driftingnimbus8c = document.getElementById("driftingnimbus-8-c");
  driftingnimbus8c.onclick = function() {
    driftingnimbus8m.style.display = "none";
  }
  driftingnimbus8m.onclick = function() {
    driftingnimbus8m.style.display = "none";
  }