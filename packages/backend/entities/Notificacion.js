export default class Notificacion {
    constructor({ usuarioDestino, mensaje }) {
        if (!usuarioDestino) {
            throw new Error("El usuario destino es obligatorio");
        }

        if (!Object.values(TipoUsuario).includes(usuarioDestino.tipo)) {
            throw new Error(`Tipo de usuario inválido: ${usuarioDestino.tipo}`);
        }

        if (!mensaje || mensaje.trim() === "") {
            throw new Error("El mensaje de la notificación es obligatorio");
        }

        this.id = crypto.randomUUID();
        this.usuarioDestino = usuarioDestino;
        this.mensaje = mensaje;
        this.fechaAlta = new Date();
        this.leida = false;
    }

    marcarComoLeida() {
        this.leida = true;
        this.fechaLeida = new Date();
    }
}
