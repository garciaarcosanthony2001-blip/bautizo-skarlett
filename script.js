function abrirInvitacion() {
    document.querySelector(".inicio").style.display = "none";

    const invitacion = document.getElementById("invitacion");
    invitacion.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const musica = document.getElementById("musica");
    if (musica) {
        musica.play();
    }
}
