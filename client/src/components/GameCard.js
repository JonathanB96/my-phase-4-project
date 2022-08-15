import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './GameCard.css'


export default function GameCard({game, user}) {
  
  const [score, setScore]= useState("")
  const [comments, setComment] = useState("")
  const [reviewList, setReviewList] = useState([])  
  const [className, setClassName] = useState(true)
  const [newScore, setNewScore] = useState("")
  const [newComment, setNewComment]= useState("")
  const [hasAddedReview, setHasAddedReview] = useState(false)
  
  useEffect(()=>{
    fetch(`/games/${game.id}/reviews`)
    .then(r=>r.json())
    .then(gameReviews=>{
      setReviewList(gameReviews)    
    })

  },[])

  

  function openOverlay() {
    setClassName(!className)       
  }
  
  function handleComment(e) {
    setComment(e.target.value)
   
  }
  function handleNewComment(e) {
    setNewComment(e.target.value)
   
  }
  function handleScore(e){
   setScore(e.target.value)
  }
  function handleNewScore(e){
    setNewScore(e.target.value)
   }
  

  function handleDelete(){   
    console.log(reviewList)
    const clickedReview = reviewList.find((review)=>{return review.user.username === user.username})
    fetch(`/reviews/${clickedReview.id}`,{method: 'DELETE'})
    .then(r=>{
      if(r.ok){
        const newReviewList = reviewList.filter((review)=>{
          return review.id!=clickedReview.id
          
        })
        setReviewList(newReviewList)  
        setHasAddedReview(false)   

      }
      })
   }
  
  function onAddReview(newReview){
    setReviewList([...reviewList, newReview])      
    
  }
  function handleEdit(e){
    const clickedReview = reviewList.find((review)=>{return review.user.username === user.username})
    e.preventDefault()
    fetch(`/reviews/${clickedReview.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({comments:newComment, score:parseInt(newScore) , game_id: game.id}
      ),
    }).then((r) => r.json())
    .then((newReview)=>{
          const newList = reviewList.map((review)=>{
        if(review.id === newReview.id){
          return newReview
        }
        else {
          return review
        }
      })

     setReviewList(newList)
     setNewComment("")
   
    })    
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
       
       {user?<form className="AddReview" onSubmit={(e)=>{
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
          
              onAddReview(newReview) 
              setHasAddedReview(true) 
              setComment("")
          
          })    
       }}>
        <h3>Leave a review</h3>
        
        <textarea placeholder='Your comment here'value={comments} onChange={handleComment}/> <br/>
        <select placeholder='Score' value={score} onChange={handleScore}>
          <option>SCORE</option>
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
        <input type="submit" value="Add" disabled={hasAddedReview? true: false}/>

      </form>:null}
       
      
      
      <div className="">
        {
        reviewList.map((review)=>{
          
          return <div>
            <div>
              <h2>{review.user.username}</h2>
              <p>{review.comments}</p>
              <p>Score: {review.score}</p> 
              {user&& user.username === review.user.username?<button className="cancelbtn" onClick={handleDelete}>Delete</button>:null}
              {user&& user.username === review.user.username?
                <form onSubmit={handleEdit}>
                  <textarea placeholder='Edit your comment' value={newComment} onChange={handleNewComment}/>
                  <select placeholder='Score' value={newScore} onChange={handleNewScore}>
                    <option>New Score</option>
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
                  <input type="submit" value="Edit"/>

                </form>:null}
                         
              <hr/>
            </div>

           
          </div>

        })} 
          
      </div>

    </div>
    
</div> 
  </>
}
