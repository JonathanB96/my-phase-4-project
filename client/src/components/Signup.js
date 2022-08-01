import React, {useState}from 'react'
import { useHistory } from 'react-router-dom'
import "./Signup.css"

export default function Signup({onLogin}) {

  const[username, setUsername]=useState('')
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
 
  function handleUsername(e){
    setUsername(e.target.value)
    
  }

  function handlePsw(e){
    setPassword(e.target.value)
    
  }
  function handlePsw2(e){
    setPasswordConfirmation(e.target.value)
    
  }
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        console.log("Signed up")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    

  return<>
  
   <form  className="form-container" onSubmit={handleSubmit}>
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

    <div className="clearfix">
      
      <button type="submit" className="signupbtn">Sign Up</button>
      <button type="button" className="cancelbtn">Cancel</button>
    </div>
  </div>
  <div>
  {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
  </div>
</form> 
  
  
  </>
}
