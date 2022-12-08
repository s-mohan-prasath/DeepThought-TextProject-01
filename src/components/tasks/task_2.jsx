import React,{useState,useRef} from "react";
import "../../styles.css";
import GroupCarousel from "../groupCarousel";

// components

import Textbox from "../textbox";
import Dropdown from "../dropdown";
import Btns from "../btns";

// icons

import { AiFillBulb } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";
import { FaPenFancy, FaSave } from "react-icons/fa";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Task_2 = (props) => {
  const [isExpand, setisExpand] = useState(true);
  var body=useRef(null);
  const hideContent=()=>{
    setisExpand(!isExpand)
    if(body.current.style.display==='none'){
      body.current.style.display='block'
    }else{
      body.current.style.display='none'
    }
  }
  return (
    <div className="w-full">
      <div className="w-full flex justify-start group-action-bar flex-gap align-center my-15">
        <div className="group-chevron" onClick={() => (
          hideContent())
          }>
          <BiChevronDown
            className={`${isExpand ? "hidden" : "block"} w-full h-full`}
          />
          <BiChevronUp
            className={`${isExpand ? "block" : "hidden"} w-full h-full`}
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
            {props.group_name}
          </h2>
        </div>
      </div>
      <div className="carousel-body" ref={body}>
        <div className="flex flex-gap my-15">
          <Textbox name="sub thread 1" height="30" label='true'/>
          <Textbox name="sub interpretation 1" height="30" label='true'/>
        </div>
        <div className="flex justify-end my-15">
          <div className="ic-size">
            <AiFillBulb className="w-full h-full" />
          </div>
          <div className="ic-size">
            <MdComment className="w-full h-full" />
          </div>
          <Dropdown
            name="category"
            list={["select category", "item1", "item2", "itme3", "item4"]}
          />
          <Dropdown
            name="process"
            list={["select process", "item1", "item2", "itme3", "item4"]}
          />
        </div>
        <Btns name="+ Sub thread" className="my-15" />
        <Textbox name="Summary for Thread A" height="30" className="my-15" label='true' />
        <div className="flex justify-between my-15">
          <div className="flex align-center">
            <FiLink2 />
            <p>
              Thread Credit <FaPenFancy />
            </p>
          </div>
          <div className="">
            <Dropdown
              name="process"
              list={["select emotion", "item1", "item2", "itme3", "item4"]}
            />
          </div>
        </div>
        <div className="flex flex-col align-end flex-gap">
          <Btns name="+ New Thread" />
          <div className="ic-size">
            <FaSave className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task_2;
