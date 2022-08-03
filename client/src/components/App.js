import {useState, useEffect} from 'react'
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login'
import Home from './Home';
import News from './News';
import GameList from './GameList';


function App() {
  
  const [user, setUser] = useState(null) 

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>
      <Route exact path="/">
          <Home user={user}/>          
        </Route>
        <Route exact path="/games">
         <GameList user={user}/>
        </Route>
        <Route exact path="/register">
        {user?<Home user={user}/>:<Signup onLogin={setUser}/>} 
        </Route>
        <Route exact path="/loginForm"> 
        {user?<Home user={user}/>:<Login onLogin={setUser}/>}               
        </Route>
        <Route exact path="/news">
          <News/>                    
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
