import React,{useState} from 'react'
import './GameCard.css'


export default function GameCard({game, setGameUser, setGameComments}) {
  const [btn, setBtn] = useState(true)
//   const [reviews, setReviews] = useState([])
  function handleClick(){
   console.log(game.reviews) 
   console.log(game.users)
    setBtn(!btn)    
  }
  return<>
  <div className='card'>
  
  <h4>{game.title}</h4>
      <h3>{game.year}</h3>
     <img className='card-img' src={game.image_url} alt={game.title}/>

    
    <button className="card-btn" onClick={handleClick} style={{background: !btn? "rgba(0, 0, 0, 0.5)": "#000"}}>{!btn?"Hide Reviews": "Show Reviews"}</button>
  </div>
  
  
  </>
}
