document.addEventListener("keydown", function(event){
    const cuadrado = document.getElementById('cuadrado');

    let posicionX = parseInt(cuadrado.style.left) || 100;
    let posicionY = parseInt(cuadrado.style.top) || 100;
        const paso = 10;

        if (event.key === "ArrowUp") {
            posicionY -= paso;
        } else if (event.key === "ArrowDown") {
            posicionY += paso;
        } else if (event.key === "ArrowLeft") { 
            posicionX -= paso;
        } else if (event.key === "ArrowRight") {
            posicionX += paso;
        }

        cuadrado.style.top = posicionY + "px";
        cuadrado.style.left = posicionX + "px";

});