//para recorrer cada boton se crea un arreglo para recorrerlo y luego por cada recorrido agregar el evento clic

// se han declarado las variables como constantes porque no cambiara el valor de número 

const botonNumeros = document.getElementsByName('data-number');

const botonOpera = document.getElementsByName('data-opera');

//ponemos [0] porque nos genera un arreglo al cual solo vamos a usar un único dato por eso solo especificamos el indice 0

const botonIgual = document.getElementsByName('data-igual')[0];

const botonDelete = document.getElementsByName('data-delete')[0];

// se declara como variable porque cambiara de acuerdo con la operación que se vaya realizando

var result = document.getElementById('result');

/*luego de darle funcionalidad a cada boton vamos a implementar metodos la logica de como funcionara
para eso empeamos a crear algunas variables*/

var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

//agregamos el evento onclic para poder acceder a cada botón

//estamos identificando a partir del evento click a que botón tipo numero se invoca desde el la pagina

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        
    })

});

//identificamos a que botos tipo operación se esta invocando desde la pagina

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        
    })
});

//le estamos dando dos funciones al boton igual el cual calcular mostrara un resultado y actualizarDisplay mostrara un resultado nuevo

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();

});

//aqui estamos limpiando con el evento clear para limpiar la pantalla de los calculos realizados

botonDelete.addEventListener('click', function(){
    clear();
    acttualizarDisplay();
});

