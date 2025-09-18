import React from "react";
import "../styles/cart.css";
import MovieCard from "../components/CartItem";

export default function Cart({ movies, watchlist, toggleWatchlist }) {
  return (
    <div className="cart-page">
      <h1 className="title">Your Cart</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <div>
              <MovieCard
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
              ></MovieCard>
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn2">
        Place Order
      </button>
    </div>
  );
}
