import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {UserFollowers} from '../chart/UserFollowers';
export const UserScreen = ({ history }) => {

    const { userId } = useParams();
     console.log(userId);
 
    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }
	
	 const [users,setUsers]=React.useState([]);
   const getData=async ()=>{
    fetch('https://api.github.com/users'
     )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
		setUsers(myJson.find(item => item.login==userId)) 
      });
  }
  React.useEffect(()=>{
    getData()
  },[])
  
    const {
		id,
    login,
    avatar_url	
 
    } = users
  //  console.log("map ",users.find( item => item.login==userId))
    return (
        <div className="row mt-5">
            <div className="col-4">
                <UserFollowers test="10" />
            </div>
			
			<div className="col-4">
                <img 
                    src={ ` ${ avatar_url }` }
                    alt={ login }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-4 animate__animated animate__fadeIn">
                <h3> { login } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Id: </b> { id } </li>
                    <li className="list-group-item"> <b> Login: </b> { login } </li>
                  </ul>
 

                

            </div>

        </div>
    ) 
}
