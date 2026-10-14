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
  
  var exhbtwslowoctaves1m = document.getElementById("exh-btwslowoctaves-1-m");
  var exhbtwslowoctaves1tr = document.getElementById("exh-btwslowoctaves-1-tr");
  var exhbtwslowoctaves1mc = document.getElementById("exh-btwslowoctaves-1-mc");
  exhbtwslowoctaves1tr.onclick = function(){
    exhbtwslowoctaves1m.style.display = "block";
    exhbtwslowoctaves1mc.src = this.src;
  }
  var exhbtwslowoctaves1c = document.getElementById("exh-btwslowoctaves-1-c");
  exhbtwslowoctaves1c.onclick = function() {
    exhbtwslowoctaves1m.style.display = "none";
  }
  exhbtwslowoctaves1m.onclick = function() {
    exhbtwslowoctaves1m.style.display = "none";
  }
  
  var exhbtwslowoctaves2m = document.getElementById("exh-btwslowoctaves-2-m");
  var exhbtwslowoctaves2tr = document.getElementById("exh-btwslowoctaves-2-tr");
  var exhbtwslowoctaves2mc = document.getElementById("exh-btwslowoctaves-2-mc");
  exhbtwslowoctaves2tr.onclick = function(){
    exhbtwslowoctaves2m.style.display = "block";
    exhbtwslowoctaves2mc.src = this.src;
  }
  var exhbtwslowoctaves2c = document.getElementById("exh-btwslowoctaves-2-c");
  exhbtwslowoctaves2c.onclick = function() {
    exhbtwslowoctaves2m.style.display = "none";
  }
  exhbtwslowoctaves2m.onclick = function() {
    exhbtwslowoctaves2m.style.display = "none";
  }
  
  var exhbtwslowoctaves3m = document.getElementById("exh-btwslowoctaves-3-m");
  var exhbtwslowoctaves3tr = document.getElementById("exh-btwslowoctaves-3-tr");
  var exhbtwslowoctaves3mc = document.getElementById("exh-btwslowoctaves-3-mc");
  exhbtwslowoctaves3tr.onclick = function(){
    exhbtwslowoctaves3m.style.display = "block";
    exhbtwslowoctaves3mc.src = this.src;
  }
  var exhbtwslowoctaves3c = document.getElementById("exh-btwslowoctaves-3-c");
  exhbtwslowoctaves3c.onclick = function() {
    exhbtwslowoctaves3m.style.display = "none";
  }
  exhbtwslowoctaves3m.onclick = function() {
    exhbtwslowoctaves3m.style.display = "none";
  }
  
  var exhbtwslowoctaves4m = document.getElementById("exh-btwslowoctaves-4-m");
  var exhbtwslowoctaves4tr = document.getElementById("exh-btwslowoctaves-4-tr");
  var exhbtwslowoctaves4mc = document.getElementById("exh-btwslowoctaves-4-mc");
  exhbtwslowoctaves4tr.onclick = function(){
    exhbtwslowoctaves4m.style.display = "block";
    exhbtwslowoctaves4mc.src = this.src;
  }
  var exhbtwslowoctaves4c = document.getElementById("exh-btwslowoctaves-4-c");
  exhbtwslowoctaves4c.onclick = function() {
    exhbtwslowoctaves4m.style.display = "none";
  }
  exhbtwslowoctaves4m.onclick = function() {
    exhbtwslowoctaves4m.style.display = "none";
  }
  
  var exhbtwslowoctaves5m = document.getElementById("exh-btwslowoctaves-5-m");
  var exhbtwslowoctaves5tr = document.getElementById("exh-btwslowoctaves-5-tr");
  var exhbtwslowoctaves5mc = document.getElementById("exh-btwslowoctaves-5-mc");
  exhbtwslowoctaves5tr.onclick = function(){
    exhbtwslowoctaves5m.style.display = "block";
    exhbtwslowoctaves5mc.src = this.src;
  }
  var exhbtwslowoctaves5c = document.getElementById("exh-btwslowoctaves-5-c");
  exhbtwslowoctaves5c.onclick = function() {
    exhbtwslowoctaves5m.style.display = "none";
  }
  exhbtwslowoctaves5m.onclick = function() {
    exhbtwslowoctaves5m.style.display = "none";
  }
  
  var exhbtwslowoctaves6m = document.getElementById("exh-btwslowoctaves-6-m");
  var exhbtwslowoctaves6tr = document.getElementById("exh-btwslowoctaves-6-tr");
  var exhbtwslowoctaves6mc = document.getElementById("exh-btwslowoctaves-6-mc");
  exhbtwslowoctaves6tr.onclick = function(){
    exhbtwslowoctaves6m.style.display = "block";
    exhbtwslowoctaves6mc.src = this.src;
  }
  var exhbtwslowoctaves6c = document.getElementById("exh-btwslowoctaves-6-c");
  exhbtwslowoctaves6c.onclick = function() {
    exhbtwslowoctaves6m.style.display = "none";
  }
  exhbtwslowoctaves6m.onclick = function() {
    exhbtwslowoctaves6m.style.display = "none";
  }
  
  var exhbtwslowoctaves7m = document.getElementById("exh-btwslowoctaves-7-m");
  var exhbtwslowoctaves7tr = document.getElementById("exh-btwslowoctaves-7-tr");
  var exhbtwslowoctaves7mc = document.getElementById("exh-btwslowoctaves-7-mc");
  exhbtwslowoctaves7tr.onclick = function(){
    exhbtwslowoctaves7m.style.display = "block";
    exhbtwslowoctaves7mc.src = this.src;
  }
  var exhbtwslowoctaves7c = document.getElementById("exh-btwslowoctaves-7-c");
  exhbtwslowoctaves7c.onclick = function() {
    exhbtwslowoctaves7m.style.display = "none";
  }
  exhbtwslowoctaves7m.onclick = function() {
    exhbtwslowoctaves7m.style.display = "none";
  }
  
  var exhbtwslowoctaves8m = document.getElementById("exh-btwslowoctaves-8-m");
  var exhbtwslowoctaves8tr = document.getElementById("exh-btwslowoctaves-8-tr");
  var exhbtwslowoctaves8mc = document.getElementById("exh-btwslowoctaves-8-mc");
  exhbtwslowoctaves8tr.onclick = function(){
    exhbtwslowoctaves8m.style.display = "block";
    exhbtwslowoctaves8mc.src = this.src;
  }
  var exhbtwslowoctaves8c = document.getElementById("exh-btwslowoctaves-8-c");
  exhbtwslowoctaves8c.onclick = function() {
    exhbtwslowoctaves8m.style.display = "none";
  }
  exhbtwslowoctaves8m.onclick = function() {
    exhbtwslowoctaves8m.style.display = "none";
  }
  
  var exhbtwslowoctaves9m = document.getElementById("exh-btwslowoctaves-9-m");
  var exhbtwslowoctaves9tr = document.getElementById("exh-btwslowoctaves-9-tr");
  var exhbtwslowoctaves9mc = document.getElementById("exh-btwslowoctaves-9-mc");
  exhbtwslowoctaves9tr.onclick = function(){
    exhbtwslowoctaves9m.style.display = "block";
    exhbtwslowoctaves9mc.src = this.src;
  }
  var exhbtwslowoctaves9c = document.getElementById("exh-btwslowoctaves-9-c");
  exhbtwslowoctaves9c.onclick = function() {
    exhbtwslowoctaves9m.style.display = "none";
  }
  exhbtwslowoctaves9m.onclick = function() {
    exhbtwslowoctaves9m.style.display = "none";
  }
  
  var exhbtwslowoctaves10m = document.getElementById("exh-btwslowoctaves-10-m");
  var exhbtwslowoctaves10tr = document.getElementById("exh-btwslowoctaves-10-tr");
  var exhbtwslowoctaves10mc = document.getElementById("exh-btwslowoctaves-10-mc");
  exhbtwslowoctaves10tr.onclick = function(){
    exhbtwslowoctaves10m.style.display = "block";
    exhbtwslowoctaves10mc.src = this.src;
  }
  var exhbtwslowoctaves10c = document.getElementById("exh-btwslowoctaves-10-c");
  exhbtwslowoctaves10c.onclick = function() {
    exhbtwslowoctaves10m.style.display = "none";
  }
  exhbtwslowoctaves10m.onclick = function() {
    exhbtwslowoctaves10m.style.display = "none";
  }
  
  var exhbtwslowoctaves11m = document.getElementById("exh-btwslowoctaves-11-m");
  var exhbtwslowoctaves11tr = document.getElementById("exh-btwslowoctaves-11-tr");
  var exhbtwslowoctaves11mc = document.getElementById("exh-btwslowoctaves-11-mc");
  exhbtwslowoctaves11tr.onclick = function(){
    exhbtwslowoctaves11m.style.display = "block";
    exhbtwslowoctaves11mc.src = this.src;
  }
  var exhbtwslowoctaves11c = document.getElementById("exh-btwslowoctaves-11-c");
  exhbtwslowoctaves11c.onclick = function() {
    exhbtwslowoctaves11m.style.display = "none";
  }
  exhbtwslowoctaves11m.onclick = function() {
    exhbtwslowoctaves11m.style.display = "none";
  }
  
  var exhbtwslowoctaves12m = document.getElementById("exh-btwslowoctaves-12-m");
  var exhbtwslowoctaves12tr = document.getElementById("exh-btwslowoctaves-12-tr");
  var exhbtwslowoctaves12mc = document.getElementById("exh-btwslowoctaves-12-mc");
  exhbtwslowoctaves12tr.onclick = function(){
    exhbtwslowoctaves12m.style.display = "block";
    exhbtwslowoctaves12mc.src = this.src;
  }
  var exhbtwslowoctaves12c = document.getElementById("exh-btwslowoctaves-12-c");
  exhbtwslowoctaves12c.onclick = function() {
    exhbtwslowoctaves12m.style.display = "none";
  }
  exhbtwslowoctaves12m.onclick = function() {
    exhbtwslowoctaves12m.style.display = "none";
  }
  
  var exhbtwslowoctaves13m = document.getElementById("exh-btwslowoctaves-13-m");
  var exhbtwslowoctaves13tr = document.getElementById("exh-btwslowoctaves-13-tr");
  var exhbtwslowoctaves13mc = document.getElementById("exh-btwslowoctaves-13-mc");
  exhbtwslowoctaves13tr.onclick = function(){
    exhbtwslowoctaves13m.style.display = "block";
    exhbtwslowoctaves13mc.src = this.src;
  }
  var exhbtwslowoctaves13c = document.getElementById("exh-btwslowoctaves-13-c");
  exhbtwslowoctaves13c.onclick = function() {
    exhbtwslowoctaves13m.style.display = "none";
  }
  exhbtwslowoctaves13m.onclick = function() {
    exhbtwslowoctaves13m.style.display = "none";
  }
  
  var exhbtwslowoctaves14m = document.getElementById("exh-btwslowoctaves-14-m");
  var exhbtwslowoctaves14tr = document.getElementById("exh-btwslowoctaves-14-tr");
  var exhbtwslowoctaves14mc = document.getElementById("exh-btwslowoctaves-14-mc");
  exhbtwslowoctaves14tr.onclick = function(){
    exhbtwslowoctaves14m.style.display = "block";
    exhbtwslowoctaves14mc.src = this.src;
  }
  var exhbtwslowoctaves14c = document.getElementById("exh-btwslowoctaves-14-c");
  exhbtwslowoctaves14c.onclick = function() {
    exhbtwslowoctaves14m.style.display = "none";
  }
  exhbtwslowoctaves14m.onclick = function() {
    exhbtwslowoctaves14m.style.display = "none";
  }
  
  var exhbtwslowoctaves15m = document.getElementById("exh-btwslowoctaves-15-m");
  var exhbtwslowoctaves15tr = document.getElementById("exh-btwslowoctaves-15-tr");
  var exhbtwslowoctaves15mc = document.getElementById("exh-btwslowoctaves-15-mc");
  exhbtwslowoctaves15tr.onclick = function(){
    exhbtwslowoctaves15m.style.display = "block";
    exhbtwslowoctaves15mc.src = this.src;
  }
  var exhbtwslowoctaves15c = document.getElementById("exh-btwslowoctaves-15-c");
  exhbtwslowoctaves15c.onclick = function() {
    exhbtwslowoctaves15m.style.display = "none";
  }
  exhbtwslowoctaves15m.onclick = function() {
    exhbtwslowoctaves15m.style.display = "none";
  }
  
  var exhbtwslowoctaves16m = document.getElementById("exh-btwslowoctaves-16-m");
  var exhbtwslowoctaves16tr = document.getElementById("exh-btwslowoctaves-16-tr");
  var exhbtwslowoctaves16mc = document.getElementById("exh-btwslowoctaves-16-mc");
  exhbtwslowoctaves16tr.onclick = function(){
    exhbtwslowoctaves16m.style.display = "block";
    exhbtwslowoctaves16mc.src = this.src;
  }
  var exhbtwslowoctaves16c = document.getElementById("exh-btwslowoctaves-16-c");
  exhbtwslowoctaves16c.onclick = function() {
    exhbtwslowoctaves16m.style.display = "none";
  }
  exhbtwslowoctaves16m.onclick = function() {
    exhbtwslowoctaves16m.style.display = "none";
  }
  
  var exhbtwslowoctaves17m = document.getElementById("exh-btwslowoctaves-17-m");
  var exhbtwslowoctaves17tr = document.getElementById("exh-btwslowoctaves-17-tr");
  var exhbtwslowoctaves17mc = document.getElementById("exh-btwslowoctaves-17-mc");
  exhbtwslowoctaves17tr.onclick = function(){
    exhbtwslowoctaves17m.style.display = "block";
    exhbtwslowoctaves17mc.src = this.src;
  }
  var exhbtwslowoctaves17c = document.getElementById("exh-btwslowoctaves-17-c");
  exhbtwslowoctaves17c.onclick = function() {
    exhbtwslowoctaves17m.style.display = "none";
  }
  exhbtwslowoctaves17m.onclick = function() {
    exhbtwslowoctaves17m.style.display = "none";
  }
  
  var exhbtwslowoctaves18m = document.getElementById("exh-btwslowoctaves-18-m");
  var exhbtwslowoctaves18tr = document.getElementById("exh-btwslowoctaves-18-tr");
  var exhbtwslowoctaves18mc = document.getElementById("exh-btwslowoctaves-18-mc");
  exhbtwslowoctaves18tr.onclick = function(){
    exhbtwslowoctaves18m.style.display = "block";
    exhbtwslowoctaves18mc.src = this.src;
  }
  var exhbtwslowoctaves18c = document.getElementById("exh-btwslowoctaves-18-c");
  exhbtwslowoctaves18c.onclick = function() {
    exhbtwslowoctaves18m.style.display = "none";
  }
  exhbtwslowoctaves18m.onclick = function() {
    exhbtwslowoctaves18m.style.display = "none";
  }
  
  var exhbtwslowoctaves19m = document.getElementById("exh-btwslowoctaves-19-m");
  var exhbtwslowoctaves19tr = document.getElementById("exh-btwslowoctaves-19-tr");
  var exhbtwslowoctaves19mc = document.getElementById("exh-btwslowoctaves-19-mc");
  exhbtwslowoctaves19tr.onclick = function(){
    exhbtwslowoctaves19m.style.display = "block";
    exhbtwslowoctaves19mc.src = this.src;
  }
  var exhbtwslowoctaves19c = document.getElementById("exh-btwslowoctaves-19-c");
  exhbtwslowoctaves19c.onclick = function() {
    exhbtwslowoctaves19m.style.display = "none";
  }
  exhbtwslowoctaves19m.onclick = function() {
    exhbtwslowoctaves19m.style.display = "none";
  }
  
  var exhbtwslowoctaves20m = document.getElementById("exh-btwslowoctaves-20-m");
  var exhbtwslowoctaves20tr = document.getElementById("exh-btwslowoctaves-20-tr");
  var exhbtwslowoctaves20mc = document.getElementById("exh-btwslowoctaves-20-mc");
  exhbtwslowoctaves20tr.onclick = function(){
    exhbtwslowoctaves20m.style.display = "block";
    exhbtwslowoctaves20mc.src = this.src;
  }
  var exhbtwslowoctaves20c = document.getElementById("exh-btwslowoctaves-20-c");
  exhbtwslowoctaves20c.onclick = function() {
    exhbtwslowoctaves20m.style.display = "none";
  }
  exhbtwslowoctaves20m.onclick = function() {
    exhbtwslowoctaves20m.style.display = "none";
  }
  