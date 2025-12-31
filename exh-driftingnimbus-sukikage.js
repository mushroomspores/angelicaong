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
  
  var exhdriftingnimbus1m = document.getElementById("exh-driftingnimbus-1-m");
  var exhdriftingnimbus1tr = document.getElementById("exh-driftingnimbus-1-tr");
  var exhdriftingnimbus1mc = document.getElementById("exh-driftingnimbus-1-mc");
  exhdriftingnimbus1tr.onclick = function(){
    exhdriftingnimbus1m.style.display = "block";
    exhdriftingnimbus1mc.src = this.src;
  }
  var exhdriftingnimbus1c = document.getElementById("exh-driftingnimbus-1-c");
  exhdriftingnimbus1c.onclick = function() {
    exhdriftingnimbus1m.style.display = "none";
  }
  exhdriftingnimbus1m.onclick = function() {
    exhdriftingnimbus1m.style.display = "none";
  }
  
  var exhdriftingnimbus2m = document.getElementById("exh-driftingnimbus-2-m");
  var exhdriftingnimbus2tr = document.getElementById("exh-driftingnimbus-2-tr");
  var exhdriftingnimbus2mc = document.getElementById("exh-driftingnimbus-2-mc");
  exhdriftingnimbus2tr.onclick = function(){
    exhdriftingnimbus2m.style.display = "block";
    exhdriftingnimbus2mc.src = this.src;
  }
  var exhdriftingnimbus2c = document.getElementById("exh-driftingnimbus-2-c");
  exhdriftingnimbus2c.onclick = function() {
    exhdriftingnimbus2m.style.display = "none";
  }
  exhdriftingnimbus2m.onclick = function() {
    exhdriftingnimbus2m.style.display = "none";
  }
  
  var exhdriftingnimbus3m = document.getElementById("exh-driftingnimbus-3-m");
  var exhdriftingnimbus3tr = document.getElementById("exh-driftingnimbus-3-tr");
  var exhdriftingnimbus3mc = document.getElementById("exh-driftingnimbus-3-mc");
  exhdriftingnimbus3tr.onclick = function(){
    exhdriftingnimbus3m.style.display = "block";
    exhdriftingnimbus3mc.src = this.src;
  }
  var exhdriftingnimbus3c = document.getElementById("exh-driftingnimbus-3-c");
  exhdriftingnimbus3c.onclick = function() {
    exhdriftingnimbus3m.style.display = "none";
  }
  exhdriftingnimbus3m.onclick = function() {
    exhdriftingnimbus3m.style.display = "none";
  }
  
  var exhdriftingnimbus4m = document.getElementById("exh-driftingnimbus-4-m");
  var exhdriftingnimbus4tr = document.getElementById("exh-driftingnimbus-4-tr");
  var exhdriftingnimbus4mc = document.getElementById("exh-driftingnimbus-4-mc");
  exhdriftingnimbus4tr.onclick = function(){
    exhdriftingnimbus4m.style.display = "block";
    exhdriftingnimbus4mc.src = this.src;
  }
  var exhdriftingnimbus4c = document.getElementById("exh-driftingnimbus-4-c");
  exhdriftingnimbus4c.onclick = function() {
    exhdriftingnimbus4m.style.display = "none";
  }
  exhdriftingnimbus4m.onclick = function() {
    exhdriftingnimbus4m.style.display = "none";
  }
  
  var exhdriftingnimbus5m = document.getElementById("exh-driftingnimbus-5-m");
  var exhdriftingnimbus5tr = document.getElementById("exh-driftingnimbus-5-tr");
  var exhdriftingnimbus5mc = document.getElementById("exh-driftingnimbus-5-mc");
  exhdriftingnimbus5tr.onclick = function(){
    exhdriftingnimbus5m.style.display = "block";
    exhdriftingnimbus5mc.src = this.src;
  }
  var exhdriftingnimbus5c = document.getElementById("exh-driftingnimbus-5-c");
  exhdriftingnimbus5c.onclick = function() {
    exhdriftingnimbus5m.style.display = "none";
  }
  exhdriftingnimbus5m.onclick = function() {
    exhdriftingnimbus5m.style.display = "none";
  }
  
  var exhdriftingnimbus6m = document.getElementById("exh-driftingnimbus-6-m");
  var exhdriftingnimbus6tr = document.getElementById("exh-driftingnimbus-6-tr");
  var exhdriftingnimbus6mc = document.getElementById("exh-driftingnimbus-6-mc");
  exhdriftingnimbus6tr.onclick = function(){
    exhdriftingnimbus6m.style.display = "block";
    exhdriftingnimbus6mc.src = this.src;
  }
  var exhdriftingnimbus6c = document.getElementById("exh-driftingnimbus-6-c");
  exhdriftingnimbus6c.onclick = function() {
    exhdriftingnimbus6m.style.display = "none";
  }
  exhdriftingnimbus6m.onclick = function() {
    exhdriftingnimbus6m.style.display = "none";
  }
  
  var exhdriftingnimbus7m = document.getElementById("exh-driftingnimbus-7-m");
  var exhdriftingnimbus7tr = document.getElementById("exh-driftingnimbus-7-tr");
  var exhdriftingnimbus7mc = document.getElementById("exh-driftingnimbus-7-mc");
  exhdriftingnimbus7tr.onclick = function(){
    exhdriftingnimbus7m.style.display = "block";
    exhdriftingnimbus7mc.src = this.src;
  }
  var exhdriftingnimbus7c = document.getElementById("exh-driftingnimbus-7-c");
  exhdriftingnimbus7c.onclick = function() {
    exhdriftingnimbus7m.style.display = "none";
  }
  exhdriftingnimbus7m.onclick = function() {
    exhdriftingnimbus7m.style.display = "none";
  }
  
  var exhdriftingnimbus8m = document.getElementById("exh-driftingnimbus-8-m");
  var exhdriftingnimbus8tr = document.getElementById("exh-driftingnimbus-8-tr");
  var exhdriftingnimbus8mc = document.getElementById("exh-driftingnimbus-8-mc");
  exhdriftingnimbus8tr.onclick = function(){
    exhdriftingnimbus8m.style.display = "block";
    exhdriftingnimbus8mc.src = this.src;
  }
  var exhdriftingnimbus8c = document.getElementById("exh-driftingnimbus-8-c");
  exhdriftingnimbus8c.onclick = function() {
    exhdriftingnimbus8m.style.display = "none";
  }
  exhdriftingnimbus8m.onclick = function() {
    exhdriftingnimbus8m.style.display = "none";
  }
  
  var exhdriftingnimbus9m = document.getElementById("exh-driftingnimbus-9-m");
  var exhdriftingnimbus9tr = document.getElementById("exh-driftingnimbus-9-tr");
  var exhdriftingnimbus9mc = document.getElementById("exh-driftingnimbus-9-mc");
  exhdriftingnimbus9tr.onclick = function(){
    exhdriftingnimbus9m.style.display = "block";
    exhdriftingnimbus9mc.src = this.src;
  }
  var exhdriftingnimbus9c = document.getElementById("exh-driftingnimbus-9-c");
  exhdriftingnimbus9c.onclick = function() {
    exhdriftingnimbus9m.style.display = "none";
  }
  exhdriftingnimbus9m.onclick = function() {
    exhdriftingnimbus9m.style.display = "none";
  }
  
  var exhdriftingnimbus10m = document.getElementById("exh-driftingnimbus-10-m");
  var exhdriftingnimbus10tr = document.getElementById("exh-driftingnimbus-10-tr");
  var exhdriftingnimbus10mc = document.getElementById("exh-driftingnimbus-10-mc");
  exhdriftingnimbus10tr.onclick = function(){
    exhdriftingnimbus10m.style.display = "block";
    exhdriftingnimbus10mc.src = this.src;
  }
  var exhdriftingnimbus10c = document.getElementById("exh-driftingnimbus-10-c");
  exhdriftingnimbus10c.onclick = function() {
    exhdriftingnimbus10m.style.display = "none";
  }
  exhdriftingnimbus10m.onclick = function() {
    exhdriftingnimbus10m.style.display = "none";
  }
  
  var exhdriftingnimbus11m = document.getElementById("exh-driftingnimbus-11-m");
  var exhdriftingnimbus11tr = document.getElementById("exh-driftingnimbus-11-tr");
  var exhdriftingnimbus11mc = document.getElementById("exh-driftingnimbus-11-mc");
  exhdriftingnimbus11tr.onclick = function(){
    exhdriftingnimbus11m.style.display = "block";
    exhdriftingnimbus11mc.src = this.src;
  }
  var exhdriftingnimbus11c = document.getElementById("exh-driftingnimbus-11-c");
  exhdriftingnimbus11c.onclick = function() {
    exhdriftingnimbus11m.style.display = "none";
  }
  exhdriftingnimbus11m.onclick = function() {
    exhdriftingnimbus11m.style.display = "none";
  }
  
  var exhdriftingnimbus12m = document.getElementById("exh-driftingnimbus-12-m");
  var exhdriftingnimbus12tr = document.getElementById("exh-driftingnimbus-12-tr");
  var exhdriftingnimbus12mc = document.getElementById("exh-driftingnimbus-12-mc");
  exhdriftingnimbus12tr.onclick = function(){
    exhdriftingnimbus12m.style.display = "block";
    exhdriftingnimbus12mc.src = this.src;
  }
  var exhdriftingnimbus12c = document.getElementById("exh-driftingnimbus-12-c");
  exhdriftingnimbus12c.onclick = function() {
    exhdriftingnimbus12m.style.display = "none";
  }
  exhdriftingnimbus12m.onclick = function() {
    exhdriftingnimbus12m.style.display = "none";
  }
  
  var exhdriftingnimbus13m = document.getElementById("exh-driftingnimbus-13-m");
  var exhdriftingnimbus13tr = document.getElementById("exh-driftingnimbus-13-tr");
  var exhdriftingnimbus13mc = document.getElementById("exh-driftingnimbus-13-mc");
  exhdriftingnimbus13tr.onclick = function(){
    exhdriftingnimbus13m.style.display = "block";
    exhdriftingnimbus13mc.src = this.src;
  }
  var exhdriftingnimbus13c = document.getElementById("exh-driftingnimbus-13-c");
  exhdriftingnimbus13c.onclick = function() {
    exhdriftingnimbus13m.style.display = "none";
  }
  exhdriftingnimbus13m.onclick = function() {
    exhdriftingnimbus13m.style.display = "none";
  }
  
  var exhdriftingnimbus14m = document.getElementById("exh-driftingnimbus-14-m");
  var exhdriftingnimbus14tr = document.getElementById("exh-driftingnimbus-14-tr");
  var exhdriftingnimbus14mc = document.getElementById("exh-driftingnimbus-14-mc");
  exhdriftingnimbus14tr.onclick = function(){
    exhdriftingnimbus14m.style.display = "block";
    exhdriftingnimbus14mc.src = this.src;
  }
  var exhdriftingnimbus14c = document.getElementById("exh-driftingnimbus-14-c");
  exhdriftingnimbus14c.onclick = function() {
    exhdriftingnimbus14m.style.display = "none";
  }
  exhdriftingnimbus14m.onclick = function() {
    exhdriftingnimbus14m.style.display = "none";
  }
  
  var exhdriftingnimbus15m = document.getElementById("exh-driftingnimbus-15-m");
  var exhdriftingnimbus15tr = document.getElementById("exh-driftingnimbus-15-tr");
  var exhdriftingnimbus15mc = document.getElementById("exh-driftingnimbus-15-mc");
  exhdriftingnimbus15tr.onclick = function(){
    exhdriftingnimbus15m.style.display = "block";
    exhdriftingnimbus15mc.src = this.src;
  }
  var exhdriftingnimbus15c = document.getElementById("exh-driftingnimbus-15-c");
  exhdriftingnimbus15c.onclick = function() {
    exhdriftingnimbus15m.style.display = "none";
  }
  exhdriftingnimbus15m.onclick = function() {
    exhdriftingnimbus15m.style.display = "none";
  }
  
  var exhdriftingnimbus16m = document.getElementById("exh-driftingnimbus-16-m");
  var exhdriftingnimbus16tr = document.getElementById("exh-driftingnimbus-16-tr");
  var exhdriftingnimbus16mc = document.getElementById("exh-driftingnimbus-16-mc");
  exhdriftingnimbus16tr.onclick = function(){
    exhdriftingnimbus16m.style.display = "block";
    exhdriftingnimbus16mc.src = this.src;
  }
  var exhdriftingnimbus16c = document.getElementById("exh-driftingnimbus-16-c");
  exhdriftingnimbus16c.onclick = function() {
    exhdriftingnimbus16m.style.display = "none";
  }
  exhdriftingnimbus16m.onclick = function() {
    exhdriftingnimbus16m.style.display = "none";
  }
  
  var exhdriftingnimbus17m = document.getElementById("exh-driftingnimbus-17-m");
  var exhdriftingnimbus17tr = document.getElementById("exh-driftingnimbus-17-tr");
  var exhdriftingnimbus17mc = document.getElementById("exh-driftingnimbus-17-mc");
  exhdriftingnimbus17tr.onclick = function(){
    exhdriftingnimbus17m.style.display = "block";
    exhdriftingnimbus17mc.src = this.src;
  }
  var exhdriftingnimbus17c = document.getElementById("exh-driftingnimbus-17-c");
  exhdriftingnimbus17c.onclick = function() {
    exhdriftingnimbus17m.style.display = "none";
  }
  exhdriftingnimbus17m.onclick = function() {
    exhdriftingnimbus17m.style.display = "none";
  }
  
  var exhdriftingnimbus18m = document.getElementById("exh-driftingnimbus-18-m");
  var exhdriftingnimbus18tr = document.getElementById("exh-driftingnimbus-18-tr");
  var exhdriftingnimbus18mc = document.getElementById("exh-driftingnimbus-18-mc");
  exhdriftingnimbus18tr.onclick = function(){
    exhdriftingnimbus18m.style.display = "block";
    exhdriftingnimbus18mc.src = this.src;
  }
  var exhdriftingnimbus18c = document.getElementById("exh-driftingnimbus-18-c");
  exhdriftingnimbus18c.onclick = function() {
    exhdriftingnimbus18m.style.display = "none";
  }
  exhdriftingnimbus18m.onclick = function() {
    exhdriftingnimbus18m.style.display = "none";
  }
  
  var exhdriftingnimbus19m = document.getElementById("exh-driftingnimbus-19-m");
  var exhdriftingnimbus19tr = document.getElementById("exh-driftingnimbus-19-tr");
  var exhdriftingnimbus19mc = document.getElementById("exh-driftingnimbus-19-mc");
  exhdriftingnimbus19tr.onclick = function(){
    exhdriftingnimbus19m.style.display = "block";
    exhdriftingnimbus19mc.src = this.src;
  }
  var exhdriftingnimbus19c = document.getElementById("exh-driftingnimbus-19-c");
  exhdriftingnimbus19c.onclick = function() {
    exhdriftingnimbus19m.style.display = "none";
  }
  exhdriftingnimbus19m.onclick = function() {
    exhdriftingnimbus19m.style.display = "none";
  }
  
  var exhdriftingnimbus20m = document.getElementById("exh-driftingnimbus-20-m");
  var exhdriftingnimbus20tr = document.getElementById("exh-driftingnimbus-20-tr");
  var exhdriftingnimbus20mc = document.getElementById("exh-driftingnimbus-20-mc");
  exhdriftingnimbus20tr.onclick = function(){
    exhdriftingnimbus20m.style.display = "block";
    exhdriftingnimbus20mc.src = this.src;
  }
  var exhdriftingnimbus20c = document.getElementById("exh-driftingnimbus-20-c");
  exhdriftingnimbus20c.onclick = function() {
    exhdriftingnimbus20m.style.display = "none";
  }
  exhdriftingnimbus20m.onclick = function() {
    exhdriftingnimbus20m.style.display = "none";
  }
  