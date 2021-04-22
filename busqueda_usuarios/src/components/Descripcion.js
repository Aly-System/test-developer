import React from "react";

const Descripcion = ({ respuesta }) => {


  //return null;

  if (Object.keys(respuesta).length === 0) {
      console.log("esta vacio");
    return null;
  }

  console.log(respuesta);

  let creado = respuesta.created_at.toString();
  let actualizado = respuesta.updated_at.toString();

  let creadosplit = creado.split("T")[0];
  let actualizadosplit = actualizado.split("T")[0];

  return (
    <div className="contenedor descipcion">
      <div className="basicos">
        <img src={respuesta.avatar_url} alt="" />
        <div>
          <p>{respuesta.name}</p>
        </div>
      </div>

      <div className="detalles">
        <div className="arriba">
          <p>Seguidores: {respuesta.followers}</p>
          <p>Siguiendo: {respuesta.following}</p>
          <p>Repositorios Publicos: {respuesta.public_repos}</p>
        </div>
        <div className="abajo">
          <p>Creado: {creadosplit}</p>
          <p>Actualizado: {actualizadosplit}</p>
        </div>
      </div>
    </div>
  );
};

export default Descripcion;
