import "./styles/styles.css";
import Footer from "./components/Footer";
import MoviesGrid from "./pages/Parts";
import Watchlist from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import ProfilePage from "./pages/Profile";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [userState, setUserState] = useState();

  useEffect(() => {
    fetch("movies.json")
      .then((Response) => Response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/parts">Spare Parts</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/cart">Cart</Link>
              </li>

              {
                userState ?
                  <>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <a onClick={() => setUserState(null)}>Logout</a>
                    </li>
                  </>
                  :
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
              }
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/parts"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route
              path="/cart"
              element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route path="/login" element={<LoginPage userstate={userState} setuserstate={setUserState} />}></Route>
            <Route path="/profile" element={<ProfilePage userstate={userState} setuserstate={setUserState} />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
