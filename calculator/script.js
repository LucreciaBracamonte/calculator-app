// Agrega el valor del botón pulsado a la pantalla
function agregarValor(valor) {
    const pantalla = document.getElementById('pantalla');
    const actual = pantalla.value;
    const operadores = ['+', '-', '*', '/'];

    // No permitir empezar con operador (excepto -)
    if (actual === '' && operadores.includes(valor) && valor !== '-') return;

    // Si el último carácter es operador y el nuevo también es operador, reemplazarlo
    const ultimoChar = actual.slice(-1);
    if (operadores.includes(ultimoChar) && operadores.includes(valor)) {
        pantalla.value = actual.slice(0, -1) + valor;
        return;
    }

    // Evitar múltiples puntos decimales en el mismo número
    if (valor === '.') {
        const partes = actual.split(/[+\-*/]/);
        const ultimaParte = partes[partes.length - 1];
        if (ultimaParte.includes('.')) return;
    }

    pantalla.value += valor;
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
    const expresion = pantalla.value;

    if (!expresion) return;

    // Sanitizar: solo permitir dígitos, operadores, punto decimal y paréntesis
    if (!/^[\d+\-*/.()]+$/.test(expresion)) {
        pantalla.value = 'Error';
        return;
    }

    try {
        // eslint-disable-next-line no-new-func
        const resultado = Function('"use strict"; return (' + expresion + ')')();
        if (!isFinite(resultado) || isNaN(resultado)) {
            pantalla.value = 'Error';
        } else {
            pantalla.value = resultado;
        }
    } catch (error) {
        pantalla.value = 'Error';
    }
}
