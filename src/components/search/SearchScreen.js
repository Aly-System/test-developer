import React, { useMemo } from 'react';
import queryString from 'query-string';
import { UserCard } from '../users/UserCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
 
export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
		
        searchText: q 
   
    } );
    const { searchText } = formValues;
    
       const [userFiltered,setUserFiltered]=React.useState([]);
   const getData=async ()=>{
    fetch('https://api.github.com/users'
     )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
		setUserFiltered(myJson) 
      });
  }
  React.useEffect(()=>{
    getData()
  },[])
  
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Test de ReactJS</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Buscar Usuario </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Encuentra al usuario"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar...
                        </button>
                    </form>

                </div>

                <div className="col-7">

                    <h4> Resultados </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Lista de usuarios
                            </div>
                    }

                    { 
                        (q !=='' && userFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                No existe el usuario { q }
                            </div>
                    }

                    {
                        userFiltered.slice(0,10).map( user => user.login.includes(searchText) || searchText==""?
						(
                            <UserCard 
                                key={ user.id } 
                                { ...user }
                            />
                        ):null)
                    }

                </div>

            </div>

        </div>
    )
}
