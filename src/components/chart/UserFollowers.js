import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'
import { useParams, Redirect } from 'react-router-dom';
defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export const UserFollowers = (test) => {
	  const { userId } = useParams();
     const [user,setUser]=React.useState([]);
     const [tst,setTst]=React.useState([]);
   const getData=async ()=>{
    fetch('https://api.github.com/users/'+userId+'/followers'
     )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
		setUser(myJson)
		console.log("myJson ",myJson)
		console.log("user ",userId)
       // let dat=myJson.find(item => item.login==userId)		
		setTst(myJson.length) 
      });
  }
  React.useEffect(()=>{
    getData()
  },[])
  
	
  return (
    <div>
      <Bar
        data={{
          
          datasets: [
            {
              label: '# followers',
              data: [tst],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
              ],
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
        }}
      />
    </div>
  )
}

 