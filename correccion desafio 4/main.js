
/* SIMULADOR DE CALCULADORA DE PRECIO FINAL PARA EL USUARIO */

function precioMayorA2000(precio){

let precioMinimo = 2000
    if( precio >= precioMinimo  ){

        return true;
    }
    else{
        return false;
    
    }

}


function descuento( cupon ){

    let cuponRegistrado = "regina";

    if( cupon == cuponRegistrado ){

        return true;
    }
    else{
        return false;
    }


}


function mostrarPrecio(precio, cupon){

    if(precioMayorA2000(precio) && descuento(cupon)){
        return true;
    }
}

let precio = parseInt (prompt("Ingrese el precio de lista del producto;"));
let cupon = prompt("Ingrese su cupón de descuento:");

if(mostrarPrecio(precio, cupon)){
    alert("El precio a abonar -con descuento del 20%- es: $ " + (precio - precio *0.20));
}
else{
    alert("No aplican descuentos")
}