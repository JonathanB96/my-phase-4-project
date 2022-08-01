import React, {useState}from 'react'
import { useHistory } from 'react-router-dom'
import "./Signup.css"

export default function Signup() {

  const[username, setUsername]=useState('')
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
 
  function handleUsername(e){
    setUsername(e.target.value)
    
  }

  function handlePsw(e){
    setPassword(e.target.value)
    
  }
  function handlePsw2(e){
    setPasswordConfirmation(e.target.value)
    
  }
  const history = useHistory()
    

  return<>
  
   <form  className="form-container">
    <div>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label><b>Email</b></label>
    <input type="text" value={username} onChange={handleUsername}
     placeholder="Enter Username"required/>

    <label><b>Password</b></label>
    <input type="password" value={password} onChange={handlePsw}
     placeholder="Enter Password" required/>

    <label><b>Repeat Password</b></label>
    <input type="password" value={passwordConfirmation} onChange={handlePsw2} 
    placeholder="Repeat Password" required/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"margin-bottom":"15px"}}/> Remember me
    </label>

    <div className="clearfix">
      
      <button type="submit" className="signupbtn">Sign Up</button>
      <button type="button" className="cancelbtn">Cancel</button>
    </div>
  </div>
</form> 
  
  
  </>
}
