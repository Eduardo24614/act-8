//Ejercicio - El menu vivo - Vercion de referencia

//------ PASO 1 --------

const productos = [
    {id:crypto.randomUUID(), nombre:"Molletes",precio:30, categoria:"comida", disponible:true},
    {id:crypto.randomUUID(), nombre:"jugo de naranja", precio:18, categoria:"bebida", disponible:true},
    {id:crypto.randomUUID(), nombre:"gelatina", precio:12, categoria:"postre", disponible:false}
];


//------ PASO 2 Y 3 --- LEER(read) -------
const listar = ()=> productos;

const listarDisplonibles = () => productos.filter((p) => p.disponible);

console.log(listar());

//-------- PASO 4 Buscar uno --------
const obtenerPorid = (id) => productos.find(p => p.id === id);

//------- PASO 5: Crear --------
function crear(datos){
    const nuevo = {id:crypto.randomUUID(), disponible:true, ...datos};
    productos.push(nuevo);
    return nuevo;
};

//------ Paso 6 Actualizar --------
function actualizar(id, cambios){
    const i = productos.findIndex((p) => p.id === id);
    if (1 === -1) return null;
    productos[1] = {...productos[1], ...cambios};
    return productos[1];
};

//------ PASO 7 Borrado logico -------
function eliminar(id){
    const producto = obtenerPorid(id);
    if(!producto) return null;
    producto.disponible = false;
    return producto;
}

// Razon: los pedidos viejos guardan el id de su porducto, el historial queda apuntando a algo que ya no existe
// y el corte del dia se rompe, es mejor marcarlo como no disponible para sacarlo del menu sin destruir la informacion, ademas se puede revertir

// ------ Paso 8 Total con reduce -------
function calcularTotal(pedido){
    return pedido.items.reduce((suma, item) => suma + item.precio + item. cantidad, 0);
};

//------- PASO 9 ya existe? -----
const existeNombre = (nombre) => productos.some((p) => p.nombre.tolowercase() === nombre.tolowercase());

const buscarPorTexto = (texto) => productos.filter((p) => p.nombre.tolowercase(). includes(texto.tolowercase()));

//--------- PASO 10 Pruebas ------------
console.log("----------- LISTAR -----------");
console.log(listar());
console.log("---------- LISTAR DISPONIBLES ----------");
console.log(listarDisponibles().map((p) => p.nombre));

console.log("--------- CREAR ----------");
const creado = crear({nombre:"Sincronizada", precio:32, categoria:"comida"});
console.log(creado)
console.log(listar());
console.log("EDUARDO SAUL FRAIRE BAEZ")


console.log("---------------- OBTENERPorid------------------")
console.log(obtenerPorid(creado.id).nombre);

console.log("-------------ACTUALIZAR------------------")
console.log(actualizar(creado.id, {precio:35}));

console.log("------------------eliminado (logico)-------------")
console.log(eliminar(creado.id). disponible);
console.log("disponibles ahora: ", listarDisponibles(). length);

console.log("----------------calcular total------------------")
const pedido = {
    folio:"PR-0341",
    items: [
        {nombre:"Molletes", precio:30, cantidad:2},
        {nombre:"jugo", precio:18, cantidad:1}
    ]
};
console.log(calcularTotal(pedido));

console.log("----------------busquedaPorNombre------------")
console.log(existeNombre("gelatina"), existeNombre("pizza"));

console.log("-----------------Busqueda por texto-------------")
console.log(buscarportexto("ju").map((p) => p.nombre));

