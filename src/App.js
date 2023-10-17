// import Display from './components/Display';
import './sass/style.css'
import { useState } from 'react';

function App() {
  const [pokemonName, setPokemonName] = useState('')
 
return (
    <div className="App">
      <div className='box'>
        <h1>Search Pokemon Name</h1>
        <input type='text' onChange={(e)=>{setPokemonName(e.target.value)}}></input>
      </div>
      {/* <Display/> */}
    </div>
  );
}

export default App;
