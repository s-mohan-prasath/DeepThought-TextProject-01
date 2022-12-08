import React from "react";
import '../styles.css'

const Textbox = (props) => {
  return (
    <>
      <div className="outerbox">
        <p className="label">{props.name}</p>
        <input name="text-box" placeholder="Enter text here" className="text-box" />
      </div>
    </>
  );
};

export default Textbox;
