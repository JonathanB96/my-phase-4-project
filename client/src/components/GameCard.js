import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './GameCard.css'


export default function GameCard({game, user, userReviews}) {
  
  const [score, setScore]= useState("")
  const [comments, setComment] = useState("")
  const [reviewList, setReviewList] = useState(game.reviews)
  // const history = useHistory()

  
  const [className, setClassName] = useState(true)
  const [errors, setErrors] = useState([]);

//   const [reviews, setReviews] = useState([])

  function openOverlay() {
    setClassName(!className) 
    console.log(game)  
    console.log(user) 
   
    // document.getElementBy("myNav").style.display = "block";
      
  }
  
  function handleComment(e) {
    setComment(e.target.value)
   
  }
  function handleScore(e){
   setScore(e.target.value)
  }
  function handleDelete(){
    
  }
  
  function handleSubmit(e){
    // history.push('/')   
    e.preventDefault()
    fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({comments:comments, score:parseInt(score) , game_id: game.id}
      ),
    }).then((r) => r.json())
    .then((newReview)=>{
    console.log(newReview)
    console.log(reviewList)
    setReviewList([...reviewList, newReview])
    })
    

    
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
        
        <textarea placeholder='Your comment here'value={comments} onChange={handleComment}/> <br/>
        <select placeholder='Score' value={score} onChange={handleScore}>
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
        reviewList.map((review)=>{
          return <div>
            <div>
              <h2>{review.user.username}</h2>
              <p>{review.comments}</p>
              <p>Score: {review.score}</p> 
              {user.username === review.user.username?<button className="cancelbtn" onClick={handleDelete}>Delete</button>:null}
                         
              <hr/>
            </div>

           
          </div>

        })} 
          
      </div>

    </div>
    
</div> 

 




  </>
}
