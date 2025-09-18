import { useState, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router";


export default function LoginPage({ userstate, setuserstate }) {

  // used to set login view, sign up view if false
  const [isLogin, setLogin] = useState(true);

  let navigate = useNavigate();


  if (Boolean(userstate)) {
    navigate('/');
  }

  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/api/login', { method: form.method, body: formData }).then(
      (data) => {
        switch (data.status) {

          case 404:
            window.alert("user not found, please check user name");
            break;

          case 401:
            window.alert("invalid user credentails or wrong password");
            break;

          case 200:
            data.json().then(d => {
              console.log(d);
              setuserstate(d);
            });
            break;

          default:
            window.alert("unexpected error occured")
        }


      }
    ).catch((error) => {
      console.log(error)
      window.alert("unexpected error occured")
    });

  }

  function handleSignup(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/api/signup', { method: form.method, body: formData }).then(
      (data) => {
        switch (data.status) {

          case 400:
            data.text().then(d => {
              console.log(d);
              window.alert(d)
            });
            break;

          case 200:
            data.json().then(d => {
              console.log(d);
              setuserstate(d);
            });
            break;

          default:
            window.alert("unexpected error occured")
        }
      }
    ).catch((error) => {
      console.log(error)
      window.alert("unexpected error occured")
    });
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setLogin(true);
  }

  function Login() {
    return (
      <form onSubmit={handleLogin} method="post">
        <div className="login">
          <h1 className="title">Login</h1>
          <h3>Enter your credentials</h3>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button>Login</button>
          <p>don't have an account ? <a onClick={() => setLogin(!isLogin)}>Sign up</a></p>
        </div>
      </form>)
  }


  function Signup() {
    return (
      <form onSubmit={handleSignup} method="post">
        <div className="signup">
          <h1 className="title">Sign up</h1>
          <div className="division">
            <h3>Your new username</h3>
            <input type="text" placeholder="Username" name="username" required />
          </div>

          <div className="division">
            <h3>Your actual name</h3>
            <div className="row">
              <input type="text" placeholder="Firs tname" name="first_name" required />
              <input type="text" placeholder="Last name" name="last_name" required />
            </div>
          </div>


          <div className="division">
            <h3>Email for contact</h3>
            <div className="row">
              <input type="email" placeholder="Email" name="email" required />
            </div>
          </div>

          <div className="division">
            <h3>Address</h3>
            <div className="row">
              <input type="text" placeholder="Door no / building" name="door_building_name" />
              <input type="text" placeholder="street name" name="street_name" />
              <input type="text" placeholder="landmark" name="landmark" />
            </div>
            <div className="row">
              <input type="text" placeholder="district" name="district" />
              <input type="text" placeholder="state" name="state" />
              <input type="text" placeholder="country" name="country" />
            </div>
          </div>

          <div className="division">
            <h3>Password</h3>
            <input type="password" name="password" required />
          </div>
          <button>Sign up</button>
          <p>already have an account ? <a onClick={() => setLogin(!isLogin)}>Login</a></p>
        </div>
      </form>
    )
  }




  return (
    <div className="login-page">
      {isLogin ? <Login /> : <Signup />}
    </div>
  );
}
