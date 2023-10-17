import React from 'react'

export default function Home() {
  return (
    <div className='box'>
        <h1>This is a Pokemon selector</h1>
        <div className='form-group'>
            <label for='pokemonsearch'>Search for a Pokemon</label>
            <input type='text' class='form-control' placeholder='Do not put in special characters.'/>

        </div>
    </div>
  )
}
