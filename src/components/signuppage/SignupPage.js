import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const API_URL = "https://jathack.herokuapp.com/users/";

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, password, confirmpassword } = userData;

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(userData);
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setUserData({ name: "", email: "", password: "", confirmpassword: "" });
  };

  return (
    <div className="signup">
      <div className="login-area">
        <div className="login-heading">
          <h1>SYSTEM TRON@ </h1>
        </div>
        <div className="login-form">
          <form>
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your Username"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                placeholder="Confirm password"
                onChange={handleChange}
              />
            </div>
            <div className="submit-box">
              <button onClick={handleClick}>Sign Up</button>
            </div>
          </form>
        </div>
        <div className="redirect">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                {" "}
                Log In{" "}
              </Link>{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
