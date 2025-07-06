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
  
  var gsz3m = document.getElementById("gsz-3-m");
  var gsz3tr = document.getElementById("gsz-3-tr");
  var gsz3mc = document.getElementById("gsz-3-mc");
  gsz3tr.onclick = function(){
    gsz3m.style.display = "block";
    gsz3mc.src = this.src;
  }
  var gsz3c = document.getElementById("gsz-3-c");
  gsz3c.onclick = function() {
    gsz3m.style.display = "none";
  }
  gsz3m.onclick = function() {
    gsz3m.style.display = "none";
  }
  
  var gsz4m = document.getElementById("gsz-4-m");
  var gsz4tr = document.getElementById("gsz-4-tr");
  var gsz4mc = document.getElementById("gsz-4-mc");
  gsz4tr.onclick = function(){
    gsz4m.style.display = "block";
    gsz4mc.src = this.src;
  }
  var gsz4c = document.getElementById("gsz-4-c");
  gsz4c.onclick = function() {
    gsz4m.style.display = "none";
  }
  gsz4m.onclick = function() {
    gsz4m.style.display = "none";
  }

  var gsz5m = document.getElementById("gsz-5-m");
  var gsz5tr = document.getElementById("gsz-5-tr");
  var gsz5mc = document.getElementById("gsz-5-mc");
  gsz5tr.onclick = function(){
    gsz5m.style.display = "block";
    gsz5mc.src = this.src;
  }
  var gsz5c = document.getElementById("gsz-5-c");
  gsz5c.onclick = function() {
    gsz5m.style.display = "none";
  }
  gsz5m.onclick = function() {
    gsz5m.style.display = "none";
  }

  var gsz6m = document.getElementById("gsz-6-m");
  var gsz6tr = document.getElementById("gsz-6-tr");
  var gsz6mc = document.getElementById("gsz-6-mc");
  gsz6tr.onclick = function(){
    gsz6m.style.display = "block";
    gsz6mc.src = this.src;
  }
  var gsz6c = document.getElementById("gsz-6-c");
  gsz6c.onclick = function() {
    gsz6m.style.display = "none";
  }
  gsz6m.onclick = function() {
    gsz6m.style.display = "none";
  }
  
  var gsz7m = document.getElementById("gsz-7-m");
  var gsz7tr = document.getElementById("gsz-7-tr");
  var gsz7mc = document.getElementById("gsz-7-mc");
  gsz7tr.onclick = function(){
    gsz7m.style.display = "block";
    gsz7mc.src = this.src;
  }
  var gsz7c = document.getElementById("gsz-7-c");
  gsz7c.onclick = function() {
    gsz7m.style.display = "none";
  }
  gsz7m.onclick = function() {
    gsz7m.style.display = "none";
  }

  var gsz1m = document.getElementById("gsz-1-m");
  var gsz1tr = document.getElementById("gsz-1-tr");
  var gsz1mc = document.getElementById("gsz-1-mc");
  gsz1tr.onclick = function(){
    gsz1m.style.display = "block";
    gsz1mc.src = this.src;
  }
  var gsz1c = document.getElementById("gsz-1-c");
  gsz1c.onclick = function() {
    gsz1m.style.display = "none";
  }
  gsz1m.onclick = function() {
    gsz1m.style.display = "none";
  }

  var gsz2m = document.getElementById("gsz-2-m");
  var gsz2tr = document.getElementById("gsz-2-tr");
  var gsz2mc = document.getElementById("gsz-2-mc");
  gsz2tr.onclick = function(){
    gsz2m.style.display = "block";
    gsz2mc.src = this.src;
  }
  var gsz2c = document.getElementById("gsz-2-c");
  gsz2c.onclick = function() {
    gsz2m.style.display = "none";
  }
  gsz2m.onclick = function() {
    gsz2m.style.display = "none";
  }
  