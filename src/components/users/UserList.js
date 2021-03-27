import React, { useMemo } from 'react';

export const UserList = () => {

 
   const [users,setUsers]=React.useState([]);
   const getData=async ()=>{
    fetch('https://api.github.com/users'
     )
      .then(function(response){
        return response.json()[0];
      })
      .then(function(myJson) {
		setUsers(myJson[0]) 
      });
  }
  React.useEffect(()=>{
    getData()
  },[])
   
    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
              
           } 
        </div>
    )
}
