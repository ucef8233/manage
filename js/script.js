function valider() {
    var email = document.getElementById('email');
    var Erreur = document.getElementById('Erreur');
    var val = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if (email.value == "") {
        Erreur.style.display = "block";
        Erreur.textContent = "please insert a email";
        email.style.border = "1px solid red";
        email.style.color = "red";
    } else {
        if (!val.test(email.value)) {
            email.style.border = "1px solid red";
            email.style.color = "red";
            Erreur.textContent = "please insert a valid email !";
        }
        else {
            Erreur.textContent = "";
            email.style.border = "none";
            alert("Mail validé");
        }
    }
}
