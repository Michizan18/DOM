const buscar = document.getElementById("busqueda");
const items = document.querySelectorAll("#lista li");

buscar.addEventListener("input", () => {
    const textoBusca = buscar.value.toLowerCase();

    items.forEach(item => {
        const textoItem = item.textContent.toLowerCase();
        if (textoItem.includes(textoBusca)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    });
});
