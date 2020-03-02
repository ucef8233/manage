function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "navbar__main") {
    x.className += " respNav ";
  } else {
    x.className = "navbar__main";
  }
}