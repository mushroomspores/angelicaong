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

var p1pr1m = document.getElementById("p1pr-1-m");
var p1pr1tr = document.getElementById("p1pr-1-tr");
var p1pr1mc = document.getElementById("p1pr-1-mc");
p1pr1tr.onclick = function(){
  p1pr1m.style.display = "block";
  p1pr1mc.src = this.src;
}
var p1pr1c = document.getElementById("p1pr-1-c");
p1pr1c.onclick = function() {
  p1pr1m.style.display = "none";
}
p1pr1m.onclick = function() {
  p1pr1m.style.display = "none";
}
p1pr1tr.addEventListener("mouseover", function() {
  p1pr1tr.style.opacity = 0.7 ;
})
p1pr1tr.addEventListener("mouseout", function() {
  p1pr1tr.style.opacity = 1.0 ;
})

var p1pr2m = document.getElementById("p1pr-2-m");
var p1pr2tr = document.getElementById("p1pr-2-tr");
var p1pr2mc = document.getElementById("p1pr-2-mc");
p1pr2tr.onclick = function(){
  p1pr2m.style.display = "block";
  p1pr2mc.src = this.src;
}
var p1pr2c = document.getElementById("p1pr-2-c");
p1pr2c.onclick = function() {
  p1pr2m.style.display = "none";
}
p1pr2m.onclick = function() {
  p1pr2m.style.display = "none";
}
p1pr2tr.addEventListener("mouseover", function() {
  p1pr2tr.style.opacity = 0.7 ;
})
p1pr2tr.addEventListener("mouseout", function() {
  p1pr2tr.style.opacity = 1.0 ;
})


var p1pr3m = document.getElementById("p1pr-3-m");
var p1pr3tr = document.getElementById("p1pr-3-tr");
var p1pr3mc = document.getElementById("p1pr-3-mc");
p1pr3tr.onclick = function(){
  p1pr3m.style.display = "block";
  p1pr3mc.src = photographyimages/poem1pr/poem1pr-diptych-1-1-2021-angelicoang.png.src;
}
var p1pr3c = document.getElementById("p1pr-3-c");
p1pr3c.onclick = function() {
  p1pr3m.style.display = "none";
}
p1pr3m.onclick = function() {
  p1pr3m.style.display = "none";
}
p1pr3tr.addEventListener("mouseover", function() {
  p1pr3tr.style.opacity = 0.7 ;
})
p1pr3tr.addEventListener("mouseout", function() {
  p1pr3tr.style.opacity = 1.0 ;
})


var p1pr4m = document.getElementById("p1pr-4-m");
var p1pr4tr = document.getElementById("p1pr-4-tr");
var p1pr4mc = document.getElementById("p1pr-4-mc");
p1pr4tr.onclick = function(){
  p1pr4m.style.display = "block";
  p1pr4mc.src = photographyimages/poem1pr/poem1pr-diptych-1-1-2021-angelicoang.png.src;
}
var p1pr4c = document.getElementById("p1pr-4-c");
p1pr4c.onclick = function() {
  p1pr4m.style.display = "none";
}
p1pr4m.onclick = function() {
  p1pr4m.style.display = "none";
}
p1pr4tr.addEventListener("mouseover", function() {
  p1pr4tr.style.opacity = 0.7 ;
})
p1pr4tr.addEventListener("mouseout", function() {
  p1pr4tr.style.opacity = 1.0 ;
})

var p1prm1m = document.getElementById("p1pr-m-1-m");
var p1prm1tr = document.getElementById("p1pr-m-1-tr");
var p1prm1mc = document.getElementById("p1pr-m-1-mc");
p1prm1tr.onclick = function(){
  p1prm1m.style.display = "block";
  p1prm1mc.src = this.src;
}
var p1prm1c = document.getElementById("p1pr-m-1-c");
p1prm1c.onclick = function() {
  p1prm1m.style.display = "none";
}
p1prm1m.onclick = function() {
  p1prm1m.style.display = "none";
}
p1prm1tr.addEventListener("mouseover", function() {
  p1prm1tr.style.opacity = 0.7 ;
})
p1prm1tr.addEventListener("mouseout", function() {
  p1prm1tr.style.opacity = 1.0 ;
})

var p1prm2m = document.getElementById("p1pr-m-2-m");
var p1prm2tr = document.getElementById("p1pr-m-2-tr");
var p1prm2mc = document.getElementById("p1pr-m-2-mc");
p1prm2tr.onclick = function(){
  p1prm2m.style.display = "block";
  p1prm2mc.src = this.src;
}
var p1prm2c = document.getElementById("p1pr-m-2-c");
p1prm2c.onclick = function() {
  p1prm2m.style.display = "none";
}
p1prm2m.onclick = function() {
  p1prm2m.style.display = "none";
}
p1prm2tr.addEventListener("mouseover", function() {
  p1prm2tr.style.opacity = 0.7 ;
})
p1prm2tr.addEventListener("mouseout", function() {
  p1prm2tr.style.opacity = 1.0 ;
})


var p1prm3m = document.getElementById("p1pr-m-3-m");
var p1prm3tr = document.getElementById("p1pr-m-3-tr");
var p1prm3mc = document.getElementById("p1pr-m-3-mc");
p1prm3tr.onclick = function(){
  p1prm3m.style.display = "block";
  p1prm3mc.src = photographyimages/poem1pr/poem1pr-diptych-1-1-2021-angelicoang.png.src;
}
var p1prm3c = document.getElementById("p1pr-m-3-c");
p1prm3c.onclick = function() {
  p1prm3m.style.display = "none";
}
p1prm3m.onclick = function() {
  p1prm3m.style.display = "none";
}
p1prm3tr.addEventListener("mouseover", function() {
  p1prm3tr.style.opacity = 0.7 ;
})
p1prm3tr.addEventListener("mouseout", function() {
  p1prm3tr.style.opacity = 1.0 ;
})


var p1prm4m = document.getElementById("p1pr-m-4-m");
var p1prm4tr = document.getElementById("p1pr-m-4-tr");
var p1prm4mc = document.getElementById("p1pr-m-4-mc");
p1prm4tr.onclick = function(){
  p1prm4m.style.display = "block";
  p1prm4mc.src = photographyimages/poem1pr/poem1pr-diptych-1-1-2021-angelicoang.png.src;
}
var p1prm4c = document.getElementById("p1pr-m-4-c");
p1prm4c.onclick = function() {
  p1prm4m.style.display = "none";
}
p1prm4m.onclick = function() {
  p1prm4m.style.display = "none";
}
p1prm4tr.addEventListener("mouseover", function() {
  p1prm4tr.style.opacity = 0.7 ;
})
p1prm4tr.addEventListener("mouseout", function() {
  p1prm4tr.style.opacity = 1.0 ;
})
