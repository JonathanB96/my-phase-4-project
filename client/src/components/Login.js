import React, {useState}from 'react'
import "./Signup.css"

export default function Login() {

  const[username, setUsername]=useState('')
  const[psw, setPsw]=useState('')
  

  function handleUsername(e){
    setUsername(e.target.value)
    
  }

  function handlePsw(e){
    setPsw(e.target.value)
    
  }
    

  return<>
   <form >
    <div className="form-container">
    <h1>Login</h1>
   
    <hr/>

    <label><b>Email</b></label>
    <input type="text" value={username} onChange={handleUsername}
     placeholder="Enter Username"required/>

    <label><b>Password</b></label>
    <input type="password" value={psw} onChange={handlePsw}
     placeholder="Enter Password" required/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"margin-bottom":"15px"}}/> Remember me
    </label>

    <div className="clearfix">
      
      <button type="submit" className="signupbtn">Login</button>
      <button type="button" className="cancelbtn">Cancel</button>
    </div>
  </div>
</form> 
  
  
  </>
}
