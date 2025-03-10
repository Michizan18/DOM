const imagen = document.getElementById('img1');

imagen.addEventListener('mouseover', function() {
    imagen.style.opacity = "0";
    setTimeout(() => {
        imagen.src = 'img2.jpeg';
        imagen.style.width = "500px";
        imagen.style.opacity = "1";
    }, 300);
});

imagen.addEventListener('mouseout', function() {
    imagen.style.opacity = "0";
    setTimeout(() => {
        imagen.src = 'img1.png';
        imagen.style.width = "400px";
        imagen.style.opacity = "1";
    }, 300);
});