import CambioEstadoPedido from "./CambioEstadoPedido.js";
import EstadoPedido from "../Enums/EstadoPedido.js";
import Moneda from "../Enums/Moneda.js";

export default class Pedido {
    constructor({ comprador, items, total, moneda, direccionEntrega, estado, fechaCreacion }) {
        // Validar moneda
        if (!Object.values(Moneda).includes(moneda)) {
            throw new Error(`Moneda inválida: ${moneda}`);
        }

        // Validar estado
        if (!Object.values(EstadoPedido).includes(estado)) {
            throw new Error(`Estado de pedido inválido: ${estado}`);
        }

        this.id = crypto.randomUUID();
        this.comprador = comprador;
        this.items = items || [];
        this.total = total || 0;
        this.moneda = moneda;
        this.direccionEntrega = direccionEntrega;
        this.estado = estado || EstadoPedido.PENDIENTE;
        this.fechaCreacion = fechaCreacion || new Date();
        this.historialEstados = [];
    }

    calcularTotal() {
        this.total = this.items.reduce((acumulador, item) =>
            acumulador + item.subtotal(),
            0);
        return this.total;
    }

    actualizarEstado(nuevoEstado, quien, motivo) {
        // Validar nuevo estado
        if (!Object.values(EstadoPedido).includes(nuevoEstado)) {
            throw new Error(`Estado de pedido inválido: ${nuevoEstado}`);
        }

        this.estado = nuevoEstado;

        const cambio = new CambioEstadoPedido({
            fecha: new Date(),
            estado: nuevoEstado,
            pedido: this,
            usuario: quien,
            motivo
        });

        this.historialEstados.push(cambio);
    }

    validarStock() {
        return this.items.every(item =>
            item.producto.estaDisponible(item.cantidad)
        );
    }
}
