import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'


export default function Home({user}) {
 
 if(user){
  return<div className='main'> <h1 className='main-msg'>Welcome back {user.username} </h1><Link to="/games" className='myButton'>See all games</Link></div>

 }
 return(<div className='home'>
  <div className='main'>
    
    <h1 className='main-msg' id='no-user'>Create an account today</h1>

    <p>Already a member? <Link to="/loginForm" className='button-23'>Login</Link></p>



  </div>
 
         
  
 </div>

 )
}