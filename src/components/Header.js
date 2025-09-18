import React from "react";
import "../styles/styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">
        One-Stop Solution for Your Automobile Needs!
      </h2>
    </div>
  );
}
