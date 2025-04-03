=========================
-- SEED.SQL COMPLETO Y ORDENADO
-- =========================
-- 1. Estados (necesarios para usuarios, tarjetas, productos, etc.)
INSERT INTO estados (id, codigo, descripcion) VALUES (1, 'activo', 'Estado activo');
INSERT INTO estados (id, codigo, descripcion) VALUES (2, 'inactivo', 'Estado inactivo');

-- 2. Roles
INSERT INTO roles (id, nombre) VALUES (1, 'ADMIN');
INSERT INTO roles (id, nombre) VALUES (2, 'USUARIO');

-- 3. Direcciones
INSERT INTO direcciones (id, calle, numero, comuna, ciudad, region, pais) VALUES
    (1, 'Av. Siempre Viva', '742', 'Springfield', 'Springfield', 'Región Metropolitana', 'Chile');

-- 4. Usuarios
INSERT INTO usuarios (
    id, uuid, nombres, apellidos, correo, telefono, documento_tipo, documento_numero,
    contrasena_hash, fecha_nacimiento, fecha_registro, estado_id
) VALUES (
             1, UUID(), 'Gabriel', 'Pérez', 'gabriel@example.com', '987654321',
             'CI', '12345678-9', 'hashedpassword123', '1990-01-01', CURRENT_TIMESTAMP, 1
         );

-- 5. RolesUsuario
INSERT INTO roles_usuario (id, usuario_id, rol_id) VALUES (1, 1, 1);

-- 6. Productos
INSERT INTO productos (
    id, usuario_id, tipo_producto, numero_producto, alias, moneda, saldo,
    limite_credito, estado_id, creado_en
) VALUES (
             1, 1, 'debito', '1111222233334444', 'Cuenta Corriente', 'CLP',
             100000, NULL, 1, CURRENT_TIMESTAMP
         );

-- 7. Tarjetas
INSERT INTO tarjetas (
    id, producto_id, numero_tarjeta, fecha_expiracion, cvv, tipo_tarjeta, estado_id
) VALUES (
             1, 1, '4444333322221111', '2030-12-31', '123', 'debito', 1
         );

-- 8. Transacciones
INSERT INTO transacciones (
    id, producto_id, tipo_transaccion, monto, descripcion, fecha, estado_id
) VALUES (
             1, 1, 'deposito', 100000, 'Depósito inicial', CURRENT_TIMESTAMP, 1
         );

-- 9. Puntos fidelización
INSERT INTO puntos_fidelizacion (
    usuario_id, puntos_acumulados, puntos_utilizados, fecha_actualizacion
) VALUES (
             1, 150, 50, CURRENT_TIMESTAMP
         );

-- 10. Historial puntos
INSERT INTO historial_puntos (
    usuario_id, tipo_operacion, puntos, descripcion, fecha
) VALUES
      (1, 'acumulado', 100, 'Registro por compra', CURRENT_TIMESTAMP),
      (1, 'usado', 50, 'Canje por beneficios', CURRENT_TIMESTAMP);

-- 11. Promociones
INSERT INTO promociones (
    nombre, descripcion, tipo, porcentaje, tope_monto,
    dias_semana, comercio, fecha_inicio, fecha_fin, activa
) VALUES (
             'Descuento lunes', '10% descuento lunes', 'descuento', 10.0, 5000,
             '{{LUNES}}', 'Supermercado X', CURRENT_DATE, CURRENT_DATE + 30, TRUE
         );

-- 12. promociones_usuarios
INSERT INTO promociones_usuarios (
    usuario_id, promocion_id, producto_id, transaccion_id,
    tipo_aplicacion, monto_aplicado, fecha_aplicacion
) VALUES (
             1, 1, 1, 1, 'descuento', 1000, CURRENT_TIMESTAMP
         );

-- 13. cuentas frecuentes
INSERT INTO cuentas_frecuentes (
    usuario_id, producto_favorito_id, alias, fecha_agregado, activa
) VALUES (
             1, 1, 'Mi cuenta frecuente', CURRENT_TIMESTAMP, TRUE
         );