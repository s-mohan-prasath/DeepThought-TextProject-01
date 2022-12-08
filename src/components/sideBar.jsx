import React, {use} from "react";
import "../styles.css";
import { FiMenu } from "react-icons/fi";
import {BsDot} from 'react-icons/bs'
import { useState } from "react";

const SideBar = (props) => {
  const list = props.list;
  const [isExpand,setisExpand]=useState(true);

  return (
    <>
      <div className='side-bar side-bar-transition'>
        <div className="side-head side-bar-transition">
          <h2 className={`${isExpand? "side-heading" : "side-heading-shrink"} side-bar-transition`} >Journey Board</h2>
          <h2 onClick={()=>(setisExpand(!isExpand))} style={{marginLeft:"20px"}}>
            <FiMenu />
          </h2>
        </div>
        <div className={`${isExpand? "side-body" : "side-body-shrink"}`} id="side-body" style={{paddingBottom:"30px"}}>
          <h2 style={{fontWeight:"400",margin:"10px 0 30px 20px"}}>1. {props.task_title}</h2>
          <div className="">
            {list.map((each) => (
                <div className="">
                  <p style={{margin:"10px 0", textAlign:"center"}}><BsDot/> {each}</p>
                  <hr />
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
