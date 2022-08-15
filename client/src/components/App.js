import {useState, useEffect} from 'react'
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import Signup from './Signup';
import Login from './Login'
import Home from './Home';
import GameList from './GameList';


function App() {
  
  const [user, setUser] = useState(null) 
  const [userReviews, setUserReviews] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        setUserReviews(user.reviews)
        } );
      }
    });
  }, []);

  function handleAddReview(newReview){
    const updatedReviewArray = [...userReviews, newReview];
    setUserReviews(updatedReviewArray);
  }


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>
          <Route exact path="/">
            <Home user={user} userReviews={userReviews} setUserReviews={setUserReviews}/>          
          </Route>
          <Route exact path="/games">
            <GameList user={user} userReviews={userReviews} onAddReview={handleAddReview}/>
          </Route>
          <Route exact path="/register">
            {user?<Home user={user}/>:<Signup onLogin={setUser}/>} 
          </Route>
          <Route exact path="/loginForm"> 
          {user?<Home user={user}/>:<Login onLogin={setUser}/>}               
          </Route>
       
      </Switch>

      
    </div>
  );
}

export default App;
