let clientes = []

function guardar(formulario){
    const {Nomcli, tipo} = formulario;
    if (Nomcli.value.trim() === "") {
        alert("El nombre del cliente no puede estar en blanco.");
        return false;
    }
    let datosclientes = {nombre: Nomcli.value, tipo: tipo.value};
    clientes.push(datosclientes);
    console.log(clientes);
    formulario.reset();
    return false;
}

function mostrar() {
    let resumen = {
        hipotecario: 0,
        automotriz: 0,
        consumo: 0
    };

    for (let cliente of clientes) {
        resumen[cliente.tipo]++;
    }

    let resumenDiv = document.getElementById("resumen");
    resumenDiv.innerHTML = `Hipotecarios: ${resumen.hipotecario}<br>
                            Automotriz: ${resumen.automotriz}<br>
                            Consumo: ${resumen.consumo}`;
}

