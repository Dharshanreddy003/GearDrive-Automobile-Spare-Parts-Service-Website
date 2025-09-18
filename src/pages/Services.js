import React from "react";
import "../styles/services.css";

export default function Services() {
  return (
    <div className="services-page">
      <h1>Services</h1>
      <div className="service-container">
        <div className="card">
          <h1 className="title">Vehicle Wash</h1>
          <h3>Select service preference</h3>
          <div className="filter-bar">
            <label>Package Options</label>
            <select className="filter-dropdown">
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
          <div className="filter-bar">
            <label>Vehicle</label>
            <select className="filter-dropdown">
              <option>Car</option>
              <option>Bike</option>
              <option>Cycle</option>
            </select>
          </div>
          <div className="filter-bar">
            <label>Model</label>
            <select className="filter-dropdown">
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
        </div>
        <div className="card">
          <h1 className="title">Vehicle Painting</h1>
          <h3>Select service preference</h3>
          <div className="filter-bar">
            <label>Package Options</label>
            <select className="filter-dropdown">
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
          <div className="filter-bar">
            <label>Vehicle</label>
            <select className="filter-dropdown">
              <option>Car</option>
              <option>Bike</option>
              <option>Cycle</option>
            </select>
          </div>
          <div className="filter-bar">
            <label>Model</label>
            <select className="filter-dropdown">
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit">submit</button>


    </div>
  );
}
