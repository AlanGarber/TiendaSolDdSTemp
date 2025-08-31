class Producto {
    constructor({ id, vendedor, titulo, descripcion, categorias, precio, moneda, modelo, stock, fotos, activo }) {
        if (!Object.values(Moneda).includes(moneda)) {
            throw new Error("Moneda inválida");
        }
        this.id = id;
        this.vendedor = vendedor;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.categorias = categorias || [];
        this.precio = precio;
        this.moneda = moneda;
        this.modelo = modelo;
        this.stock = stock || 0;
        this.fotos = fotos || [];
        this.activo = activo !== false;
    }

    estaDisponible(cantidad) {
        return this.stock >= cantidad && this.activo;
    }

    reducirStock(cantidad) {
        if (!this.estaDisponible(cantidad)) throw new Error("Stock insuficiente");
        this.stock -= cantidad;
    }

    aumentarStock(cantidad) {
        this.stock += cantidad;
    }
}

class Categoria {
    constructor({ nombre }) {
        this.nombre = nombre;
    }
}



export default [Producto, Categoria];