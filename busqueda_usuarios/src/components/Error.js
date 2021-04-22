import React from 'react'

const Error = ({mensaje}) => {

    
    if (!mensaje) {
        mensaje= "Ha ocurrido un error"
    }

    return ( 
        <p className="error">{mensaje}</p>
     );
}
 
export default Error;