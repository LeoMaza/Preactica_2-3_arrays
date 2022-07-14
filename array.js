

// creando el array base
let stockDeAlacena = ["Sal fina", "Sal gruesa", "Pimienta", "Oregano", "Comino", "Canela", "Aceite de oliva", "Aceite"];


function mostrarStockDeAlacena(vector) {
    console.log("------Mostrando-----");
    console.log("Tamaño actual del vector: ", vector.length, "\n");

    //iteracion que automatiza los valores impresos en consola
    for (let i = 0; i < (vector.length); i++) {
        console.log(`Producto N°${i + 1}: `, vector[i]);
    }

    console.log("---------Fin--------");
}


mostrarStockDeAlacena(stockDeAlacena);

//Actualizacion de valores de elemento 3 y 7
stockDeAlacena[3] = "Mayonesa";
stockDeAlacena[7] = "Aceitunas";

mostrarStockDeAlacena(stockDeAlacena);

//con .push se agrega un elemento al final del array y con .unshift() se agrega un elemento al inicio .
stockDeAlacena.push("Miel");
stockDeAlacena.unshift("Dulce de leche");

mostrarStockDeAlacena(stockDeAlacena);

// con .splice() elimino 3 productos
stockDeAlacena.splice(5, 1);
stockDeAlacena.splice(3, 1);
stockDeAlacena.splice(2, 1);

mostrarStockDeAlacena(stockDeAlacena);

// agrego 3 elementos con .splice(posicion,numero de elementos a borrar)

stockDeAlacena.splice(3, 0, "Pringles");
stockDeAlacena.splice(5, 0, "Agua mineral");
stockDeAlacena.splice(3, 0, "Terma");

mostrarStockDeAlacena(stockDeAlacena);

// Intercambio la posisicon de Pringles por Termas usando .splice(posicion,borrar,nuevo elemento)
stockDeAlacena.splice(3, 1, "Pringles");
stockDeAlacena.splice(4, 1, "Terma");
// Intercambio la posisicon de Miel por Aceite de oliva usando .splice(posicion,borrar,nuevo elemento)
stockDeAlacena.splice(7, 1, "Miel");
stockDeAlacena.splice(9, 1, "Aceite de oliva");

mostrarStockDeAlacena(stockDeAlacena);
