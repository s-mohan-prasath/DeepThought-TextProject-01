import React,{useState} from "react";
import "../../styles.css";

// components

import Textbox from "../textbox";
import Btns from "../btns";

// icons

import { AiFillBulb } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {FaPenFancy,FaSave} from 'react-icons/fa'
import { useRef } from "react";


const Task_7 = (props) => {

  const [isExpand1, setisExpand1] = useState(true);
  const [isExpand2, setisExpand2] = useState(true);
  const [isExpand3, setisExpand3] = useState(true);

  var ref1 = useRef(null)
  var ref2 = useRef(null)
  var ref3 = useRef(null)

  const reff1=()=>{
    setisExpand1(!isExpand1)
    if(ref1.current.style.display==='none'){
      ref1.current.style.display='block'
    }else{
      ref1.current.style.display='none'
    }
  }
  const reff2=()=>{
    setisExpand2(!isExpand2)
    if(ref2.current.style.display==='none'){
      ref2.current.style.display='block'
    }else{
      ref2.current.style.display='none'
    }
  }
  const reff3=()=>{
    setisExpand3(!isExpand3)
    if(ref3.current.style.display==='none'){
      ref3.current.style.display='block'
    }else{
      ref3.current.style.display='none'
    }
  }
  return (
    <div className="carousel-body">
      <div className="w-full flex justify-start group-action-bar flex-gap align-center my-15">
        <div className="group-chevron" onClick={() => (
          reff1())
          }>
          <BiChevronDown
            className={`${isExpand1 ? "hidden" : "block"} w-full h-full`}
          />
          <BiChevronUp
            className={`${isExpand1 ? "block" : "hidden"} w-full h-full`}
          />
        </div>
        <div>
          <h2
            style={{
              fontSize: "0.8rem",
              fontWeight: "400",
              color: "#000",
              marginLeft: "5px",
            }}
          >
            {props.group_name1}
          </h2>
        </div>
      </div>
      <div className="carousel-body flex flex-gap w-80 mx-auto" ref={ref1}>
        <Textbox name='' height='30' label='false'/>
      </div>
      <div className="w-full flex justify-start group-action-bar flex-gap align-center my-15">
        <div className="group-chevron" onClick={() => (
          reff2())
          }>
          <BiChevronDown
            className={`${isExpand2 ? "hidden" : "block"} w-full h-full`}
          />
          <BiChevronUp
            className={`${isExpand2 ? "block" : "hidden"} w-full h-full`}
          />
        </div>
        <div>
          <h2
            style={{
              fontSize: "0.8rem",
              fontWeight: "400",
              color: "#000",
              marginLeft: "5px",
            }}
          >
            {props.group_name2}
          </h2>
        </div>
      </div>
        <div className="carousel-body flex flex-col align-end w-80 mx-auto" ref={ref2}>
          <div className="w-full flex flex-col align-start flex-gap">
            <Textbox name='Summary for Thread A' height='30'label='true'/>
            <Btns name='+ Example'/>
            <Textbox name='Summary for Thread A' height='30' label='true'/>
          </div>
          <Btns name="+ New Thread"/>
        </div>
        <div className="w-full flex justify-start group-action-bar flex-gap align-center my-15">
        <div className="group-chevron" onClick={() => (
          reff3())
          }>
          <BiChevronDown
            className={`${isExpand3 ? "hidden" : "block"} w-full h-full`}
          />
          <BiChevronUp
            className={`${isExpand3 ? "block" : "hidden"} w-full h-full`}
          />
        </div>
        <div>
          <h2
            style={{
              fontSize: "0.8rem",
              fontWeight: "400",
              color: "#000",
              marginLeft: "5px",
            }}
          >
            {props.group_name3}
          </h2>
        </div>
      </div>
        <div className="carousel-body flex flex-col align-end flex-gap w-80 mx-auto" ref={ref3}>
        <Textbox name='' height='30' label='false'/>
          <div className="ic-size" style={{marginTop:'20px',alignSelf:"end"}}><FaSave className="w-full h-full"/></div>
        </div>
    </div>
  );
};

export default Task_7;
