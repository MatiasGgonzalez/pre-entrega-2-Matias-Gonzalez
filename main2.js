const paciente = {
    nombreCompleto : "Matias",
    dni : 40477097,
    fechaNacimiento : "5/5/1997",
    mail : "gonzalezzmati@gmail.com",
    tipoTurno : "Traumatologia",
    profesional  : "Martin Rodrigo",
    hora : "15",
    tiempoEspera : 5,
    cantidadPacientes : 0 
}

let opcionMenu = "";
let capacidad = 10;


class Paciente {
    constructor(nombreCompleto,dni,fechaNacimiento,mail,tipoTurno,profesional,hora,tiempoEspera,cantidadPacientes){
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.mail = mail;
        this.tipoTurno = tipoTurno;
        this.profesional = profesional;
        this.tiempoEspera = tiempoEspera;
        this.cantidadPacientes = cantidadPacientes;
        this.hora = hora;
    }
}

let listadePacientes = [];

let listadePacientesJson = [];

console.log(listadePacientesJson);

const agregarPaciente = (e) =>{
        let cantidadPacientes = 0;
        cantidadPacientes = cantidadPacientes + 1;
        e.preventDefault();
    
        let formulario = e.target;
        let nombreCompleto = formulario.children[1].value;
        localStorage.setItem(`nombreCompleto`,nombreCompleto);
        console.log(nombreCompleto);
        let dni= formulario.children[3].value;
        localStorage.setItem(`dni`, dni);
        console.log(dni);
    
        let fechaNacimiento = formulario.children[5].value;
        localStorage.setItem(`fechaNacimiento`, fechaNacimiento);
        console.log(fechaNacimiento);
        let mail = formulario.children[7].value;
        localStorage.setItem(`gmail`, mail);
        console.log(mail);
        let tipoTurno = formulario.children[9].value;
        localStorage.setItem(`tipoTurno`, tipoTurno);
        
        console.log(tipoTurno);
        let profesional = formulario.children[11].value;
        localStorage.setItem(`profesional`, profesional);
        console.log(profesional);
        let hora = formulario.children[13].value;
        localStorage.setItem(`hora`, hora);
        console.log(hora);
        let tiempoEspera = 5;
        tiempoEspera =  cantidadPacientes * tiempoEspera;
        let pacienteNuevo = new Paciente(nombreCompleto,dni,fechaNacimiento,mail,tipoTurno,profesional,hora,tiempoEspera,cantidadPacientes);
        listadePacientes.push(pacienteNuevo);
        console.log(listadePacientes);
        Swal.fire({
            title: `Correcto`,
            text: `Paciente agregado con exito`,
            icon: `success`,
            confirmButtonText: `Ok`,
            width: 300
        })
        listadePacientesJson = JSON.stringify(listadePacientes)
        console.log("MUESTRA EN CONSOLA DE ARRAY DE OBJETO CON JSON")
        console.log(listadePacientesJson)
        localStorage.setItem("Lista de pacientes", listadePacientesJson);
        return listadePacientesJson;
}

let miFormulario = document.getElementById("formulario__ingresar__paciente");
miFormulario.addEventListener("submit", agregarPaciente);






const retirarPaciente = (e) =>{
    e.preventDefault();
    let formularioRetiro = e.target;
    let pacienteRetiro = formularioRetiro[0].value;
    console.log("Paciente a retirar : ")
    console.log(pacienteRetiro)
    let arrayNuevo = listadePacientes.filter(Paciente => Paciente.dni != pacienteRetiro);
    Swal.fire({
        title: `Correcto`,
        text: `Paciente  con exito`,
        icon: `success`,
        confirmButtonText: `Ok`,
        width: 300
    })
    console.log("IMPRIMIMOS EL ARRAY SIN EL DATO")
    console.log(arrayNuevo);
    listadePacientes = arrayNuevo;
    
    listadePacientesJson = JSON.stringify(listadePacientes)
    localStorage.setItem("Lista de pacientes", listadePacientesJson)
    console.log(listadePacientes)
    return listadePacientes;

}

