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

  var angst1m = document.getElementById("angst-1-m");
  var angst1tr = document.getElementById("angst-1-tr");
  var angst1mc = document.getElementById("angst-1-mc");
  angst1tr.onclick = function(){
    angst1m.style.display = "block";
    angst1mc.src = this.src;
  }
  var angst1c = document.getElementById("angst-1-c");
  angst1c.onclick = function() {
    angst1m.style.display = "none";
  }
  angst1m.onclick = function() {
    angst1m.style.display = "none";
  }

  var angst2m = document.getElementById("angst-2-m");
  var angst2tr = document.getElementById("angst-2-tr");
  var angst2mc = document.getElementById("angst-2-mc");
  angst2tr.onclick = function(){
    angst2m.style.display = "block";
    angst2mc.src = this.src;
  }
  var angst2c = document.getElementById("angst-2-c");
  angst2c.onclick = function() {
    angst2m.style.display = "none";
  }
  angst2m.onclick = function() {
    angst2m.style.display = "none";
  }

  var angst3m = document.getElementById("angst-3-m");
  var angst3tr = document.getElementById("angst-3-tr");
  var angst3mc = document.getElementById("angst-3-mc");
  angst3tr.onclick = function(){
    angst3m.style.display = "block";
    angst3mc.src = this.src;
  }
  var angst3c = document.getElementById("angst-3-c");
  angst3c.onclick = function() {
    angst3m.style.display = "none";
  }
  angst3m.onclick = function() {
    angst3m.style.display = "none";
  }
  
  var angst4m = document.getElementById("angst-4-m");
  var angst4tr = document.getElementById("angst-4-tr");
  var angst4mc = document.getElementById("angst-4-mc");
  angst4tr.onclick = function(){
    angst4m.style.display = "block";
    angst4mc.src = this.src;
  }
  var angst4c = document.getElementById("angst-4-c");
  angst4c.onclick = function() {
    angst4m.style.display = "none";
  }
  angst4m.onclick = function() {
    angst4m.style.display = "none";
  }

  var angst5m = document.getElementById("angst-5-m");
  var angst5tr = document.getElementById("angst-5-tr");
  var angst5mc = document.getElementById("angst-5-mc");
  angst5tr.onclick = function(){
    angst5m.style.display = "block";
    angst5mc.src = this.src;
  }
  var angst5c = document.getElementById("angst-5-c");
  angst5c.onclick = function() {
    angst5m.style.display = "none";
  }
  angst5m.onclick = function() {
    angst5m.style.display = "none";
  }
  