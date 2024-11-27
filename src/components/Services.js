import React from "react";
import "../login.css";

export default function Services() {
  return (
    <div>
      <div className="card1">
        <h1 className="title">Vehicle Wash</h1>
        <h3>Enter your credentials</h3>
        <br />
        <form
          className="form"
          action="C:\Users\LENOVO\automobile\backend\process.php"
          method="post"
        >
          <div className="filter-bar1">
            <div className="filter-slot1">
              <label>Package Options</label>
              <select className="filter-dropdown1">
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>
          </div>
          <div className="filter-bar2">
            <div className="filter-slot2">
              <label>Vehicle</label>
              <select className="filter-dropdown2">
                <option>Car</option>
                <option>Bike</option>
                <option>Cycle</option>
              </select>
            </div>
          </div>
          <div className="filter-bar3">
            <div className="filter-slot3">
              <label>Model</label>
              <select className="filter-dropdown3">
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>
          </div>

          <label>
            <input type="checkbox" />
            <span className="checkbox-wrapper">
              <span className="checkbox"></span>
            </span>
            <span className="checkbox-text">Confirm</span>
          </label>
          <div className="btn">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
      <div className="card2">
        <h1 className="title">Vehicle Painting</h1>
        <h3>Enter your credentials</h3>
        <br />
        <form
          className="form"
          action="C:\Users\LENOVO\automobile\backend\process.php"
          method="post"
        >
          <div className="filter-bar1">
            <div className="filter-slot1">
              <label>Package Options</label>
              <select className="filter-dropdown1">
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>
          </div>
          <div className="filter-bar2">
            <div className="filter-slot2">
              <label>Vehicle</label>
              <select className="filter-dropdown2">
                <option>Car</option>
                <option>Bike</option>
                <option>Cycle</option>
              </select>
            </div>
          </div>
          <div className="filter-bar3">
            <div className="filter-slot3">
              <label>Model</label>
              <select className="filter-dropdown3">
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </div>
          </div>

          <label>
            <input type="checkbox" />
            <span className="checkbox-wrapper">
              <span className="checkbox"></span>
            </span>
            <span className="checkbox-text">Confirm</span>
          </label>
          <div className="btn">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
      <br />
      <br />
    </div>
  );
}
