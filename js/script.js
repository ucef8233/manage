function myFunction() {
  var x = document.getElementById("myNav");

  if (x.className === "navbar__main") {
    x.className += " respNav";
  } else {
    x.className = "navbar__main";
  }
}
document
  .getElementById("inscription")
  .addEventListener("submit", function verifMail() {
    var erreur;
    var email = document.getElementById("email");
    if (!email.value) {
      erreur = "veiller rensegnier un email";
    }
    if (erreur) {
      event.preventDefault();
      document.getElementById("demo").innerHTML = erreur;
    } else {
      alert("formulaire envoyé " + "" + Date());
    }
  });
