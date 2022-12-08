import React from "react";

const Dropdown = (props) => {
  const item = props.list
  return (
    <>
      <select name={props.name} id={props.name} className='drop-down'>
        {item.map((it)=>(
        <option value={it}>{it}</option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
