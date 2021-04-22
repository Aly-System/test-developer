import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Descripcion from "./Descripcion";
import Error from "./Error";
import Header from "./Header";

const DetalleUsuario = () => {
  let { nombre } = useParams();
  const [error, guardarError] = useState(false);
  const [respuesta, guardarRespuesta] = useState({});
  const [consultar, guardarConsultar] = useState(true);



  useEffect(() => {

    const consultarAPI = async () => {
        if (consultar) {
          const url = `https://api.github.com/users/${nombre}`;
    
          const resultado = await fetch(url);
          const respuesta = await resultado.json();
    
          if (respuesta.message !== undefined) {
            guardarError(true);
          }
    
          console.log(respuesta);
          guardarRespuesta(respuesta);
          guardarConsultar(false);
        }
      };
      consultarAPI();

  });

  return (
    <div className="app">
      <Header titulo="Informacion del Usuario" />
      <div className="contenedor">
        {error ? (
          <Error mensaje="El usuario no fue encontrado" />
        ) : (
          <Descripcion respuesta={respuesta} />
        )}
      </div>
    </div>
  );
};

export default DetalleUsuario;
