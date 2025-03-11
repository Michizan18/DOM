const kilometros = document.getElementById('km');
const millas = document.getElementById('millas');

kilometros.addEventListener('input', function() {
    let km = parseFloat(kilometros.value) || 0;
    let mi = km * 0.621371;

    millas.textContent = mi.toFixed(2);
});