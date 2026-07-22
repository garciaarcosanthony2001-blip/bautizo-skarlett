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
for (let i = 0; i < 12; i++) {
    let brillo = document.createElement("div");
    brillo.className = "destello";

    brillo.style.left = Math.random() * 100 + "vw";
    brillo.style.animationDelay = Math.random() * 5 + "s";
    brillo.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.body.appendChild(brillo);
}
const fechaBautizo = new Date("August 22, 2026 17:00:00").getTime();

setInterval(function() {

    const ahora = new Date().getTime();

    const diferencia = fechaBautizo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}, 1000);
for(let i=0;i<10;i++){

    let petalo=document.createElement("div");

    petalo.className="petalo";

    petalo.innerHTML="🌸";

    petalo.style.left=Math.random()*100+"vw";

    petalo.style.animationDuration=(8+Math.random()*8)+"s";

    petalo.style.animationDelay=Math.random()*6+"s";

    document.body.appendChild(petalo);

}
