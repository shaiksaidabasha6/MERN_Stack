import React from "react";
import "./Head.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div>
        <img src={props.image} />
        </div>
        <div className="content">
          <h3>{props.sd}</h3>
          <NavLink to='/book'><button>Book Now</button></NavLink>
        </div>
      </div>
    </>
  );
}
