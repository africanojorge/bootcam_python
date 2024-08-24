


menu_principal();

function menu_principal(){
    var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas");
    opcion = parseInt(opcion);
     switch (opcion) {
        case 1:
            return boletas_pagos()
        case 2:
            return Senal_llamadas()
        case 3:
            return ofertas_comerciales()
        case 4:
            return otras_consultas()
        default:
            alert("La opción ingresada es distinto a 1, 2, 3 o 4");
            if (opcion != 4) {
                 return  menu_principal()
            }
    }

}



//FUNCIONES


//FUNCIONES BOLETAS Y PAGOS
function boletas_pagos() {
    var resultado;
    resultado = prompt("Seleccione una Opcion: \n1.- Ver Boletas \n2.- Pagar Cuentas");
    resultado = parseInt(resultado);
    if (resultado == 1){
       alert("Haga clic aqui para descargar su boleta");
    }
    else {
       alert("Usted esta siendo transferido. espere por favor...");  
    } 

    return menu_principal();
   }

//FUNCIONES SEÑAL Y LLAMADOS   
function Senal_llamadas() {
    var resultado, solicitud;
    resultado = prompt("Seleccione una Opcion: \n1.- Problemas con la señal \n2.- Problemas con las llamadas");
    resultado = parseInt(resultado);
    if (resultado == 1){
       solicitud = prompt("A continuacion escriba su solicitud es.");
       alert("Estimado usuarios su solicitud es: " + solicitud)
    }
    else {
        solicitud = prompt("A continuacion escriba su solicitud es.");
        prompt("Estimado usuarios su solicitud es: " + solicitud)

    }

    return menu_principal();
   }  

//FUNCIONES OFERTAS COMERCIALES
function ofertas_comerciales() {
    var resultado;
    resultado = prompt("!Mentel tiene una ferta comercial acorde a tus necesidades! \nPara conocer mas informacion y ser asesorado personalmente por un \nejecutivo escribe'SI' y un ejecutivo te llamara. de lo contrario ingreso \n'NO'");
   if(resultado == "SI"){
    alert("Un ejecutivo se contactara con usted")
   }
    else{
        alert("Gracias por Preferir nuestros servicios")    
    }
return menu_principal();
   }


//FUNCIONES OTRAS CONSULTAS
function otras_consultas() {
    var solicitud;
    solicitud = prompt("A continuacion escriba su consulta: ");
    alert("Estimado usuarios su solicitud: " + solicitud + "Ha sido ingresada con exito. pronto \n sera contactado por uno de nuestros ejecutivos.")
return menu_principal();
   }