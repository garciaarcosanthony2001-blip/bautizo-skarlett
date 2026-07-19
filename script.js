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
for (let i = 0; i < 25; i++) {
    let brillo = document.createElement("div");
    brillo.className = "destello";

    brillo.style.left = Math.random() * 100 + "vw";
    brillo.style.animationDelay = Math.random() * 5 + "s";
    brillo.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.body.appendChild(brillo);
}
