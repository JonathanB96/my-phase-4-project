import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'


export default function Home({user}) {

  const[userReviews] = useState([])
 
 if (user && user.games){
  return(<div >
    <div>
      <h1>MY REVIEWS</h1>
      </div>
    
  {user.reviews.length===0?<h2>No review Found <Link to="/games">Add a review</Link> </h2> :user.reviews.map((review)=>{
    return<div key={review.id}>
      <h2>{review.game.title}</h2>
      <h3>Comment</h3>
      
      <p>{review.comments}</p>
      <h3>Score: {review.score}</h3>
      <p>{review.comments}</p>
    </div>
  })}


  </div>

  )
 } else if(user && user.games ===[]){
  return<div>No review found <Link to="/games">Add a review</Link></div>

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