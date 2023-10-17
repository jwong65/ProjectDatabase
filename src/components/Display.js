import React from 'react'
import { useState } from 'react';
import '../sass/style.css'

export default function Display() {
    
const base_URL = 'https://pokeapi.co/api/v2/pokemon'
const [pokedata, setData] = useState([]);
const [pokemonName, setName]= useState()

const fetchInfo =() =>{
    console.log(`${base_URL}/${pokemonName}`)
  fetch(`${base_URL}/${pokemonName}`)
  .then((res)=>res.json())
  .then((json)=> {
    console.log(json)
    setData(json)
  })
}
const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(pokemonName)
    fetchInfo();
}
  return (
    <div className='display'>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=> setName(e.target.value)}></input>
            <input type='submit' value='Submit'></input>
        </form>
    {/* <button onClick={fetchInfo}> Test Fetch</button> */}
    <pre>
    {JSON.stringify(pokedata, null, 1)}</pre>
    </div>
  )
}
