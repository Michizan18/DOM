const botones = document.querySelectorAll('#productos button');
const lista = document.getElementById("agregados");
const totalProducto = document.getElementById("total");

const productos = [
    {nombre: "Perrito", precio: 12000},
    {nombre: "Hamburguesa", precio: 15000},
    {nombre: "Jugo", precio: 5000}
];

let total = 0;

botones.forEach((boton, index) => {
    boton.addEventListener("click", function(){
        const item = document.createElement("li");
        item.textContent = productos[index].nombre + "- $" + productos[index].precio;
        lista.appendChild(item);

        total += productos[index].precio;
        totalProducto.textContent = total;
    });
});
