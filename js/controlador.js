/*
--------------------------------------------------

  GENERADOR DE TARJETAS DE CREDITO / DEBITO

--------------------------------------------------
-> La base utilizada es el formato de tarjetas
  AMEX / AMERICAN EXPRESS.

-> Puede ser cambiado según las necesidades 

-> Autor: Daniel Rivera 
-> Github: https://github.com/DanielRivera03
                © 2021

--------------------------------------------------
  GRACIAS POR DESCARGAR ESTE PROYECTO :) ♥️
--------------------------------------------------


*******************************************************************************
*******************************************************************************
>>> NUEVA ACTUALIZACION <<<
-> VALIDACION DE INPUT INGRESO DE DATOS
-> GENERAR AUTOMATICAMENTE CODIGO DE SEGURIDAD AL INGRESAR UN SOLO DIGITO
-> MENSAJES DE ALERTAS PERSONALIZADAS
-> BLOQUEO TOTAL DE CARACTERES NO SOLICITADOS
*******************************************************************************
*******************************************************************************


*/

// VARIABLES GLOBALES
const TarjetaClientes = document.querySelector('#tarjeta'), // TODO TARJETA CONTENEDOR
IngresoDatos = document.querySelector('#datoscliente'), // TODO DATOS CLIENTES FORMULARIO
NumeroUnicoTarjeta = document.querySelector('#tarjeta .numeros'), // NUMERO UNICO
TitularTarjeta = document.querySelector('#tarjeta .nombre'), // TITULAR
MiembroDesdeAnio = document.querySelector('#tarjeta .miembro'), // MIEMBRO {AÑO}
CodigoSeguridad = document.querySelector('#tarjeta .codigo'); // CCV -> CODIGO DE SEGURIDAD

// VALIDACION DE FORMULARIO INGRESO DE DATOS
function ValidarTarjeta(){
	// VARIABLES GENERALES DE VALIDACION
	// TITULAR DE TARJETA
	var TitularUnicoTarjeta = document.getElementById("nombrecliente").value; 
	// NUMERO UNICO DE TARJETA
	var NumeroTarjetaUnico = document.getElementById("numerocliente").value;
	// CODIGO DE SEGURIDAD UNICO DE TARJETA -> CCV
	var CodigoUnicoTarjeta = document.getElementById("codigocliente").value;
	// MIEMBRO DESDE -> ULTIMOS DOS DÍGITOS
	var MiembroTarjeta = document.getElementById("miembrocliente").value;
	/*
		--> VALIDACION ESTRICTAMENTE CAMPOS VACIOS
	*/
	// TITULAR DE TARJETA
	if(TitularUnicoTarjeta==""){
		AlertaUsuarioMostrar("Error","Lo sentimos, debe ingresar un titular único de tarjeta","error");
		return false;
	// NUMERO DE TARJETA
	}else if(NumeroTarjetaUnico==""){
		AlertaUsuarioMostrar("Error","Lo sentimos, debe ingresar un número único de tarjeta","error");
		return false;
	// CODIGO DE SEGURIDAD DE TARJETA
	}else if(CodigoUnicoTarjeta==""){
		AlertaUsuarioMostrar("Error","Lo sentimos, debe ingresar un código de seguridad único de tarjeta","error");
		return false;
	// AÑO DE AFILIACION TITULAR DE TARJETA
	}else if(MiembroTarjeta==""){
		AlertaUsuarioMostrar("Error","Lo sentimos, debe ingresar los últimos dos dígitos (año) de asociación","error");
		return false;
	}else{
		// SI CUMPLE CON TODOS LOS REQUISITOS -> IMPRIMIR COMPROBANTE
		window.print();
		/*
			-> AL EJECUTAR ESTA PETICION, SE TOMAN AUTOMATICAMENTE LAS REGLAS DE
			ESTILOS DEDICADAS EXCLUSIVAMENTE A LA IMPRESION DE COMPROBANTES
		*/
	}
}


/*
	--> VALIDAR CUMPLIMIENTO NUMERO MINIMO DE CARACTERES
				CODIGO DE SEGURIDAD, NUMERO DE TARJETA Y FECHA DE ASOCIACION
*/

