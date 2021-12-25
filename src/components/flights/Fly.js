import React from "react";
import "./Fly.css";

const Fly = (props) => {
  return (
    <div className="flight">
      <label> a1 : {props.country} </label>
      <label> a2 : {props.state} </label>
      <label> a3 : {props.city} </label>
      <label> a4 : {props.is_active} </label>
    </div>
  );
};

export default Fly;
