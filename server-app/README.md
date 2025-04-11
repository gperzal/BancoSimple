# 📦 Arquitectura de Carpetas - Proyecto BancoSimple

Este proyecto está organizado según principios de **DDD (Domain-Driven Design)** y buenas prácticas de modularización en Spring Boot. Cada dominio del negocio tiene su propio paquete y está desacoplado de otros para mejorar la mantenibilidad, la escalabilidad y la legibilidad del código.

---

## 🧩 Estructura de Paquetes

```
com.bancosimple.backend
├── config                # Configuración general del proyecto (seguridad, beans, CORS, etc.)
├── common                # Clases compartidas (utilidades, validadores, excepciones comunes, etc.)
├── cuenta_frecuente
├── direccion
├── estado
├── historial_puntos
├── log_actividad
├── log_respaldo
├── producto
├── promocion
├── promocion_usuario
├── puntos_fidelizacion
├── rol
├── rol_usuario
├── tarjeta
├── transaccion
└── usuario
```

---

## 🧱 Estructura Interna por Módulo

Cada módulo contiene:

- `controller` → Maneja las peticiones HTTP (REST API)
- `service` → Contiene la lógica de negocio
- `repository` → Acceso a la base de datos (JPA Repositories)
- `model` → Entidades JPA
- `dto` → Data Transfer Objects
- `mapper` → Conversión entre Model ↔ DTO
- `security` → Reglas o filtros de seguridad específicos del módulo (si aplica)
- `shared` → Clases reutilizables dentro del mismo módulo
- `exception` → Excepciones personalizadas

---

## 🔐 Seguridad

Toda la lógica de autenticación/autorización con JWT o roles se puede ubicar en `config` si es general o en `usuario/security` si es específica del módulo de usuarios.

---

## 🧪 Pruebas

Los tests se encuentran en la carpeta:
```
src/test/java/com/bancosimple/backend/...
```
Y pueden seguir la misma estructura de los paquetes de `main`.

---

## ✅ Ventajas

- Alta cohesión por dominio
- Bajo acoplamiento entre módulos
- Mejor escalabilidad para equipos grandes
- Ideal para extender funcionalidades por dominio

---

> Estructura basada en experiencia práctica y alineada con las recomendaciones de Spring y DDD.
