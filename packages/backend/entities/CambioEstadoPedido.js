export default class CambioEstadoPedido {
    constructor({ fecha, estado, pedido, usuario, motivo }) {
        if (!Object.values(EstadoPedido).includes(estado)) {
            throw new Error(`Estado de pedido inválido: ${estado}`);
        }
        if (!estado) throw new Error("El estado es obligatorio");
        if (!pedido) throw new Error("El pedido es obligatorio");
        if (!usuario) throw new Error("El usuario que cambia el estado es obligatorio");

        this.fecha = fecha || new Date();
        this.estado = estado;
        this.pedido = pedido;
        this.usuario = usuario;
        this.motivo = motivo || "";
    }
}