let retiroPaciente = document.getElementById("formulario__retiro__paciente");
retiroPaciente.addEventListener("submit", retirarPaciente);
/*
const verPacientes = () => {
    alert("Se muestran pacientes en consola")
    console.log(listadePacientes)
    for(const pacienteIterado of listadePacientes){
        console.log(pacienteIterado) 
    }
}
*/

/*
const tomarTurno = (e) => {
    e.preventDefault();
    let tomarturnoNuevo = e.target;
    let pacienteBusqueda = tomarturnoNuevo[0].value;
    pacienteBusqueda = pacienteBusqueda.toUpperCase();
    if(pacienteBusqueda == "A" || pacienteBusqueda== "N" ){
        if (pacienteBusqueda == "A"){
            let dniPacienteBusqueda = parseInt(prompt("Ingrese el dni del paciente a asignar turno : "));
            let pacienteTurnoNuevo = listadePacientes.filter(Paciente => Paciente.dni == dniPacienteBusqueda);
            console.log("---------------------------")
            console.log(pacienteTurnoNuevo);
            console.log(pacienteTurnoNuevo[0].tipoTurno);
            let turnoNuevo = prompt("Ingrese la especialidad  del turno a asignar : (Ej : Traumatologia)");
            pacienteTurnoNuevo[0].tipoTurno = turnoNuevo;
            console.log(pacienteTurnoNuevo[0].tipoTurno);
            let profesionaNuevo = prompt("Ingrese el profesional con el que desea el turno : ")
            pacienteTurnoNuevo[0].profesional = profesionaNuevo;
            let horaNueva = prompt("Ingrese el horario del turno : ")
            pacienteTurnoNuevo[0].hora = horaNueva;
            alert("Turno agregado con exito");

        }else if(pacienteBusqueda == "N"){
            agregarPaciente();
            
        }
    }else{
        alert("Ingreso un dato incorrecto, intente nuevamente");
        tomarTurno();
    }
     
}
*/
/*
let tomarTurnoExistente= document.getElementById("formulario__tomar__turno__existente");
tomarTurnoExistente.addEventListener("submit", tomarTurno);
*/
const buscarpacienteContenedor = document.querySelector("#contenedor__tabla__paciente");
const buscarPaciente = (e) => {
    e.preventDefault();
    let formPacienteBusqueda = e.target;
    let pacienteBuscado = formPacienteBusqueda.children[1].value;
    console.log(pacienteBuscado)
    let resultadoPaciente = listadePacientes.some(Paciente => Paciente.dni == pacienteBuscado);
    if (resultadoPaciente == true){
        let muestraPaciente = listadePacientes.filter(Paciente => Paciente.dni == pacienteBuscado);
        console.log(muestraPaciente);
        buscarpacienteContenedor.innerHTML = `
        <table class="container-tabla">
            <tr>
                <th>Nombre Completo</th>
                <th>Dni</th>
                <th>Fecha de nacimiento</th>
                <th>Email</th>
                <th>Especialidad</th>
                <th>Profesional</th>
                <th>Horario</th>

            </tr>
            <tr>
                <td class="items-tabla" id="item-tabla-nombre">${muestraPaciente[0].nombreCompleto}</td>
                <td class="items-tabla" id="item-tabla-dni">${muestraPaciente[0].dni}</td>
                <td class="items-tabla" id="item-tabla-fecha-nacimiento">${muestraPaciente[0].fechaNacimiento}</td>
                <td class="items-tabla" id="item-tabla-mail">${muestraPaciente[0].mail}</td>
                <td class="items-tabla" id="item-tabla-especialidad">${muestraPaciente[0].tipoTurno}</td>
                <td class="items-tabla" id="item-tabla-profesional">${muestraPaciente[0].profesional}</td>
                <td class="items-tabla" id="item-tabla-hora">${muestraPaciente[0].hora}</td>
            </tr>

        </table>
        `
    }else{
        alert("El paciente no esta en la base de datos, vuelva a intentarlo");
        buscarPaciente();
    }
}

let busquedaPaciente = document.getElementById("formulario__busqueda__paciente");
busquedaPaciente.addEventListener("submit", buscarPaciente);

