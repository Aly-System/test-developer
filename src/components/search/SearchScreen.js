import React from 'react';
import queryString from 'query-string';
import { UserCard } from '../users/UserCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/fontawesome-free-solid'
import {UserFollowers} from '../chart/UserFollowers';
import { FaSearch } from 'react-icons/fa';
import { Container, Row, Col  } from 'react-grid-system';
import PropTypes from "prop-types";
import './../../assets/Grid.scss';

const Grid = (props) => {
    return (
        <div className={['Grid', props.className].join(' ')}>
            {props.children}
        </div>
    );
};
Grid.propTypes = {
    className: PropTypes.string
};
export default Grid;

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

  require('react-fontawesome');

    return (
        <div>
    
        <Container fluid>
        <Row>
            <Col> <h4>
                <FontAwesomeIcon icon={faUser} size='2x'/> Buscar Usuario
            </h4>
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
                <FaSearch />
                    Buscar...
                </button>
            </form></Col>
        <Col>  <h4> Resultados </h4>
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
                userFiltered.slice(0,10).map( user => user.login.includes(searchText) || searchText===""?
                (
                    <UserCard 
                        key={ user.id } 
                        { ...user }
                    />
                ):null)
            }
        </Col>
        </Row>
        <br />
        <Row>
            <Col>  <UserFollowers /></Col>
        
        </Row>
        </Container>

</div>

)
}
