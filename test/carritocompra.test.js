const carritoCompra = require("./index");

describe("La clase carritoCompra", () =>{
    it("debería iniciar como un arreglo vacio", () =>{
        const carrito = new carritoCompra();
        expect(carrito.carrito).toEqual([]);
    })
    it("debería agregar los productos al carrito", ()=>{
        const carrito = new carritoCompra();
        const producto = { nombre: 'Producto1', precio: 10, cantidad: 2 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito.length).toBe(1);
    })
   it("debería calcular el total de los productos del carrito", () =>{
       const carrito = new carritoCompra();
       carrito.agregarProducto({ name: "Producto1", price: 10, quantity: 2 });
       carrito.agregarProducto({ name: "Producto2", price: 20, quantity: 2 });
       const total = carrito.calcularTotal();
       expect(total).toBe(60);
   }) 

   /* it("debería aplicar un descuento al total de la compra según el porcentaje especificado", () =>{
        const carrito = new carritoCompra();
    }); */
});