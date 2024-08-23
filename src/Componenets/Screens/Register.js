import React, { useState } from "react";
import "./Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setname] = useState();  
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const navigate = useNavigate();

  const handleregister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4001/register", { name, email, password })
      .then((result) => {
        navigate("/Login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="signup_page">
        <div className="center_white_box">
          <h3>Create Account</h3>
          <form onSubmit={handleregister} autoComplete="off">
            <div className="field input_name">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                name={name}
                required
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <div className="field input_email">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                name={email}
                placeholder="Enter your email"
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="field input_password">
              <label htmlFor="email">Password</label>
              <br />
              <input
                type="password"
                id="password"
                name={password}
                placeholder="Enter your password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="field submit_signup">
              <button type="submit" id="submit_button">Sign Up</button>
            </div>
          </form>
          <div className="have_account">
            <span id="after_text">
              Already have an account?{" "}
              <span id="linker">
                <a href="/Login">Login</a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
