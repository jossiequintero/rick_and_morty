import logo from './logo.png';
import './App.css';
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/search-bar/SearchBar.jsx";
import characters from './data.js'
import { useState, useEffect } from "react";


function App() {
  const [chars, setchars] = useState(characters);
  
  function quitarCard() {
    setchars(c=>{
      c.pop()
      console.log(c);
      return [...c];
    });
  }
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <hr />
      <div>
        <Cards characters={chars} />
      </div>
      <button onClick={quitarCard}>Eliminar</button>
    </div>
  );
}

export default App;
