import React from 'react'
import "./LoginPage.css"
import {Link} from "react-router-dom"

const LoginPage = () => {

  const LOGIN_URL = "https://jathack.herokuapp.com/login"

  const [userLoginData, setuserLoginData] = React.useState({
    email: "",
    password: "",
  });

  const {email, password } = userLoginData;

  const handleChange = (event) => {
    setuserLoginData({ ...userLoginData, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(userLoginData);

    let formData = new FormData()
    formData.append("username",email)
    formData.append("password",password)

    fetch(LOGIN_URL, {
      method: "POST",
      body:formData,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setuserLoginData({ email: "", password: "", });
  };

  return (
    <div className='login'>
    <div className='login-area'>
    <div className='login-heading'>
    <h1>SYSTEM TRON@</h1>
    </div>
    <div className='login-form'>
        <form>
            <div className='input-box'>
            <input type="email" name='email' value={email} placeholder="Enter your email"
            onChange={handleChange}/>
            </div>
            <div className='input-box'>
            <input type="password" name='password' value={password} placeholder="Enter your password" 
            onChange={handleChange}/>
            </div>
            <div className='submit-box'>
           <button onClick={handleClick}>Log in</button>
            </div>
        </form>
    </div>
    <div className='redirect'>
        <p>Don't have an account? <span ><Link to= "/signup" style={{textDecoration : "none", color : "#ffffff"}}>Sign up</Link> </span> </p>
    </div>
    </div>
    </div>
  )
}

export default LoginPage