import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Topbar from './components/Topbar';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      

          </div>
  );
}

export default App;
