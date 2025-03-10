const cantidadInput = document.getElementById('cantidad');
const totalSpan = document.getElementById('total');
const price = document.getElementById('price');
const precioUni = 50;

price.textContent = precioUni;

cantidadInput.addEventListener("input", function(){
    const cantidad = parseInt(cantidadInput.value);
    const total = cantidad * precioUni;

    if (isNaN(cantidad) || cantidad < 1) {
        cantidadInput.value = 1;
    } else {
        totalSpan.textContent = "" + total;
    }
});