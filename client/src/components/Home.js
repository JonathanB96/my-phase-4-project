import React, {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import './Home.css'


export default function Home({user}) {
  const[userReviews, setUserReviews]=useState([])  
  console.log(user.reviews[0].game)
 if (user){
  return(<div >
    <div>
      <h1>MY REVIEWS</h1>
    </div>

  {user.reviews.map((review)=>{
    return<div key={review.id}>
      <h2>{review.game.title}</h2>
      <h3>Comment</h3>
      
      <p>{review.comments}</p>
      <h3>Score</h3>
      <p>{review.score}</p>
    </div>
  })}


  </div>

  )
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
