// variables
const btnEnviar= document.querySelector('#enviar');
const formulario=document.querySelector('#enviar-mail');
 // validacon con expresion regular
 const er= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// variables para campos 
const email= document.querySelector('#email');
const asunto= document.querySelector('#asunto');
const mensaje= document.querySelector('#mensaje');


eventListeners();
function eventListeners(){
    // cuando la app arranca
    document.addEventListener('DOMContentLoaded',iniciarApp);
    
    // campos del formulario 
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);


}

// Funciones
function iniciarApp(){
    // console.log('iniciando...')
    btnEnviar.disabled= true; //Deshabilitando boton enviar 
    btnEnviar.classList.add('cursor-not-allowed','opacity-50')
}

//Validacion de formulario

function validarFormulario(e){
    // console.log('validando...')
    // console.log(e.target.type); sirve para mirar el tipo de entrada 
    if(e.target.value.length>0){
        //Eliminacion de errores...
        const error = document.querySelector('p.error');
        // console.log(error)  
        if(error !== null){
            error.remove();
        }
       
        // console.log('si hay algo')
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
       
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError(' Todos los campos son obligatorios ');
    }
    // validacion de campo email 
    if(e.target.type === 'email'){
        // console.log('es email, hay que validarlo diferente'); 
        //  la variable fue declarada de forma goblal
        // es una validación regular 
        // const resultado= e.target.value.indexOf('@'); 
        // console.log(resultado);
        if(er.test(e.target.value)){
          //Eliminacion de errores...
        const error = document.querySelector('p.error'); //etiqueta P  que tengla error
        if(error !== null){
            error.remove();
        }
        // console.log('si hay algo')
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
        } else{
            // console.log('Email no valido');
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError(' Email no valido ');
        }
    }

    if(er.test(e.target.value) && asunto.value !=='' && mensaje.value !==''){
        console.log('pasate la validacion');
    }else{
        console.log('Hay campos validar');
    }
}

function mostrarError(mensaje){
    // console.log('error...') voy validando 
    const mensajeError=document.createElement('p');
    mensajeError.textContent=mensaje;
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');
   
    // error clase, extra para controlar que se repita el mensaje 'Todos los campos son obligatorios'
    const errores= document.querySelectorAll('.error');
    if(errores.length === 0){
        // formulario.appendChild(mensajeError); // se muestra abajo
        formulario.insertBefore(mensajeError, document.querySelector('.mb-10')); // se muestra arriba 
    }

}