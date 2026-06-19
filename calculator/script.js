// Agrega el valor del botón pulsado a la pantalla
function agregarValor(valor) {
    document.getElementById('pantalla').value += valor;
}

// Limpia toda la pantalla
function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}

// Borra el último carácter ingresado
function borrarUltimo() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

// Calcula el resultado de la expresión en la pantalla
function calcular() {
    const pantalla = document.getElementById('pantalla');
    try {
        // eval() toma la cadena de texto y la ejecuta como código matemático
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
    }
}
