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
  
  var hiddenlib1m = document.getElementById("hiddenlib-1-m");
  var hiddenlib1tr = document.getElementById("hiddenlib-1-tr");
  var hiddenlib1mc = document.getElementById("hiddenlib-1-mc");
  hiddenlib1tr.onclick = function(){
    hiddenlib1m.style.display = "block";
    hiddenlib1mc.src = this.src;
  }
  var hiddenlib1c = document.getElementById("hiddenlib-1-c");
  hiddenlib1c.onclick = function() {
    hiddenlib1m.style.display = "none";
  }
  hiddenlib1m.onclick = function() {
    hiddenlib1m.style.display = "none";
  }
  
  var hiddenlib2m = document.getElementById("hiddenlib-2-m");
  var hiddenlib2tr = document.getElementById("hiddenlib-2-tr");
  var hiddenlib2mc = document.getElementById("hiddenlib-2-mc");
  hiddenlib2tr.onclick = function(){
    hiddenlib2m.style.display = "block";
    hiddenlib2mc.src = this.src;
  }
  var hiddenlib2c = document.getElementById("hiddenlib-2-c");
  hiddenlib2c.onclick = function() {
    hiddenlib2m.style.display = "none";
  }
  hiddenlib2m.onclick = function() {
    hiddenlib2m.style.display = "none";
  }
  
  var hiddenlib3m = document.getElementById("hiddenlib-3-m");
  var hiddenlib3tr = document.getElementById("hiddenlib-3-tr");
  var hiddenlib3mc = document.getElementById("hiddenlib-3-mc");
  hiddenlib3tr.onclick = function(){
    hiddenlib3m.style.display = "block";
    hiddenlib3mc.src = this.src;
  }
  var hiddenlib3c = document.getElementById("hiddenlib-3-c");
  hiddenlib3c.onclick = function() {
    hiddenlib3m.style.display = "none";
  }
  hiddenlib3m.onclick = function() {
    hiddenlib3m.style.display = "none";
  }
  
  var hiddenlib4m = document.getElementById("hiddenlib-4-m");
  var hiddenlib4tr = document.getElementById("hiddenlib-4-tr");
  var hiddenlib4mc = document.getElementById("hiddenlib-4-mc");
  hiddenlib4tr.onclick = function(){
    hiddenlib4m.style.display = "block";
    hiddenlib4mc.src = this.src;
  }
  var hiddenlib4c = document.getElementById("hiddenlib-4-c");
  hiddenlib4c.onclick = function() {
    hiddenlib4m.style.display = "none";
  }
  hiddenlib4m.onclick = function() {
    hiddenlib4m.style.display = "none";
  }
  
  var hiddenlib5m = document.getElementById("hiddenlib-5-m");
  var hiddenlib5tr = document.getElementById("hiddenlib-5-tr");
  var hiddenlib5mc = document.getElementById("hiddenlib-5-mc");
  hiddenlib5tr.onclick = function(){
    hiddenlib5m.style.display = "block";
    hiddenlib5mc.src = this.src;
  }
  var hiddenlib5c = document.getElementById("hiddenlib-5-c");
  hiddenlib5c.onclick = function() {
    hiddenlib5m.style.display = "none";
  }
  hiddenlib5m.onclick = function() {
    hiddenlib5m.style.display = "none";
  }
  
  var hiddenlib6m = document.getElementById("hiddenlib-6-m");
  var hiddenlib6tr = document.getElementById("hiddenlib-6-tr");
  var hiddenlib6mc = document.getElementById("hiddenlib-6-mc");
  hiddenlib6tr.onclick = function(){
    hiddenlib6m.style.display = "block";
    hiddenlib6mc.src = this.src;
  }
  var hiddenlib6c = document.getElementById("hiddenlib-6-c");
  hiddenlib6c.onclick = function() {
    hiddenlib6m.style.display = "none";
  }
  hiddenlib6m.onclick = function() {
    hiddenlib6m.style.display = "none";
  }
  
  var hiddenlib7m = document.getElementById("hiddenlib-7-m");
  var hiddenlib7tr = document.getElementById("hiddenlib-7-tr");
  var hiddenlib7mc = document.getElementById("hiddenlib-7-mc");
  hiddenlib7tr.onclick = function(){
    hiddenlib7m.style.display = "block";
    hiddenlib7mc.src = this.src;
  }
  var hiddenlib7c = document.getElementById("hiddenlib-7-c");
  hiddenlib7c.onclick = function() {
    hiddenlib7m.style.display = "none";
  }
  hiddenlib7m.onclick = function() {
    hiddenlib7m.style.display = "none";
  }
  
  var hiddenlib8m = document.getElementById("hiddenlib-8-m");
  var hiddenlib8tr = document.getElementById("hiddenlib-8-tr");
  var hiddenlib8mc = document.getElementById("hiddenlib-8-mc");
  hiddenlib8tr.onclick = function(){
    hiddenlib8m.style.display = "block";
    hiddenlib8mc.src = this.src;
  }
  var hiddenlib8c = document.getElementById("hiddenlib-8-c");
  hiddenlib8c.onclick = function() {
    hiddenlib8m.style.display = "none";
  }
  hiddenlib8m.onclick = function() {
    hiddenlib8m.style.display = "none";
  }
  
  var hiddenlib9m = document.getElementById("hiddenlib-9-m");
  var hiddenlib9tr = document.getElementById("hiddenlib-9-tr");
  var hiddenlib9mc = document.getElementById("hiddenlib-9-mc");
  hiddenlib9tr.onclick = function(){
    hiddenlib9m.style.display = "block";
    hiddenlib9mc.src = this.src;
  }
  var hiddenlib9c = document.getElementById("hiddenlib-9-c");
  hiddenlib9c.onclick = function() {
    hiddenlib9m.style.display = "none";
  }
  hiddenlib9m.onclick = function() {
    hiddenlib9m.style.display = "none";
  }
  
  var hiddenlib10m = document.getElementById("hiddenlib-10-m");
  var hiddenlib10tr = document.getElementById("hiddenlib-10-tr");
  var hiddenlib10mc = document.getElementById("hiddenlib-10-mc");
  hiddenlib10tr.onclick = function(){
    hiddenlib10m.style.display = "block";
    hiddenlib10mc.src = this.src;
  }
  var hiddenlib10c = document.getElementById("hiddenlib-10-c");
  hiddenlib10c.onclick = function() {
    hiddenlib10m.style.display = "none";
  }
  hiddenlib10m.onclick = function() {
    hiddenlib10m.style.display = "none";
  }
  
  var hiddenlib11m = document.getElementById("hiddenlib-11-m");
  var hiddenlib11tr = document.getElementById("hiddenlib-11-tr");
  var hiddenlib11mc = document.getElementById("hiddenlib-11-mc");
  hiddenlib11tr.onclick = function(){
    hiddenlib11m.style.display = "block";
    hiddenlib11mc.src = this.src;
  }
  var hiddenlib11c = document.getElementById("hiddenlib-11-c");
  hiddenlib11c.onclick = function() {
    hiddenlib11m.style.display = "none";
  }
  hiddenlib11m.onclick = function() {
    hiddenlib11m.style.display = "none";
  }
  
  var hiddenlib12m = document.getElementById("hiddenlib-12-m");
  var hiddenlib12tr = document.getElementById("hiddenlib-12-tr");
  var hiddenlib12mc = document.getElementById("hiddenlib-12-mc");
  hiddenlib12tr.onclick = function(){
    hiddenlib12m.style.display = "block";
    hiddenlib12mc.src = this.src;
  }
  var hiddenlib12c = document.getElementById("hiddenlib-12-c");
  hiddenlib12c.onclick = function() {
    hiddenlib12m.style.display = "none";
  }
  hiddenlib12m.onclick = function() {
    hiddenlib12m.style.display = "none";
  }
  
  var hiddenlib13m = document.getElementById("hiddenlib-13-m");
  var hiddenlib13tr = document.getElementById("hiddenlib-13-tr");
  var hiddenlib13mc = document.getElementById("hiddenlib-13-mc");
  hiddenlib13tr.onclick = function(){
    hiddenlib13m.style.display = "block";
    hiddenlib13mc.src = this.src;
  }
  var hiddenlib13c = document.getElementById("hiddenlib-13-c");
  hiddenlib13c.onclick = function() {
    hiddenlib13m.style.display = "none";
  }
  hiddenlib13m.onclick = function() {
    hiddenlib13m.style.display = "none";
  }
  
  var hiddenlib14m = document.getElementById("hiddenlib-14-m");
  var hiddenlib14tr = document.getElementById("hiddenlib-14-tr");
  var hiddenlib14mc = document.getElementById("hiddenlib-14-mc");
  hiddenlib14tr.onclick = function(){
    hiddenlib14m.style.display = "block";
    hiddenlib14mc.src = this.src;
  }
  var hiddenlib14c = document.getElementById("hiddenlib-14-c");
  hiddenlib14c.onclick = function() {
    hiddenlib14m.style.display = "none";
  }
  hiddenlib14m.onclick = function() {
    hiddenlib14m.style.display = "none";
  }
  
  var hiddenlib15m = document.getElementById("hiddenlib-15-m");
  var hiddenlib15tr = document.getElementById("hiddenlib-15-tr");
  var hiddenlib15mc = document.getElementById("hiddenlib-15-mc");
  hiddenlib15tr.onclick = function(){
    hiddenlib15m.style.display = "block";
    hiddenlib15mc.src = this.src;
  }
  var hiddenlib15c = document.getElementById("hiddenlib-15-c");
  hiddenlib15c.onclick = function() {
    hiddenlib15m.style.display = "none";
  }
  hiddenlib15m.onclick = function() {
    hiddenlib15m.style.display = "none";
  }
  
  var hiddenlib16m = document.getElementById("hiddenlib-16-m");
  var hiddenlib16tr = document.getElementById("hiddenlib-16-tr");
  var hiddenlib16mc = document.getElementById("hiddenlib-16-mc");
  hiddenlib16tr.onclick = function(){
    hiddenlib16m.style.display = "block";
    hiddenlib16mc.src = this.src;
  }
  var hiddenlib16c = document.getElementById("hiddenlib-16-c");
  hiddenlib16c.onclick = function() {
    hiddenlib16m.style.display = "none";
  }
  hiddenlib16m.onclick = function() {
    hiddenlib16m.style.display = "none";
  }
  
  var hiddenlib17m = document.getElementById("hiddenlib-17-m");
  var hiddenlib17tr = document.getElementById("hiddenlib-17-tr");
  var hiddenlib17mc = document.getElementById("hiddenlib-17-mc");
  hiddenlib17tr.onclick = function(){
    hiddenlib17m.style.display = "block";
    hiddenlib17mc.src = this.src;
  }
  var hiddenlib17c = document.getElementById("hiddenlib-17-c");
  hiddenlib17c.onclick = function() {
    hiddenlib17m.style.display = "none";
  }
  hiddenlib17m.onclick = function() {
    hiddenlib17m.style.display = "none";
  }
  
  var hiddenlib18m = document.getElementById("hiddenlib-18-m");
  var hiddenlib18tr = document.getElementById("hiddenlib-18-tr");
  var hiddenlib18mc = document.getElementById("hiddenlib-18-mc");
  hiddenlib18tr.onclick = function(){
    hiddenlib18m.style.display = "block";
    hiddenlib18mc.src = this.src;
  }
  var hiddenlib18c = document.getElementById("hiddenlib-18-c");
  hiddenlib18c.onclick = function() {
    hiddenlib18m.style.display = "none";
  }
  hiddenlib18m.onclick = function() {
    hiddenlib18m.style.display = "none";
  }
  
  var hiddenlib19m = document.getElementById("hiddenlib-19-m");
  var hiddenlib19tr = document.getElementById("hiddenlib-19-tr");
  var hiddenlib19mc = document.getElementById("hiddenlib-19-mc");
  hiddenlib19tr.onclick = function(){
    hiddenlib19m.style.display = "block";
    hiddenlib19mc.src = this.src;
  }
  var hiddenlib19c = document.getElementById("hiddenlib-19-c");
  hiddenlib19c.onclick = function() {
    hiddenlib19m.style.display = "none";
  }
  hiddenlib19m.onclick = function() {
    hiddenlib19m.style.display = "none";
  }
  
  var hiddenlib20m = document.getElementById("hiddenlib-20-m");
  var hiddenlib20tr = document.getElementById("hiddenlib-20-tr");
  var hiddenlib20mc = document.getElementById("hiddenlib-20-mc");
  hiddenlib20tr.onclick = function(){
    hiddenlib20m.style.display = "block";
    hiddenlib20mc.src = this.src;
  }
  var hiddenlib20c = document.getElementById("hiddenlib-20-c");
  hiddenlib20c.onclick = function() {
    hiddenlib20m.style.display = "none";
  }
  hiddenlib20m.onclick = function() {
    hiddenlib20m.style.display = "none";
  }
  