import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";

//https://codepen.io/FlorinPop17/pen/vPKWjd

const App = () => {
  const toggleRightPanel = (active) => {
    const container = document.getElementById("container");
    container.classList[active ? "add" : "remove"]("right-panel-active");
  };

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const sendSignUp = async () => {
    const { data: res } = await api.post("/", signupData);
    alert(JSON.stringify(res));
  };

  return (
    <>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              data-cy="signup-name"
              value={signupData.name}
              onChange={(e) => {
                setSignupData({
                  ...signupData,
                  name: e.target.value,
                });
              }}
            />
            <input
              type="email"
              placeholder="Email"
              data-cy="signup-email"
              value={signupData.email}
              onChange={(e) => {
                setSignupData({
                  ...signupData,
                  email: e.target.value,
                });
              }}
            />
            <input
              value={signupData.password}
              type="password"
              placeholder="Password"
              data-cy="signup-password"
              onChange={(e) => {
                setSignupData({
                  ...signupData,
                  password: e.target.value,
                });
              }}
            />
            <button data-cy="signup-button" onClick={() => sendSignUp()}>
              Sign Up
            </button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" data-cy="signin-email" />
            <input
              type="password"
              placeholder="Password"
              data-cy="signin-password"
            />
            <a href="#">Forgot your password?</a>
            <button data-cy="signin-button">Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="ghost"
                id="signIn"
                data-cy="signin-form"
                onClick={() => toggleRightPanel(false)}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                class="ghost"
                id="signUp"
                data-cy="signup-form"
                onClick={() => toggleRightPanel(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
