import React from "react";
import "../styles/home.css";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <div className="home-page">
        <div className="para-container">
          <h2>
            "Welcome to <b>Gear Drive</b> - Your Trusted Automobile Partner"
          </h2>
          <br />
          <p>
            Explore our handpicked collection of the latest and most popular
          </p>{" "}
          <p>
            vehicles on the market. Each car is carefully inspected and comes
            with a detailed{" "}
          </p>
          <p>history report, ensuring you drive away with confidence.</p>
          Don’t miss out on these incredible deals—find your perfect car today!
        </div>
      </div>
    </div>
  );
}
