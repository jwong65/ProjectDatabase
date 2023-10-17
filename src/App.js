// import Display from './components/Display';
import './sass/style.css'
import { useState } from 'react';
import Axios from 'axios'

// Importing the components
import Home from './components/Home';
import Display from './components/Display';
import Footer from './components/Footer';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
return (
  <>
  <Home />
  <Footer />
  </>
  );
}

export default App;
