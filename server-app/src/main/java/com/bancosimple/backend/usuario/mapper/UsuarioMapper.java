package com.bancosimple.backend.usuario.mapper;

import com.bancosimple.backend.usuario.dto.UsuarioDTO;
import com.bancosimple.backend.usuario.model.Usuario;

public class UsuarioMapper {

    public static UsuarioDTO toDTO(Usuario usuario) {
        UsuarioDTO dto = new UsuarioDTO();
        dto.setId(usuario.getId());
        dto.setUuid(usuario.getUuid());
        dto.setNombres(usuario.getNombres());
        dto.setApellidos(usuario.getApellidos());
        dto.setCorreo(usuario.getCorreo());
        dto.setTelefono(usuario.getTelefono());
        dto.setDocumentoTipo(usuario.getDocumentoTipo());
        dto.setDocumentoNumero(usuario.getDocumentoNumero());
        dto.setContrasenaHash(usuario.getContrasenaHash());
        dto.setFechaNacimiento(usuario.getFechaNacimiento());
        dto.setFechaRegistro(usuario.getFechaRegistro());
        dto.setEstadoId(usuario.getEstadoId());
        return dto;
    }

    public static Usuario toEntity(UsuarioDTO dto) {
        Usuario usuario = new Usuario();
        usuario.setId(dto.getId());
        usuario.setUuid(dto.getUuid());
        usuario.setNombres(dto.getNombres());
        usuario.setApellidos(dto.getApellidos());
        usuario.setCorreo(dto.getCorreo());
        usuario.setTelefono(dto.getTelefono());
        usuario.setDocumentoTipo(dto.getDocumentoTipo());
        usuario.setDocumentoNumero(dto.getDocumentoNumero());
        usuario.setContrasenaHash(dto.getContrasenaHash());
        usuario.setFechaNacimiento(dto.getFechaNacimiento());
        usuario.setFechaRegistro(dto.getFechaRegistro());
        usuario.setEstadoId(dto.getEstadoId());
        return usuario;
    }
}
