import './sass/style.css'
import Display from './components/Display';

function App() {
 
return (
    <div className="App">
      <div className='box'>
        <p>This is a test for GH pages using a react model.</p>
        <p>We will attempt to test fetching from an API to show the ability to show information on a react GH page.</p>
      </div>
      <Display className='display'/>
    </div>
  );
}

export default App;
