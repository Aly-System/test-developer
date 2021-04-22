import React, { PureComponent, useEffect, useState } from "react";
import Barras from "./Barras";


const Grafico = ({ resultado, error, consultar, guardarConsultar }) => {
  const [fallo, guardarFallo] = useState(false);

  const { items } = resultado;

  if (!items) {
    return null;
  }

  let truncado = items.slice(0, 10);

//let datos = [];

    let datos = [
      {
        nombre: "Dato de prueba 1",
        seguidores: 5,
      },
      { nombre: "Dato de prueba 2", seguidores: 8 },
    ];

  const consultarAPI = async (login) => {
    const url = `https://api.github.com/users/${login}`;
    const resultado = await fetch(url);
    const respuesta = await resultado.json();

    if (respuesta.message !== undefined) {
      guardarFallo(true);
    }

    let nombre = respuesta.name;
    let seguidores = respuesta.followers;

    let dato = {
      nombre,
      seguidores,
    };
    datos.push(dato);
  };

  truncado.forEach((usuario) => {
    //Eliminar comentario para consultar API
    //Linea comentariada para evitar consultas innecesarias
    consultarAPI(usuario.login);
  });

    return <Barras datos={datos} fallo={fallo} />;


};

export default Grafico;
