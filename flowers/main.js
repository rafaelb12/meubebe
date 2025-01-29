onload = () =>{
        document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("musica");
        
        if (localStorage.getItem("permitirAudio") === "true") {
            audio.play().catch(error => {
                console.log("Autoplay bloqueado, clique em qualquer lugar para tocar.");
            });

            // Limpamos o localStorage para evitar tocar automaticamente em visitas futuras
            localStorage.removeItem("permitirAudio");
        }
    });
