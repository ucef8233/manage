function myFunction() {
  var x = document.getElementById("myNav");
  // var y = document.getElementById("Nav");
  if (x.className === "navbar__main") {
    x.className += " respNav ";
    // y.className += " test ";
  } else {
    x.className = "navbar__main";
    // y.classList.remove("test");
  }
}
