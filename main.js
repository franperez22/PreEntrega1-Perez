const productos = [
{ nombre: "Harina", precio: 50 },
{ nombre: "Galletitas", precio: 100 },
{ nombre: "Cerveza", precio: 150 },
{ nombre: "Leche", precio: 200 },
{ nombre: "Gaseosa", precio: 250 },
];
let carrito = []
    
let seleccion = prompt("Hola! Desea comprar algun producto?. Por favor responda con Si o con No. Muchas Gracias.")

while(seleccion != "si" && seleccion != "no"){
alert ("Por favor ingresa si o no")
seleccion = prompt ("Hola! Desea comprar algun producto?. Porfavor responda con Si o con No. Muchas Gracias.")
}

if(seleccion == "si"){
alert ("A continuación nuestra lista de prodcutos")
let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$");
alert(todoslosProductos.join(" - "))
    }else if (seleccion == "no"){
        alert("Gracias por venir!!")
    }

while (seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

if(producto == "harina" || producto == "galletitas" || producto == "cerveza" || producto == "leche" || producto == "gaseosa"){
    switch(producto) {
        case "Harina":
            precio = 50;
            break;
        case "Galletitas":
            precio = 100;
            break;
        case "Cerveza":
            precio = 150;
            break;
        case "Leche":
            precio = 200;
            break;
        case "Gaseosa":
            precio = 250;
            break;    
            default:
            break;    
        }
       let unidades = parseInt (prompt("Cuantas unidades quiere llevar?")) 
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert ("No tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades} Total a pagar por producto 
            ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
} 

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades,0)
console.log(`El total a pagar por su compra es: ${total}`)
