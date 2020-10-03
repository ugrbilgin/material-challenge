import React from "react";
import "./day3_index.scss";



const CardLabel = ()=> {
    return (
        <div className="card-container">
          <button className="btn-cmp">Company</button>
          <p id="label">Ex. Amazon</p>
        </div>
    );
}

const CardLocation = ()=>{
  return(
    <div className="card-locaiton">
      <div className="nav-icon">
      <i className="material-icons" id="icon-nav">
        near_me
      </i>
      </div>
      <h3 id="d3-title">Meetups  near you</h3>
      <p id="d3-text">Meetups close to my location</p>
      <button className="btn-locations"> View Locations</button>
    </div>
  );
}

const CardAvailability = ()=>{
  return(
    <div className="avaible-container">
      <h3>Availability</h3>
      <p>
        <input type="checkbox" id="check1"/>
        Available for Hire
      </p>
      <p>
        <input type="checkbox" id="check2"/>
        Remote designers
      </p>
      <p>
        <input type="checkbox" id="check3"/>
        Willing to relocate
      </p>
      <button className="btn-avaible"> <b>View Meetups</b>   </button>
    </div>
  );

}




export default function Day3({}) {
    return (
      <div className="d3-app-container">
        
      </div>
    );
  }
