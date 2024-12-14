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
  
  var otfzine1m = document.getElementById("otfzine-1-m");
  var otfzine1tr = document.getElementById("otfzine-1-tr");
  var otfzine1mc = document.getElementById("otfzine-1-mc");
  otfzine1tr.onclick = function(){
    otfzine1m.style.display = "block";
    otfzine1mc.src = this.src;
  }
  var otfzine1c = document.getElementById("otfzine-1-c");
  otfzine1c.onclick = function() {
    otfzine1m.style.display = "none";
  }
  otfzine1m.onclick = function() {
    otfzine1m.style.display = "none";
  }
  
  var otfzine2m = document.getElementById("otfzine-2-m");
  var otfzine2tr = document.getElementById("otfzine-2-tr");
  var otfzine2mc = document.getElementById("otfzine-2-mc");
  otfzine2tr.onclick = function(){
    otfzine2m.style.display = "block";
    otfzine2mc.src = this.src;
  }
  var otfzine2c = document.getElementById("otfzine-2-c");
  otfzine2c.onclick = function() {
    otfzine2m.style.display = "none";
  }
  otfzine2m.onclick = function() {
    otfzine2m.style.display = "none";
  }
  
  var otfzine3m = document.getElementById("otfzine-3-m");
  var otfzine3tr = document.getElementById("otfzine-3-tr");
  var otfzine3mc = document.getElementById("otfzine-3-mc");
  otfzine3tr.onclick = function(){
    otfzine3m.style.display = "block";
    otfzine3mc.src = this.src;
  }
  var otfzine3c = document.getElementById("otfzine-3-c");
  otfzine3c.onclick = function() {
    otfzine3m.style.display = "none";
  }
  otfzine3m.onclick = function() {
    otfzine3m.style.display = "none";
  }

  var otfzine5m = document.getElementById("otfzine-5-m");
  var otfzine5tr = document.getElementById("otfzine-5-tr");
  var otfzine5mc = document.getElementById("otfzine-5-mc");
  otfzine5tr.onclick = function(){
    otfzine5m.style.display = "block";
    otfzine5mc.src = this.src;
  }
  var otfzine5c = document.getElementById("otfzine-5-c");
  otfzine5c.onclick = function() {
    otfzine5m.style.display = "none";
  }
  otfzine5m.onclick = function() {
    otfzine5m.style.display = "none";
  }
  
  var otfzine9m = document.getElementById("otfzine-9-m");
  var otfzine9tr = document.getElementById("otfzine-9-tr");
  var otfzine9mc = document.getElementById("otfzine-9-mc");
  otfzine9tr.onclick = function(){
    otfzine9m.style.display = "block";
    otfzine9mc.src = this.src;
  }
  var otfzine9c = document.getElementById("otfzine-9-c");
  otfzine9c.onclick = function() {
    otfzine9m.style.display = "none";
  }
  otfzine9m.onclick = function() {
    otfzine9m.style.display = "none";
  }

  var otfzine13m = document.getElementById("otfzine-13-m");
  var otfzine13tr = document.getElementById("otfzine-13-tr");
  var otfzine13mc = document.getElementById("otfzine-13-mc");
  otfzine13tr.onclick = function(){
    otfzine13m.style.display = "block";
    otfzine13mc.src = this.src;
  }
  var otfzine13c = document.getElementById("otfzine-13-c");
  otfzine13c.onclick = function() {
    otfzine13m.style.display = "none";
  }
  otfzine13m.onclick = function() {
    otfzine13m.style.display = "none";
  }
  