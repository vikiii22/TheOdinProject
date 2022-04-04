const insertar = document.querySelector('input');
const btnAnyadir = document.querySelector('.btnAnyadir');
const sinTareas = document.querySelector('.sin-tareas');
const contenedorTareas = document.querySelector('.contenedor-tareas');
var tarea="";

const anyadirTarea = (e) => {
    e.preventDefault();
    tarea = document.createElement('div');
    if (insertar.value == " ") {

    } else {
        tarea.textContent = insertar.value;
        tarea.addEventListener('click', cambiarEstado);
        contenedorTareas.prepend(tarea);
    }

    if(contenedorTareas!=" "){
        sinTareas.style.visibility='hidden';
    }
}

const cambiarEstado = () => {
    tarea.style.color='black';
    tarea.style.fontSize='2em'
    tarea.style.background='red';
    tarea.style.textDecoration='line-through';
}

btnAnyadir.addEventListener('click', anyadirTarea);