
// import { Card } from '@mui/material';
import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Rent from "./Components/Rent";
import Data from './Components/data';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const rent = Data.map(value=>{
    return(
      <Rent 
      key = {value.id}
      image = {value.image}
      name = {value.name}
      price  = {value.price}
      date = {value.date}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <h1>Search properties to rent </h1>
      <div className='sort'>
      <Stack spacing={8} direction="row">
      <Button variant="contained">Available</Button>
      <Button variant="contained">ByLocation</Button>
      <Button variant="contained">ByPrice</Button>
      <Button variant="contained">ByDate</Button>
      </Stack>
      </div>
      <div className='items'>
      {rent}
      </div>
     
      
    </div>
  );
}

export default App;
