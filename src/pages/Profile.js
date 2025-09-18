import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/login.css";



export default function ProfilePage({ userstate, setuserstate }) {

  let navigate = useNavigate();


  if (!Boolean(userstate)) {
    navigate('/login');
  }

  function handleUpdate(e) {

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch('/api/updateprofile', { method: "PUT", body: formData })
      .then(res => {
        console.log(res.status)
      }).catch(
        (error) => {
          console.log(error)
          window.alert("unexpected error occured")
        }
      );
  }


  function ProfileUpdateForm() {
    return (
      <form onSubmit={handleUpdate} method='PUT'>
        <div className="profile">
          <h1 className="title">User Profile</h1>
          <div className="division">
            <h3>*username cannot be modified</h3>
            <input type="text" name="username" placeholder={userstate.username} value={userstate.username} readonly />
          </div>

          <div className="division">
            <h3>Update name</h3>
            <div className="row">
              <input type="text" placeholder={userstate.first_name} name="first_name" />
              <input type="text" placeholder={userstate.last_name} name="last_name" />
            </div>
          </div>


          <div className="division">
            <h3>*Email cannot be modified</h3>
            <div className="row">
              <input type="email" name="email" placeholder={userstate.email} value={userstate.email} readonly />
            </div>
          </div>

          <div className="division">
            <h3>Update Address</h3>
            <div className="row">
              <input type="text" placeholder={userstate.door_building_name} name="door_building_name" />
              <input type="text" placeholder={userstate.street_name} name="street_name" />
              <input type="text" placeholder={userstate.landmark} name="landmark" />
            </div>
            <div className="row">
              <input type="text" placeholder={userstate.district} name="district" />
              <input type="text" placeholder={userstate.state} name="state" />
              <input type="text" placeholder={userstate.country} name="country" />
            </div>
          </div>

          <div className="division">
            <h3>Change Password</h3>
            <input type="password" name="password" />
          </div>
          <button type='submit'>Update details</button>
        </div>
      </form>)
  }

  return (
    <div className="login-page">
      <ProfileUpdateForm />
    </div>
  );
}
