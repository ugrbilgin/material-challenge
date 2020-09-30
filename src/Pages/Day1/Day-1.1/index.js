import React from "react";
import "./index.scss";
import { BiAccessibility } from "react-icons/bi";
const PopUP = ({ description, src, btnClass, btnText }) => {
  return (
    <div className="container">
      <i className="material-icons" id="icon">
        clear
      </i>
      <img className="img-ico" src={src} width={80} />
      <p>{description}</p>
      <button className={btnClass}>{btnText}</button>
    </div>
  );
};

export default function Day1({}) {
  return (
    <div className="d-row">
      <PopUP
        description="We use cookies for improving user experience, analytics and marketing."
        src={require("./idea.png")}
        btnClass="primary"
        btnText="That's Fine"
      />

      <PopUP description="You will be logged out immediately!" src={require("./teacher.png")} btnClass="secondary" btnText="Extend Login" />
    </div>
  );
}
