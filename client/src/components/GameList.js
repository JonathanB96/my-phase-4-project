import React, {useState, useEffect}from 'react'
import GameCard from './GameCard';
import SearchBar from './SearchBar';
import './GameList.css'

export default function GameList({user}) {

  const [games, setGames] = useState([])
  const [gameReviews, setGameReviews] = useState([])
  const [gameComments, setGameComments] = useState("")
  const [gameScore, setGameScore] = useState("")
  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then((games)=>{
        setGames(games)
             });
  }, []);
  
  
  
  return (<div>
            
            <div id='search'><SearchBar/></div>
            <div className='container'>{games.map((game)=>{
                return <GameCard game={game} key={game.id} user={user}/>
            })}
            </div>
        </div>
        
  )
}
