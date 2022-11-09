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

//

function selectOperacion(op){
    //si no se estan recibiendo datos y en consecuencia la informacion esta vacio no haga nada y salga de la operacion
    if (opeActual === '') return;
    //pero si hay un número vamos a realizar una operacion
    if (opeAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual ='';

}

//los datos que estamos recibiendo los vamos a convertir en numeros decicmales
function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
}


/* Como el input que creamos es de tipo text debemos convertir ese numero para eso utilizamos
toString y con el arguemnto num vamos a recibir el numero que el usuario esta dando click y 
concatenamos el próximo número al que le demos click esto sirve cuando son numeros de varias cifras*/

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

//aqui estamos limpiando nuestra calculadora iniciando en vacio las operaciones

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

// con esta funcion podremos ver el resultado de la operacion actual 


function actualizarDisplay(){
    result.value = opeActual;
}

//cuando actualizamos estamos llamando la funcion que escribimos para limpiar e iniciar en ceros
clear();
