import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'


export default function Home({user}) {
 
 if(user){
  return<div>Welcome back {user.username} <Link to="/games">See all games</Link></div>

 }
 return(<div className='home'>
  <div>
    <h1>Home without user </h1>
    <h2>Create an account today</h2>

    <p>Already a member? <Link to="/loginForm">Login</Link></p>



  </div>
 
         
  
 </div>

 )
}