const lista = document.getElementById('lista');
const derecha = document.getElementById('derecha');
const izquierda = document.getElementById('izquierda');

let rutasImg = ["descarga.jpeg", "descarga2.jpeg", "descarga3.jpeg"];
let indice = 0;

function actualizarImg() {
    lista.src = rutasImg[indice];
}

derecha.addEventListener('click', function() {
    if (indice < rutasImg.length - 1) {
        indice++;
        actualizarImg();
    }
}); 

izquierda.addEventListener('click', function(){
    if (indice > 0) {
        indice--;
        actualizarImg();
    }
});

actualizarImg();