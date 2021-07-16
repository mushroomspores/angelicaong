// Get the modal
var tnmn5m = document.getElementById("tnmn-5-m");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var tnmn5tr = document.getElementById("tnmn-5-tr");
var tnmn5img = document.getElementById("tnmn-5-img");
tnmn5tr.onclick = function(){
  tnmn5m.style.display = "block";
  tnmn5img.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  tnmn5m.style.display = "none";
}
