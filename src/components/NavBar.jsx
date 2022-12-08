import React from "react";
import { MdHome } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { BsFillBellFill, BsThreeDotsVertical } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="w-full flex align-center" style={{ backgroundColor: "gray" }}>
      <div className="logo">
        <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" className="w-full"/>
      </div>
      <div className="flex flex-gap">
        <div className="nav-icon">
          <MdHome className="w-full h-full" />
        </div>
        <div className="nav-icon">
          <FaTools className="w-full h-full" />
        </div>
        <div className="nav-icon">
          <BsFillBellFill className="w-full h-full" />
        </div>
        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg" style={{width:"30px",height:"30px",borderRadius:"50%",objectFit:"cover"}}/>
        <div className="nav-icon">
          <BsThreeDotsVertical className="w-full h-full" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
