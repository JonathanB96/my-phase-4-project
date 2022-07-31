import React, {useState, useEffect}from 'react'
import GameCard from './GameCard';
import SearchBar from './SearchBar';
import './GameList.css'

export default function GameList() {

  const [games, setGames] = useState([])
  const [gameUser, setGameUser] = useState("")
  const [gameComments, setGameComments] = useState("")
  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then((games)=>{
        setGames(games)
        console.log(games)
      });
  }, []);
  function handleClickCard(){

  }
  return (<div>
            <div id="myNav" className="overlay">

              
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>

               
                <div className="overlay-content">
                    <h2>{gameUser}</h2>
                    <p>{gameComments}</p>
                </div>

            </div>

            <div id='search'><SearchBar/></div>
            <div className='container'>{games.map((game)=>{
                return <GameCard game={game} key={game.id} setGameUser={setGameUser} setGameComments={setGameComments}/>
            })}GameList
            </div>
        </div>
        
  )
}
