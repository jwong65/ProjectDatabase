import React from 'react'
import { useState } from 'react';

export default function Display() {
    
const base_URL = 'https://pokeapi.co/api/v2/'
const [pokedata, setData] = useState([]);

const fetchInfo =() =>{
  fetch(base_URL)
  .then((res)=>res.json())
  .then((json)=> {
    console.log(json)
    setData(json)
  })
}
  return (
    <div>Display
    <button onClick={fetchInfo}> Test Fetch</button>
    <pre>
    {JSON.stringify(pokedata, null, 2)}</pre>
    </div>
  )
}
