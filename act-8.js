//ejercicio El mostrador - VERSION DE REFERENCIA

//------- PASO 1 Y 2 funciones normales -----
function calculartotal(precio, cantidad = 1){
    return precio * cantidad;
}

function espedidovalido(cantidad){
    return cantidad<0;
}

function formatearprecio(monto){
    return "$" + monto.toFixed(2);
}

console.log("------ PASO 1 Y 2 ------");
console.log(calculartotal(35,2));
console.log(calculartotal(35));
console.log(espedidovalido(0));
console.log(formatearprecio(35));

//------ PASO 3 las mismas funciones en flecha corta -------
console.log("------ Paso 3 --------")
const calculartotal2 = (precio,cantidad=1) => precio * cantidad;
const espedidovalido2 = (cantidad) => cantidad > 0;
const formatearprecio2 = (monto) => "$" + monto.toFixed(2);

console.log(calculartotal2(35,2), espedidovalido2(0), formatearprecio2(35));
console.log("EDUARDO SAUL FRAIRE BAEZ")