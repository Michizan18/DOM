const selector = document.getElementById('selectorColor');

selector.addEventListener("change", function(){
    const color = selector.value;

    document.body.style.backgroundColor = color;

    document.body.classList.toggle('colores');

});
