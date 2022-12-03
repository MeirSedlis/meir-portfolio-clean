myID = document.getElementById("nav");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "nav show"
  } else {
    myID.className = "nav hide"
  }
};

window.addEventListener("scroll", myScrollFunc);