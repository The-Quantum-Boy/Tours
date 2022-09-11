import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours';
// import data from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading,setLoding]=useState(true);
  const [tours,setTours]=useState([]);
  
  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async ()=>{
    setLoding(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoding(false)
      setTours(tours)
    } catch (error) {
      setLoding(true);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchTours();
  },[])

  if(loading){
    return (
      <main>
        <Loading/>
      </main>
    );
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
}

export default App
