import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import { AuthContext } from "./AuthContext";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const {setToken}=useContext(AuthContext);
  
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4001/Login", { email, password });
      console.log(response);
     
       setToken(response.data.token);
       localStorage.setItem("token",response.data.token );
       localStorage.setItem("name",response.data.username );
       navigate("/home")
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setToken(null);
      localStorage.removeItem("token")
      console.error("Login error:", error);
    }
  };

  return (
    <div className="signup_page">
      <div className="center_white_box">
        <h3>Login to your account</h3>
        <form onSubmit={handlelogin} autoComplete="off">
          <div className="field input_email">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field input_password">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="input_check">
            <input type="checkbox" name="remem" id="remem" />
            <label htmlFor="remem">Remember Me</label>
          </div>
          <div className="field submit_signup">
            <button id="submit_button">Login</button>
          </div>
        </form>
        <div className="have_account">
          <span id="after_text">
            New to MyApp?{" "}
            <span id="linker">
              <a href="/">Sign Up</a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
