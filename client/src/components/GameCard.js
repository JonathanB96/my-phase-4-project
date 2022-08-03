import React,{useState, useEffect} from 'react'
import './GameCard.css'


export default function GameCard({game, user}) {
  
  const [gameReviews, setGameReviews]= useState([])
  const [reviewList, setReviewList] = useState([])
  const [comments, setComments] = useState("")
  const [className, setClassName] = useState(true)

//   const [reviews, setReviews] = useState([])

  function openOverlay() {
    setClassName(!className) 
    console.log(game)  
    console.log(user) 
   
    // document.getElementBy("myNav").style.display = "block";
      
  }
  
  function closeOverlay() {
    // document.getElementById("myNav").style.height = "none";
   
  }
  function handleSubmit(e){
    e.preventDefault()
    
  }

  function handleAddReview(){

  }
  
 
  
  return<>


  <div className='container-2'>
    <div className='card'>
    <h4>{game.title}</h4>
          <h3>{game.year}</h3>
        <img className='card-img' src={game.image_url} alt={game.title}/>

        
        <button className="card-btn" onClick={openOverlay} style={{background:"#000"}}>{className?"Show Reviews": "Hide reviews"}</button>
    </div>
  
        

    <div id="" className={className?"reviews": "show"}>
       {/* <a  class="closebtn" onClick={closeOverlay}>&times;</a> */}
       <form className="AddReview" onSubmit={handleSubmit}>
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
        <input type="submit" value="Add" disabled={user?false:true}/>

      </form>

      
      
      <div className="">
        {
        game.reviews.map((review)=>{
          return <div>
            <h2>{review.user.username}</h2>
          <p>{review.comments}</p>
          <p>Score: {review.score}</p>
          
          <hr/>
          </div>

        })} 
          
      </div>

    </div>
    
</div> 

 




  </>
}
