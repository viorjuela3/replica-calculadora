//para recorrer cada boton se crea un arreglo para recorrerlo y luego por cada recorrido agregar el evento clic

// se han declarado las variables como constantes porque no cambiara el valor de número 

const botonNumeros = document.getElementsByName('data-number');

const botonOpera = document.getElementsByName('data-opera');

//ponemos [0] porque nos genera un arreglo al cual solo vamos a usar un único dato por eso solo especificamos el indice 0

const botonIgual = document.getElementsByName('data-igual')[0];

const botonDelete = document.getElementsByName('data-delete')[0];

// se declara como variable porque cambiara de acuerdo con la operación que se vaya realizando

var result = document.getElementById('result');

//agregamos el evento onclic para poder acceder a cada botón

//estamos identificando a partir del evento click a que botón se invoca desde el la pagina

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
        
    })

});

//

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        //selectOperacion(boton.innerText);
        alert(boton.innerText);
    })
});
