import { useState } from 'react';
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
 
toast.configure()

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        if(target.value.includes("react") ==true)
		toast.error('texto no permitido', {position: toast.POSITION.TOP_RIGHT})

		else	
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}