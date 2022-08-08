import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar({user, setUser}) {

  function handleLogoutClick() {
    
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        console.log("logged out!")
      
      }
    });
  }
  
  return (
    <div><nav class="menu-container">

    <input type="checkbox" aria-label="Toggle menu" />
    <span></span>
    <span></span>
    <span></span>
  

    <a href="#" class="menu-logo">
     <img src="https://drive.google.com/uc?id=16jXICbtnRv7XVMJ5UF6Irc-1n6iy_UH0"/>
    </a>
  

    <div class="menu">
    <ul>
    <li> <NavLink
        to="/"
        exact
        activeStyle={{
            color: "#00C6A7",
            
        }}
      >
        Home
      </NavLink>
      </li>
    
    <li><NavLink
        to="/games"
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
        Games
      </NavLink></li>
   
  </ul>

  <ul>
    
    <li> <NavLink 
        to="/register"
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
      {user? user.username: "Sign Up"}
      </NavLink></li>
    <li><NavLink
        to="/loginForm"
        className="button-76"
        onClick={handleLogoutClick}
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
        {user? "Logout": "Login"}
      </NavLink></li>
    
  </ul>

    </div>
  </nav>
  </div>
  )
}
