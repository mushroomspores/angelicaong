AOS.init({
    duration: 1000,
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
  
  var tianti1m = document.getElementById("tianti-1-m");
  var tianti1tr = document.getElementById("tianti-1-tr");
  var tianti1mc = document.getElementById("tianti-1-mc");
  tianti1tr.onclick = function(){
    tianti1m.style.display = "block";
    tianti1mc.src = this.src;
  }
  var tianti1c = document.getElementById("tianti-1-c");
  tianti1c.onclick = function() {
    tianti1m.style.display = "none";
  }
  tianti1m.onclick = function() {
    tianti1m.style.display = "none";
  }
  
  var tianti2m = document.getElementById("tianti-2-m");
  var tianti2tr = document.getElementById("tianti-2-tr");
  var tianti2mc = document.getElementById("tianti-2-mc");
  tianti2tr.onclick = function(){
    tianti2m.style.display = "block";
    tianti2mc.src = this.src;
  }
  var tianti2c = document.getElementById("tianti-2-c");
  tianti2c.onclick = function() {
    tianti2m.style.display = "none";
  }
  tianti2m.onclick = function() {
    tianti2m.style.display = "none";
  }
  
  var tianti4m = document.getElementById("tianti-4-m");
  var tianti4tr = document.getElementById("tianti-4-tr");
  var tianti4mc = document.getElementById("tianti-4-mc");
  tianti4tr.onclick = function(){
    tianti4m.style.display = "block";
    tianti4mc.src = this.src;
  }
  var tianti4c = document.getElementById("tianti-4-c");
  tianti4c.onclick = function() {
    tianti4m.style.display = "none";
  }
  tianti4m.onclick = function() {
    tianti4m.style.display = "none";
  }

  var tianti6m = document.getElementById("tianti-6-m");
  var tianti6tr = document.getElementById("tianti-6-tr");
  var tianti6mc = document.getElementById("tianti-6-mc");
  tianti6tr.onclick = function(){
    tianti6m.style.display = "block";
    tianti6mc.src = this.src;
  }
  var tianti6c = document.getElementById("tianti-6-c");
  tianti6c.onclick = function() {
    tianti6m.style.display = "none";
  }
  tianti6m.onclick = function() {
    tianti6m.style.display = "none";
  }
  
  var tianti7m = document.getElementById("tianti-7-m");
  var tianti7tr = document.getElementById("tianti-7-tr");
  var tianti7mc = document.getElementById("tianti-7-mc");
  tianti7tr.onclick = function(){
    tianti7m.style.display = "block";
    tianti7mc.src = this.src;
  }
  var tianti7c = document.getElementById("tianti-7-c");
  tianti7c.onclick = function() {
    tianti7m.style.display = "none";
  }
  tianti7m.onclick = function() {
    tianti7m.style.display = "none";
  }

  
  var tianti10m = document.getElementById("tianti-10-m");
  var tianti10tr = document.getElementById("tianti-10-tr");
  var tianti10mc = document.getElementById("tianti-10-mc");
  tianti10tr.onclick = function(){
    tianti10m.style.display = "block";
    tianti10mc.src = this.src;
  }
  var tianti10c = document.getElementById("tianti-10-c");
  tianti10c.onclick = function() {
    tianti10m.style.display = "none";
  }
  tianti10m.onclick = function() {
    tianti10m.style.display = "none";
  }

  var tianti13m = document.getElementById("tianti-13-m");
  var tianti13tr = document.getElementById("tianti-13-tr");
  var tianti13mc = document.getElementById("tianti-13-mc");
  tianti13tr.onclick = function(){
    tianti13m.style.display = "block";
    tianti13mc.src = this.src;
  }
  var tianti13c = document.getElementById("tianti-13-c");
  tianti13c.onclick = function() {
    tianti13m.style.display = "none";
  }
  tianti13m.onclick = function() {
    tianti13m.style.display = "none";
  }
  