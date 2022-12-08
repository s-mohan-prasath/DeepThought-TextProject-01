import "./App.css";
import "./styles.css"
import axios from "axios";
import { useEffect, useState } from "react";

import Btns from "./components/btns";
import BodyCarousel from "./components/bodyCarousel";
import data from './data.json'
import Body from "./body";

//components
import Textbox from "./components/textbox";
import NavBar from "./components/NavBar";
import SideBar from './components/sideBar' 

function App() {
  
  const task = data.tasks;
  const [{task_id,task_title,task_description,assets}] = task;
  const task_list=[];

  for(let i=0;i<assets.length;i++){
    task_list[i]=assets[i].asset_title;
  }

  return (
    <div className="" style={{}}>
      <SideBar list={task_list} task_title={task_title}/>
      <div class="wrapper">
        <div className="wrapper-head"><h1 >You are taking challenges of new Projects</h1></div>
        <NavBar/>
        <div className="container">
          {assets.map((each)=>(
            <BodyCarousel {...each}/>
          ))}
        </div>
        <button style={{backgroundColor:"#0029FF",padding:"10px 30px",color:"#fff",border:"none",fontSize:"1rem", margin:"20px",textAlign:"end"}}>Next</button>
      </div>
    </div>
  );
}

export default App;
