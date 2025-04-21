# 🏦 BancoSimple

Este proyecto es una plataforma de gestión bancaria moderna desarrollada utilizando tecnologías actuales. El frontend está construido en **React** con **Vite**, mientras que el backend está desarrollado en **Java** utilizando **Spring Boot**. El sistema permite la gestión de usuarios, cuentas, tarjetas, transacciones y otros servicios bancarios esenciales.

## 🛠️ Tecnologías Utilizadas

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

## 📁 Estructura del Proyecto

El proyecto está dividido en dos partes principales:

1. **📱 cliente-app (Frontend)**:

   - Framework: **React** con **Vite**
   - Objetivo: Proporcionar una interfaz moderna y fluida para la interacción bancaria de los usuarios.

2. **🖥️ server-app (Backend)**:

   - Framework: **Spring Boot** en **Java**
   - Base de Datos: **PostgreSQL** alojada en la nube
   - Objetivo: Proveer la API REST para la gestión de usuarios, cuentas, tarjetas, transacciones, roles y autenticación segura.

### 📂 Estructura de Carpetas

- **cliente-app/**: Contiene todo el código fuente del frontend.
- **server-app/**: Contiene el código fuente del backend y configuración de la API.
- **documentacion/**: (opcional) Carpeta donde se almacena documentación técnica y de APIs (por ejemplo, Swagger).

## 🚀 Instalación y Ejecución

### Requisitos del Sistema

- **Node.js**: Versión 18.x o superior.
- **npm** o **yarn**: Gestores de paquetes para frontend.
- **Java**: JDK 17 o superior.
- **Maven**: Para construir y correr el backend.
- **PostgreSQL**: Base de datos relacional.

### Pasos de Instalación

1. **Clonar el Repositorio**

   ```bash
   git clone https://your-repository-url.git
   ```

2. **Instalar Dependencias**

   Frontend (`cliente-app/`):

   ```bash
   cd cliente-app
   npm install
   ```

   Backend (`server-app/`):

   ```bash
   cd server-app
   mvn clean install
   ```

3. **Configurar Variables de Entorno**

   En `server-app/`, crea un archivo `.env` o configura las variables de ambiente necesarias:

   ```
   DB_URL=
   DB_USERNAME=
   DB_PASSWORD=
   JWT_SECRET=
   JWT_EXPIRATION_MS=
   FRONTEND_ORIGIN=
   ```

   En `cliente-app/`, crea un archivo `.env`:

   ```
   VITE_API_URL=https://bancosimple.onrender.com/api
   ```

4. **Ejecutar el Proyecto**

   Frontend:

   ```bash
   cd cliente-app
   npm run dev
   ```

   Backend:

   ```bash
   cd server-app
   mvn spring-boot:run
   ```

## 🌐 Despliegue

- [![Vercel](https://img.shields.io/badge/Frontend%20deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

- [![Render](https://img.shields.io/badge/Backend%20deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://render.com/)

> 💡 **Nota:** Recuerda que Render utiliza un despliegue gratuito que apaga los servidores por inactividad. Esto puede ocasionar que el primer acceso tome alrededor de 1 minuto para reactivar el backend.

## 🛡️ Seguridad

- **Autenticación JWT**: Protección de rutas mediante tokens JSON Web Token.
- **CORS Configurado**: Permite solicitudes solo desde dominios autorizados.
- **Validación de Entradas**: Se aplican restricciones usando `jakarta.validation`.

## 📄 Documentación API

- Swagger disponible en el backend en:

  ```
  https://bancosimple.onrender.com/swagger-ui/index.html
  ```

(Explora y prueba los endpoints de la API de forma interactiva.)

---

# 🚀 ¡BancoSimple listo para operar!

Este proyecto es parte de un ecosistema de aplicaciones modernas enfocadas en la gestión segura y eficiente de operaciones bancarias.
