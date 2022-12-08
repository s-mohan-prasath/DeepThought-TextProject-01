import React,{useState,useRef} from "react";
import "../styles.css";

// Task Components

import Task_1 from './tasks/task_1'
import Task_2 from './tasks/task_2'
import Task_3 from './tasks/task_3'
import Task_4 from './tasks/task_4'
import Task_5 from './tasks/task_5'
import Task_6 from './tasks/task_6'
import Task_7 from './tasks/task_7'
import Task_8 from './tasks/task_8'
import Task_9 from './tasks/task_9'



// icons

import {BsChevronDown,BsChevronUp} from 'react-icons/bs'


const BodyCarousel = (props) => {

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
    <>
      <div className="w-40 carousel box-shadow">
        <div className="body-header">
          <h1>{props.asset_title}</h1>
        </div>
        <div className="body-wrapper-carousel" ref={body}>
          {props.asset_id===6234 && <Task_1 desc={props.display_asset_reflection}/>}
          {props.asset_id===6235 && <Task_2 group_name='Thread A'/>}
          {props.asset_id===6236 && <Task_3/>}
          {props.asset_id===6237 && <Task_4 link={props.display_asset_docs}/>}
          {props.asset_id===6238 && <Task_5 link={props.display_asset_image}/>}
          {props.asset_id===6239 && <Task_6 desc={props.asset_description}/>}
          {props.asset_id===6240 && <Task_7 group_name1='Introduction' group_name2='Thread A' group_name3='Conclusion'/>}
          {props.asset_id===6241 && <Task_8 link={props.display_asset_url}/>}
          {props.asset_id===6242 && <Task_9 link={props.display_asset_video}/>}
        </div>
        <div className="chevron">
        <div className="group-chevron" onClick={() => (
          hideContent())
          }>
          <BsChevronDown
            className={`${isExpand ? "hidden" : "block"} w-full h-full`}
          />
          <BsChevronUp
            className={`${isExpand ? "block" : "hidden"} w-full h-full`}
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default BodyCarousel;
