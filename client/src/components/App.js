import {useState, useEffect} from 'react'
import NavBar from './NavBar';


function App() {
  
  const [games, setGames] = useState([])

 


  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
