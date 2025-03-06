const boton = document.getElementById('morajela');
const texto = document.getElementById('texto');
const boton2 = document.getElementById('cuento');

boton.addEventListener('click', function() {
    texto.textContent = 'La moraleja de "Caperucita Roja" se centra en la importancia de no confiar en extraños. A pesar de que el lobo parecía amigable y usó palabras dulces, su intención era engañar a Caperucita, lo que resalta el mensaje de ser cautelosos y seguir las recomendaciones de los padres.';
});

boton2.addEventListener('click', function() {
    texto.textContent = 'Érase una vez una niña llamada Caperucita Roja, que siempre llevaba puesta una hermosa capa de color rojo. Un día, su madre le pidió que llevara una cesta con comida a su abuela enferma, advirtiéndole que no hablara con extraños ni se desvíe del camino. Durante su trayecto, Caperucita se encontró con un lobo astuto, quien la engañó y llegó primero a la casa de la abuela. El lobo se disfrazó de la abuela y trató de atrapar a Caperucita, pero al final, un leñador salvó a ambas, y el lobo recibió su merecido. Así, Caperucita aprendió a ser más cautelosa.';
});

