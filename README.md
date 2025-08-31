Este repositorio es la base para el Trabajo Práctico de la materia **Desarrollo de Software (DDS)** de la carrera **Ingeniería en Sistemas de Información** de la **UTN FRBA**. Se trata de un **monorepo** que integra una aplicación frontend con Create React App y un backend con Express, facilitando el desarrollo y la gestión de ambos proyectos en un único entorno.

## 📦 Estructura del Proyecto

El monorepo está organizado de la siguiente manera:

```
.
├── packages/
│   ├── backend/        # Servidor Express.js
│   └── frontend/       # Aplicación React (Create React App)
├── package.json        # Configuración del monorepo (root)
├── README.md           # Este archivo
└── .env.example        # Ejemplo de configuración de variables de entorno
```

## ⚙️ Paquetes

Este monorepo utiliza **`npm workspaces`** para gestionar los diferentes paquetes.

### Backend (`packages/backend`)

El backend está construido con Express.js y utiliza las siguientes dependencias:

- **`express`**: El framework web para Node.js, utilizado para construir la API.
- **`cors`**: Middleware para Express que habilita Cross-Origin Resource Sharing (CORS), necesario para permitir que el frontend acceda al backend desde un origen diferente.
- **`dotenv`**: Carga variables de entorno desde un archivo `.env` en `process.env`. Es crucial para configurar el puerto del servidor y los orígenes permitidos.

La idea es dar lo mínimo para levantar el servidor, y que durante el desarrollo del TP se vayan agregando las dependencias necesarias.

### Frontend (`packages/frontend`)

El frontend es una aplicación de React generada con Create React App.

## 🚀 Inicio Rápido

Seguí estos pasos para poner en marcha el proyecto:

### 1\. Instalación de Dependencias

Desde la raíz del monorepo, ejecutá:

```bash
npm install
```

Esto instalará todas las dependencias para la raíz y para los paquetes `frontend` y `backend`.

### 2\. Ejecución de la Aplicación

Podés iniciar el frontend y el backend por separado o ambos a la vez:

#### Ejecutar el Backend

```bash
npm run start:backend
```

Para el desarrollo con reinicio automático:

```bash
npm run dev:backend
```

#### Ejecutar el Frontend

```bash
npm run start:frontend
```

#### Ejecutar Ambos (Desarrollo)

Para iniciar el backend en modo `dev` y el frontend simultáneamente, usá:

```bash
npm run start:dev
```

# Gestion de ramas

## Ramas principales

| Rama   | Propósito                                              | Normas                                                                 |
|--------|--------------------------------------------------------|------------------------------------------------------------------------|
| `main` | Contiene la versión estable en producción              | No hacer push directo. Merge solo desde Pull Requests aprobados.    |
| `develop` | Rama de desarrollo  | Se mergean las features completadas y testeadas.                      |

---

## Ramas soporte

| Rama                | Propósito                                               | Ejemplo                       |
|---------------------|--------------------------------------------------------|-------------------------------|
| `feature/<nombre>`  | Desarrollo de nuevas funcionalidades                   | `feature/notificaciones`      |
---

## Convencion de commits

- **Features:** `feature/<funcionalidad>` → ej: `feature/health-check`
- **Release:** `release/<entrega>` → ej: `release/1`

**Mantener los nombres cortos y claros**
