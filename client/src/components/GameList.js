import React, {useState, useEffect}from 'react'
import GameCard from './GameCard';
import SearchBar from './SearchBar';

export default function GameList() {

  const [games, setGames] = useState([])
  useEffect(() => {
    fetch("/games")
      .then((r) => r.json())
      .then((games)=>{
        setGames(games)
        console.log(games)
      });
  }, []);
  return (
    <div>
        <div><SearchBar/></div>
        {games.map((game)=>{
            return <GameCard/>
        })}GameList</div>
  )
}
