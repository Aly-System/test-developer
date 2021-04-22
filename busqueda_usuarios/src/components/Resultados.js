import React, { useState } from 'react';
import Usuario from './Usuario';


const Resultado = ({resultado}) => {
    
    const {items} = resultado;

    if (!items) {
        return null;
    };

    let truncado = items.slice(0,10);

    return ( 

      <div className="contenedor-resultados">
        { truncado.length ===0 
            ? <p>No hay elementos</p>

            :truncado.map(
                usuario => (
                    <Usuario 
                        key= {usuario.id}
                        usuario={usuario}   
                    />
                )
            )
        }

        </div>

    );
}
 
export default Resultado;