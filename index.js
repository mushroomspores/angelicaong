AOS.init({
  duration: 900,
})

var DropBtn = document.getElementById("dropbtn");
var SubNavBar = document.getElementById("subnavbar");
  DropBtn.onclick = function(){
    if (SubNavBar.style.display === "none") {
      SubNavBar.style.display = "block";
    } else {
      SubNavBar.style.display = "none";
    }
  }
