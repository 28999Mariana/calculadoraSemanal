var gastosDiarios = [];

function agregarGastoDiario() {
    let gastoDiarioInput = document.getElementById('gastoDiario');
    let gastoDiarioValue = parseFloat(gastoDiarioInput.value);

    // Verificar si el gasto diario es válido
    if (isNaN(gastoDiarioValue) || gastoDiarioValue < 0) {
        alert('Please enter a valid daily expense.');
        return;
    }

    // Obtener el número de días ingresado por el usuario
    let numeroDiasInput = document.getElementById('numeroDias');
    let numeroDias = parseFloat(numeroDiasInput.value);

    // Verificar si el número de días es válido
    if (isNaN(numeroDias) || numeroDias <= 0) {
        alert('Please enter a valid number of days.');
        return;
    }

    // Agregar el gasto diario al array
    gastosDiarios.push(gastoDiarioValue);

    // Mostrar los gastos diarios en la tabla
    actualizarTablaGastos();

    // Limpiar el campo de entrada
    gastoDiarioInput.value = '';
}

function actualizarTablaGastos() {
    var cuerpoTabla = document.getElementById('cuerpoTablaGastos');
    cuerpoTabla.innerHTML = '';

    // Llenar la tabla con los gastos diarios
    for (var i = 0; i < gastosDiarios.length; i++) {
        var fila = document.createElement('tr');
        fila.innerHTML = '<td>Day ' + (i + 1) + '</td><td>$' + gastosDiarios[i].toFixed(2) + '</td>';
        cuerpoTabla.appendChild(fila);
    }
}

function calcularGastoSemanal() {
    // Calcular el gasto semanal sumando todos los gastos diarios
    var gastoSemanal = gastosDiarios.reduce(function (total, gasto) {
        return total + gasto;
    }, 0);

    // Mostrar el gasto semanal en el contenedor
    var gastoSemanalContainer = document.getElementById('gastoSemanalContainer');
    gastoSemanalContainer.innerHTML = '<p>Weekly Expense: $' + gastoSemanal.toFixed(2) + '</p>';
}