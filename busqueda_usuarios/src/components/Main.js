import React from "react";
import { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resultados from "./Resultados";
import Error from "./Error";
import Grafico from "./Grafico";

const Main = () => {
  const [busqueda, guardarBusqueda] = useState({
    texto: "",
  });

  const { texto } = busqueda;

  const [consultar, guardarConsultar] = useState(false);

  const [error, guardarError] = useState(false);

  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const url = `https://api.github.com/search/users?q=${texto}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        if (resultado.total_count === 0) {
          guardarError(true);
        }

        guardarResultado(resultado);
        guardarConsultar(false);
      }
    };
    consultarAPI();
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Busqueda de Usuarios" />

      <main className="app">
        <div className="contenedor">
          <div className="seccion-principal">
            <div className="formulario-busqueda">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />

              <Grafico

              resultado={resultado}
              error={error}
              consultar={consultar}
              guardarConsultar={guardarConsultar}

              />

            </div>

            <div className="resultados">
              {error ? (
                <Error mensaje="La busqueda no encontro resultados" />
              ) : (
                <Resultados resultado={resultado} />
              )}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
