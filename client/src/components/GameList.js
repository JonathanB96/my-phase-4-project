import React, {useState, useEffect}from 'react'
import GameCard from './GameCard';

import './GameList.css'

export default function GameList({user, onAddReview}) {

  const [games, setGames] = useState([])
  const [gameList, setGameList]= useState([])
  
  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then((games)=>{
        setGames(games)
        setGameList(games)
      
      });
  }, []);
  
  
  function handleSearch(e){
    if(e.target.value===""){
      setGameList(games)
      return
    }
    const filteredValues = gameList.filter((item)=>{
      return item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    })
    setGameList(filteredValues)
  }
  
  return (<div>
            
            <div><input type="text" placeholder='Search for a game' onChange={handleSearch}/></div>
            <div className='container'>{gameList &&
                gameList.map((game)=>{
                return <GameCard game={game} key={game.id} 
                user={user} onAddReview={onAddReview} />
            })}
            </div>
        </div>
        
  )
}
