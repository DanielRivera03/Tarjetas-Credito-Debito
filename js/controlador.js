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
*/

// VARIABLES
const TarjetaClientes = document.querySelector('#tarjeta'), // TODO TARJETA CONTENEDOR
IngresoDatos = document.querySelector('#datoscliente'), // TODO DATOS CLIENTES FORMULARIO
NumeroUnicoTarjeta = document.querySelector('#tarjeta .numeros'), // NUMERO UNICO
TitularTarjeta = document.querySelector('#tarjeta .nombre'), // TITULAR
MiembroDesdeAnio = document.querySelector('#tarjeta .miembro'), // MIEMBRO {AÑO}
CodigoSeguridad = document.querySelector('#tarjeta .codigo'); // CCV -> CODIGO DE SEGURIDAD

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
	.replace(/\s/g, '')
	.replace(/\D/g, '')
	.replace(/([0-9]{4})/g,'$1 ',)
	.trim();
	NumeroUnicoTarjeta.textContent = ValorPeticion;

	if(ValorPeticion == ''){
		NumeroUnicoTarjeta.textContent = '3759 876543 2100';
	}	
});

// CODIGO DE SEGURIDAD TARJETAHABIENTE
IngresoDatos.codigocliente.addEventListener('keyup', () => {
	IngresoDatos.codigocliente.value = IngresoDatos.codigocliente.value
	.replace(/\s/g, '')
	.replace(/\D/g, '');

	CodigoSeguridad.textContent = IngresoDatos.codigocliente.value;
});

// MIEMBRO DESDE {AÑO} TARJETAHABIENTE
IngresoDatos.miembrocliente.addEventListener('keyup', () => {
	IngresoDatos.miembrocliente.value = IngresoDatos.miembrocliente.value
	.replace(/\s/g, '')
	.replace(/\D/g, '');
	desde.textContent = IngresoDatos.miembrocliente.value;
	// COMPROBAR AÑO DE ASOCIACION
	if(desde.textContent>21){
		desde.textContent = 21; // MODIFICAR SEGUN AÑO EN CUESTION
	}
});