const cancelarTurno = (e) => {
    e.preventDefault();
    let pacienteACancelar = e.target;
    let dniPacienteACancelar = pacienteACancelar.children[1].value;
    pacienteACancelar = listadePacientes.filter(Paciente => Paciente.dni == dniPacienteACancelar);
    alert(`El paciente ${pacienteACancelar[0].nombreCompleto} tiene turno  en ${pacienteACancelar[0].tipoTurno} con el profesional ${pacienteACancelar[0].profesional}`)
    pacienteACancelar[0].tipoTurno = "";
    pacienteACancelar[0].profesional = "";
    pacienteACancelar[0].hora = "";
    alert("Su turno se cancelo con exito");
    console.log(pacienteACancelar[0].tipoTurno);
    console.log(pacienteACancelar);
    console.log(listadePacientes)
    listadePacientesJson = JSON.stringify(listadePacientes)
    localStorage.setItem("Lista de pacientes", listadePacientesJson)
}

let cancelarTurnoPaciente = document.getElementById("formulario__cancelacion__turno");
cancelarTurnoPaciente.addEventListener("submit", cancelarTurno);

const boton = document.getElementById("btn-covid");
const contenedor = document.querySelector("#contenedor__datos__covid");

const obtenerDatos = () => {
    fetch("https://disease.sh/v3/covid-19/countries/argentina?strict=true")
    .then(response => response.json())
    .then(resp => resp)
    .then(resp => {
        console.log(resp)
        contenedor.innerHTML  = `
        <div class="contenedor__info__covid">
            <h3 class = "titulo__info__covid">INFORMACION ACTUALIZADA COVID-19 ARGENTINA</h3>
            <ul class="lista__info__covid">
                <li>Activos : ${resp.active}</li>
                <li>Casos activos por millon de personas : ${resp.activePerOneMillion}</li>
                <li>Casos totales : ${resp.cases}</li>
                <li>Casos por millon de personas : ${resp.casesPerOneMillion}</li>
                <li>Casos criticos : ${resp.critical}</li>
                <li>Criticos por millon de personas : ${resp.criticalPerOneMillion}</li>
                <li>Fallecimietos totales : ${resp.deaths}</li>
                <li>Fallecimientos por millon de personas :${resp.deathsPerOneMillion}</li>
                <li>Poblacion : ${resp.population}</li>
                <li>Recuperados : ${resp.recovered}</li>
                <li>Recuperados por millon de personas : ${resp.recoveredPerOneMillion}</li>
                <li>Personas testeadas : ${resp.tests}</li>
                <li>Testeados por millon de personas : ${resp.testsPerOneMillion}</li>
                <li>Casos en el dia de hoy : ${resp.todayCases}</li>
                <li>Muertes en el dia de hoy : ${resp.todayDeaths}</li>
                <li>Recuperados en dia de hoy : ${resp.todayRecovered}</li>
            </ul>
        </div>
    `
    })
    
}


boton.onclick = () => {
    obtenerDatos();
}

/*
function menu(){
    let opcionMenu = prompt("Ingrese la opcion que desea a continuacion : Ingresar paciente (I) Retirar paciente(R) Ver pacientes (V) Salir(S) Buscar Paciente (B) Tomar un turno (T) Cancelar turno(C)");
    opcionMenu = opcionMenu.toUpperCase();
    if(opcionMenu == "I" || opcionMenu == "R" || opcionMenu == "V" || opcionMenu == "B" || opcionMenu == "T" || opcionMenu == "C"){
        if (opcionMenu == "I"){
            agregarPaciente();
        }else if (opcionMenu == "R"){
            retirarPaciente();
    
        }else if (opcionMenu == "V"){
            verPacientes();
        }else if(opcionMenu == "B"){
            buscarPaciente();
        }else if(opcionMenu == "T"){
            tomarTurno();
        }else if(opcionMenu == "C"){
            cancelarTurno();
        }
    }else{
        alert("Usted ingreso mal la opcion, vuelva a intentarlo");
        menu();
    }
     
}
    
menu();
*/