import React from "react";
import "./index.scss";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <i className="material-icons" id="drop-btn">
        extension
      </i>
      <div className="drop-content">
        <a href="#">asd</a>
        <a href="#">asdf</a>
        <a href="#">asdf</a>
      </div>
    </div>
  );
};

export default function Day1_1() {
  return (
    <div>
      <Dropdown />
    </div>
  );
}
