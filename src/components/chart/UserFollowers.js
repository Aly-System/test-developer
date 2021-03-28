import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'
defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export const UserFollowers = (test) => {
 
     const [follower,setFollower]=React.useState([]);
     const [login,setLogin]=React.useState([]);
     const arrauser=[];
   
	const getData2=async (userLogin)=>{
				 await fetch('https://api.github.com/users/'+userLogin
				 )
				  .then(function(response){
					return response.json();
				  })
				  .then(function(response) {
				     setFollower(follower.concat([response.followers]))
                     
				  });
				 
			  } 

   const getData=async ()=>{
    fetch('https://api.github.com/users'
     )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
		  let usery=myJson
		  let primerosUsers=usery.slice(0,10);
		for (const nUser of primerosUsers) {	
		
          arrauser.push(nUser.login);
		 getData2(nUser.login)
  		
		}
		setLogin(arrauser) 
 
      });
  }
   React.useEffect(()=>{
    getData()
  },[])
			
  return (
    <div>
      <Bar
        data={{
          labels:login,
	 
          datasets: [
            { title: "2",
              label: '# followers',
              data: follower,
              backgroundColor: 'green',
              borderColor: "green",
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }} 
        		
        height={400}
        width={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
	 title: {
        display: true,
        text: 'Follower by users',
		 fontSize: 25,
      }
        }}
      />
    </div>
  )
}

 