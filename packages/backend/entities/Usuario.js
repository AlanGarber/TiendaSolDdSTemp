import TipoUsuario from "../Enums/TipoUsuario.js";

export default class Usuario {
    constructor({ id, nombre, email, telefono, tipo, fechaAlta }) {
        if (!Object.values(TipoUsuario).includes(tipo)) {
            throw new Error("Tipo de usuario inválido");
        }
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.tipo = tipo;
        this.fechaAlta = fechaAlta || new Date();
    }
}