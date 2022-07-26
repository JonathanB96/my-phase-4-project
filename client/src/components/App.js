import {useState, useEffect} from 'react'
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login'


function App() {
  
  const [games, setGames] = useState([])

 


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/register">
          <Signup/>
        </Route>
        <Route exact path="/loginForm"> 
        <Login/>         
        </Route>
        <Route exact path="">
                    
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
