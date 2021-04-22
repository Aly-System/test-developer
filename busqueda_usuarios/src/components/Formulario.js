import React, { useState } from "react";
import Error from "./Error";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faUser } from '@fortawesome/free-solid-svg-icons';


const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const [error, guardarError] = useState(false);

  //Extraer ciudad y pais
  const { texto } = busqueda;

  //Leyendo el formulario
  const handleChange = (e) => {
    //Actualizar el estate
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validacion =texto.trim();

    //Validar
    if (validacion === "" || validacion.length <= 4 || validacion === "react")  {
      guardarError(true);
      return;
    }

    guardarError(false);

    //Pasar al componente principal

    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
        {error ? <Error mensaje="La busqueda es invalida"/> : null}
      <div className="imput-formulario">
      
        
        <label htmlFor="busqueda"><FontAwesomeIcon icon={faUser } />  </label>
        <input
          type="text"
          name="texto"
          id="texto"
          value={texto}
          placeholder="Buscar"
          onChange={handleChange}
        />
      </div>

      <div className="boton">
        <button type="submit"><FontAwesomeIcon icon={faSearch } /> </button>
      </div>
    </form>
  );
};

export default Formulario;
