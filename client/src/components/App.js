import {useState, useEffect} from 'react'
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login'
import Home from './Home';
import News from './News';


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
        <Route exact path="/register">
          <Signup/>
        </Route>
        <Route exact path="/loginForm"> 
        <Login onLogin={setUser}/>         
        </Route>
        <Route exact path="/news">
          <News/>                    
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
