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
  
  var tsrom1m = document.getElementById("tsrom-1-m");
  var tsrom1tr = document.getElementById("tsrom-1-tr");
  var tsrom1mc = document.getElementById("tsrom-1-mc");
  tsrom1tr.onclick = function(){
    tsrom1m.style.display = "block";
    tsrom1mc.src = this.src;
  }
  var tsrom1c = document.getElementById("tsrom-1-c");
  tsrom1c.onclick = function() {
    tsrom1m.style.display = "none";
  }
  tsrom1m.onclick = function() {
    tsrom1m.style.display = "none";
  }
  
  var tsrom3m = document.getElementById("tsrom-3-m");
  var tsrom3tr = document.getElementById("tsrom-3-tr");
  var tsrom3mc = document.getElementById("tsrom-3-mc");
  tsrom3tr.onclick = function(){
    tsrom3m.style.display = "block";
    tsrom3mc.src = this.src;
  }
  var tsrom3c = document.getElementById("tsrom-3-c");
  tsrom3c.onclick = function() {
    tsrom3m.style.display = "none";
  }
  tsrom3m.onclick = function() {
    tsrom3m.style.display = "none";
  }
  
  var tsrom4m = document.getElementById("tsrom-4-m");
  var tsrom4tr = document.getElementById("tsrom-4-tr");
  var tsrom4mc = document.getElementById("tsrom-4-mc");
  tsrom4tr.onclick = function(){
    tsrom4m.style.display = "block";
    tsrom4mc.src = this.src;
  }
  var tsrom4c = document.getElementById("tsrom-4-c");
  tsrom4c.onclick = function() {
    tsrom4m.style.display = "none";
  }
  tsrom4m.onclick = function() {
    tsrom4m.style.display = "none";
  }
  
  var tsrom7m = document.getElementById("tsrom-7-m");
  var tsrom7tr = document.getElementById("tsrom-7-tr");
  var tsrom7mc = document.getElementById("tsrom-7-mc");
  tsrom7tr.onclick = function(){
    tsrom7m.style.display = "block";
    tsrom7mc.src = this.src;
  }
  var tsrom7c = document.getElementById("tsrom-7-c");
  tsrom7c.onclick = function() {
    tsrom7m.style.display = "none";
  }
  tsrom7m.onclick = function() {
    tsrom7m.style.display = "none";
  }

  
  var tsrom9m = document.getElementById("tsrom-9-m");
  var tsrom9tr = document.getElementById("tsrom-9-tr");
  var tsrom9mc = document.getElementById("tsrom-9-mc");
  tsrom9tr.onclick = function(){
    tsrom9m.style.display = "block";
    tsrom9mc.src = this.src;
  }
  var tsrom9c = document.getElementById("tsrom-9-c");
  tsrom9c.onclick = function() {
    tsrom9m.style.display = "none";
  }
  tsrom9m.onclick = function() {
    tsrom9m.style.display = "none";
  }

  var tsrom11m = document.getElementById("tsrom-11-m");
  var tsrom11tr = document.getElementById("tsrom-11-tr");
  var tsrom11mc = document.getElementById("tsrom-11-mc");
  tsrom11tr.onclick = function(){
    tsrom11m.style.display = "block";
    tsrom11mc.src = this.src;
  }
  var tsrom11c = document.getElementById("tsrom-11-c");
  tsrom11c.onclick = function() {
    tsrom11m.style.display = "none";
  }
  tsrom11m.onclick = function() {
    tsrom11m.style.display = "none";
  }
  