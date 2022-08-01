import React, {useState, useEffect}from 'react'
import GameCard from './GameCard';
import SearchBar from './SearchBar';
import './GameList.css'

export default function GameList() {

  const [games, setGames] = useState([])
  const [gameReviews, setGameReviews] = useState([])
  const [gameComments, setGameComments] = useState("")
  const [gameScore, setGameScore] = useState("")
  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then((games)=>{
        setGames(games)
        console.log(games)
      });
  }, []);
  function openOverlay() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeOverlay() {
    document.getElementById("myNav").style.width = "0%";
  }
  function handleSubmit(e){
    e.preventDefault()
    
  }
  
  return (<div>
            <div id="myNav" className="overlay">

                <form className='AddReview' onSubmit={handleSubmit}>
                  <h3>Leave a review</h3>
                  
                  <textarea placeholder='Your comment here'/> <br></br>
                  <select placeholder='Score'>
                    <option>score</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4 </option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                  <input type="submit" value="Add"/>

                </form>
              
                <a className="closebtn" onClick={closeOverlay}>&times;</a>

               
                <div className="overlay-content">
                  {gameReviews.map((review)=>{
                    return <div>
                      <h2>{review.user.username}</h2>
                    <p>{review.comments}</p>
                    <p>Score: {review.score}</p>
                    
                    <hr/>
                    </div>

                  })}
                    
                </div>

            </div>

            <div id='search'><SearchBar/></div>
            <div className='container'>{games.map((game)=>{
                return <GameCard game={game} key={game.id} setGameReviews={setGameReviews} 
                setGameComments={setGameComments} setGameScore={setGameScore} overlay={openOverlay}/>
            })}
            </div>
        </div>
        
  )
}
