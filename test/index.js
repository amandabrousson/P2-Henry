/* Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios. */

class carritoCompra {
                    
    constructor(){  // constructor(): Inicializa el carrito como un array vacío.
        this.carrito = [];
    };

    agregarProducto(producto){ // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
        this.carrito.push(producto);
   };
   
   calcularTotal(){ //calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
        let total = 0; // donde se va a almacenar el valor total.

        this.carrito.forEach((producto) =>{
            total += producto.price * producto.quantity;
        });
        return total;
   }

   aplicarDescuento(porcentaje){ //aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
        const total= this.calcularTotal();  

        if (isNaN(porcentaje) || typeof total !== 'number') {
            throw new Error('Porcentaje o total no válidos');
          }        
                 
          const descuento = (total * porcentaje) / 100;
          const totalConDescuento = total - descuento;
        
          return totalConDescuento;
        };
        }

module.exports = carritoCompra;