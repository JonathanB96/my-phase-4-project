import React from 'react'
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router';
import './NavBar.css'

export default function NavBar() {
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
    <li> <NavLink 
        to="/news"
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
        News
      </NavLink></li>
    <li><NavLink
        to="/games"
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
        Games
      </NavLink></li>
    <li> <NavLink
        to="/Reviews"
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
        Reviews
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
        Sign Up
      </NavLink></li>
    <li><NavLink
        to="/loginForm"
        exact
        activeStyle={{
            color: "#00C6A7",
        }}
      >
        Login
      </NavLink></li>
    
  </ul>

    </div>
  </nav>
  </div>
  )
}
