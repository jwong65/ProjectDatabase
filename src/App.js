import Display from './components/Display';
import './sass/style.css'

function App() {
  const [pokemonName, setPokemonName] = useState('')
 
return (
    <div className="App">
      <div className='box'>
        <p>This is a test for GH pages using a react model.</p>
        <p>We will attempt to test fetching from an API to show the ability to show information on a react GH page.</p>
      </div>
      <div>
        <h1>Search Pokemon Name</h1>
        <input type='text' onChange={(e)=>{setPokemonName(e.target.value)}}></input>
      </div>
      {/* <Display/> */}
    </div>
  );
}

export default App;
