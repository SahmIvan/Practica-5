let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");

let btnGuardar = document.getElementById("btnGuardar");
let listaTareas = document.getElementById("listaTareas");


let tareas = [];

let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
    });
    console.log(tareas);
};

let cerrarModal = () => { //"data-bs-dismiss" es lo que hace originalmente el boton cerrar en el codigo de html, y con esto se manipula desde js
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let resetearFormulario = () => {
    nombre.value = '';
    fecha.value = '';
    descripcion.valule = '';
}

let mostrarTareas = () => {

    listaTareas.innerHTML = "Tarea";
   
    
    tareas.forEach((tarea,indice)=>{ //For each es para mandar a llamar una funcion arrow
        listaTareas.innerHTML += `
    <div class='row' id=${indice}>
            <div class='col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-3 border p-3 text-center'>
                <button class='btn btn-danger' onClick ="borrarTarea(this,${indice});">
                <i class="bi bi-trash"></i>Borrar</button>
            </div> 
    </div> 
            `; 
            
        
            
            //This es porque es un elemento de tareas y se manda llamar ese especificamente
            //"Template Strings" Es una funcion especial para usar strings en JavaScript
  
        
    });

    
    
    }
formulario.addEventListener("submit", (e) => { //Esto es lo que hara cuando se presionen o sucedan ciertos acontecimientos especificos
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    resetearFormulario();
    mostrarTareas();
});