// NUMERO UNICO DE TARJETA
function ValidarNumeroTarjeta(valor) {
  if (valor.value.length < 16) {
    AlertaUsuarioMostrar("Error","Lo sentimos, debe ingresar los 15 dígitos de la tarjeta","error");
    return false;
  }
}

// CODIGO DE SEGURIDAD UNICO DE TARJETA
function ValidarCodigoTarjetaUnico(valorcodigo){
	/*
		ESTE CODIGO SE GENERARA DE MANERA AUTOMATICA
		EL USUARIO UNICAMENTE DEBE INGRESAR UN NUMERO CUALQUIERA
	*/
	if(valorcodigo.value.length < 5){
		// CALCULO DE CODIGO DE SEGURIDAD AUTOMATICO
		var Minimo=1000; var Maximo=9999; 
		var Clave =Math.floor(Math.random() * (+Maximo - +Minimo)) + +Minimo;
		CodigoSeguridad.textContent = Clave; // IMPRIME EN TARJETA
		document.getElementById('codigocliente').value = Clave; // IMPRIME EN FORMULARIO
	}
}

/*
	--> CONTROLADOR DINAMICO
			DATOS GENERALES DE TARJETA {TODOS LOS DATOS}


			IMPORTANTE:

			LA VARIABLE << ValorPeticion >> ES LA QUE CONTROLA TODOS LOS DATOS
			DINAMICOS INGRESADOS POR LOS USUARIOS EN EL FORMULARIO
*/

// NOMBRE DINAMICO TARJETAHABIENTE
IngresoDatos.nombrecliente.addEventListener('keyup', (e) => {
	let ValorPeticion = e.target.value;
	IngresoDatos.nombrecliente.value = ValorPeticion.replace(/[0-9]/g, '');
	TitularTarjeta.textContent = ValorPeticion;
	if(ValorPeticion == ''){
		TitularTarjeta.textContent = 'LOREM IPSUM DOLOR';
	}
});

// NUMERO DINAMICO TARJETAHABIENTES
IngresoDatos.numerocliente.addEventListener('keyup', (e) => {
	let ValorPeticion = e.target.value;
	IngresoDatos.numerocliente.value = ValorPeticion
	// NO ACEPTAR CARACTERES NO SOLICITADOS
	.replace(/\s/g, '')
	.replace(/\D/g, '')
	.replace(/([0-9]{4})/g,'$1 ',)
	// LIMPIEZA
	.trim();
	NumeroUnicoTarjeta.textContent = ValorPeticion;
	if(ValorPeticion == ''){
		NumeroUnicoTarjeta.textContent = '3759 876543 2100';
	}	
});

// CODIGO DE SEGURIDAD TARJETAHABIENTE
IngresoDatos.codigocliente.addEventListener('keyup', () => {
	IngresoDatos.codigocliente.value = IngresoDatos.codigocliente.value
	// NO ACEPTAR CARACTERES NO SOLICITADOS
	.replace(/\s/g, '')
	.replace(/\D/g, '');
	CodigoSeguridad.textContent = IngresoDatos.codigocliente.value;
});

// MIEMBRO DESDE {AÑO} TARJETAHABIENTE
IngresoDatos.miembrocliente.addEventListener('keyup', () => {
	IngresoDatos.miembrocliente.value = IngresoDatos.miembrocliente.value
	// NO ACEPTAR CARACTERES NO SOLICITADOS
	.replace(/\s/g, '')
	.replace(/\D/g, '');
	desde.textContent = IngresoDatos.miembrocliente.value;
	// COMPROBAR AÑO DE ASOCIACION
	if(desde.textContent>23){
		desde.textContent = 23; // MODIFICAR SEGUN AÑO EN CUESTION
	}
});

// FUNCION PARA MOSTRAR ALERTAS A USUARIOS
// FUENTE SEGUN LO APLICADO DENTRO DEL BODY DE ESTE PROYECTO, O BIEN
// PUEDE SER CAMBIADO SI ASI SE DESEA
function AlertaUsuarioMostrar(titulo, descripcion, icono) {
    Swal.fire(
        titulo, // ENCABEZADO 
        descripcion, // CUERPO
        icono // ICONO DE ALERTA
    );
}
