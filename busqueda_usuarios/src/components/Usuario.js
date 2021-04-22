import React from "react";
import { Link } from "react-router-dom";

const Usuario = ({ usuario }) => {
  return (

      <Link to={`/DetalleUsuario/${usuario.login}`} className="usuario-card">
        <div className="datos-usuario">
          <p>ID: {usuario.id}</p>
          <p>Usuario: {usuario.login}</p>
          <p>Node ID: {usuario.node_id}</p>
        </div>
        <img src={usuario.avatar_url} alt="Avatar usuario" />
      </Link>
   
  );
};

export default Usuario;
