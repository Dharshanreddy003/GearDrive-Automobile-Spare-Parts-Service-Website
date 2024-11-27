import React from "react";
import "../login.css";

export default function Login() {
  return (
    <div>
      <div className="login">
        <div className="card">
          <h1 className="title">Login</h1>
          <h3>Enter your credentials</h3>
          <form
            className="form"
            action="C:\Users\LENOVO\automobile\backend\process.php"
            method="post"
          >
            <input type="text" placeholder="  Username" name="uname" />
            <br />
            <input type="password" placeholder="  Password" name="pwd" />
            <label>
              <input type="checkbox" />
              <span className="checkbox-wrapper">
                <span className="checkbox"></span>
              </span>
              <span className="checkbox-text">Stay logged in</span>
            </label>
            <div className="btn">
              <button type="submit">Login</button>
            </div>
            <br />
            <p>&</p>
            <br />
            <div className="btn">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
