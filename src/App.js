// import Display from './components/Display';
import './sass/style.css'
import { useState } from 'react';
import Axios from 'axios'

function App() {
  const base_URL = 'https://pokeapi.co/api/v2/pokemon'
  const [pokemonName, setPokemonName] = useState('')

  const [pokemonInfo, setPokemonInfo]= useState({
    name: '',
    img: '',
    hp: '',
    attack: '',
    type:'',
  })

  // Function for the button.
  const searchFunction =()=>{
    Axios.get(`${base_URL}/${pokemonName}`).then((response)=>
      setPokemonInfo({name: pokemonName, img: response.data.sprites.front_default, hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat, type:response.data.types[0].type.name}))
  }
  // stats: response.data.stats.name
 
return (
    <div className="App">
      <div className='box'>
        <h1>Search Pokemon Name</h1>
        <input type='text' onChange={(e)=>{setPokemonName(e.target.value)}}></input>
        <button onClick={searchFunction}>Search</button>
      </div>
      {/* <Display/> */}
      <div>
        <h1>{pokemonInfo.name}</h1>
        <h2>{pokemonInfo.hp}</h2>
        <h2>{pokemonInfo.attack}</h2>
        <img src={pokemonInfo.img} alt='Pokemon image'/>
        <h2>{pokemonInfo.type}</h2>
      </div>
    </div>
  );
}

export default App;
