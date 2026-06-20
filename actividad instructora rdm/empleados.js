var empleados = [];
function registrarEmpleado() {
    var id      = prompt("Ingrese la identificación del empleado:");
    var nombre  = prompt("Ingrese el nombre completo:");
    var cargo   = prompt("Ingrese el cargo:");
    var area    = prompt("Ingrese el área (Administración, Talento Humano, Contabilidad, Ventas, Tecnología):");
    var salario = prompt("Ingrese el salario mensual:");

    if (id === "" || nombre === "" || cargo === "" || area === "" || salario === "") {
        alert("Error: Todos los campos son obligatorios.");
        return;
    }
    var existe = false;
    for (var i = 0; i < empleados.length; i++) {
        if (empleados[i].id === id) {
            existe = true;
            break;
        }
    }

    if (existe) {
        alert(" Error: Ya existe un empleado con la identificación " + id);
        return;
    }

    var nuevoEmpleado = {
        id: id,
        nombre: nombre,
        cargo: cargo,
        area: area,
        salario: salario
    };

    empleados.push(nuevoEmpleado);
    alert("Empleado " + nombre + " registrado exitosamente.");
}

function listarEmpleados() {
    if (empleados.length === 0) {
        alert("No hay empleados registrados aún.");
        return;
    }

    var lista = "===== LISTA DE EMPLEADOS =====\n\n";

    for (var i = 0; i < empleados.length; i++) {
        lista += "Empleado #" + (i + 1) + "\n";
        lista += "  ID:      " + empleados[i].id      + "\n";
        lista += "  Nombre:  " + empleados[i].nombre  + "\n";
        lista += "  Cargo:   " + empleados[i].cargo   + "\n";
        lista += "  Área:    " + empleados[i].area    + "\n";
        lista += "  Salario: $" + empleados[i].salario + "\n";
        lista += "------------------------------\n";
    }

    alert(lista);
}

function buscarEmpleado() {
    var idBuscar = prompt("Ingrese la identificación del empleado a buscar:");

    if (idBuscar === "") {
        alert(" Debe ingresar una identificación.");
        return;
    }

    var encontrado = null;

    for (var i = 0; i < empleados.length; i++) {
        if (empleados[i].id === idBuscar) {
            encontrado = empleados[i];
            break;
        }
    }

    if (encontrado !== null) {
        var info = "===== EMPLEADO ENCONTRADO =====\n\n";
        info += "ID:      " + encontrado.id      + "\n";
        info += "Nombre:  " + encontrado.nombre  + "\n";
        info += "Cargo:   " + encontrado.cargo   + "\n";
        info += "Área:    " + encontrado.area    + "\n";
        info += "Salario: $" + encontrado.salario;
        alert(info);
    } else {
        alert(" No se encontró ningún empleado con la identificación: " + idBuscar);
    }
}

function mostrarTotal() {
    alert("Total de empleados registrados: " + empleados.length);
}

function mostrarMenu() {
    var menu = "===== SOLUCIONES EMPRESARIALES S.A.S. =====\n";
    menu += "       Sistema de Gestión de Personal\n";
    menu += "============================================\n\n";
    menu += "1. Registrar nuevo empleado\n";
    menu += "2. Listar todos los empleados\n";
    menu += "3. Buscar empleado por identificación\n";
    menu += "4. Mostrar total de empleados\n";
    menu += "5. Salir\n\n";
    menu += "Seleccione una opción:";

    return prompt(menu);
}

var opcion = "";

while (opcion !== "5") {
    opcion = mostrarMenu();

    if (opcion === "1") {
        registrarEmpleado();
    } else if (opcion === "2") {
        listarEmpleados();
    } else if (opcion === "3") {
        buscarEmpleado();
    } else if (opcion === "4") {
        mostrarTotal();
    } else if (opcion === "5") {
        alert("Hasta luego. Cerrando el sistema...");
    } else {
        alert(" Opción inválida. Por favor ingrese un número del 1 al 5.");
    }
}
