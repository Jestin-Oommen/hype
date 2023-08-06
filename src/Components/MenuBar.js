import React, { useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import "./MenuBar.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseLeave4 = () => {
    setIsHovering4(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovering4(true);
  };

  const navref = useRef();

  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };

  return (
    <>
    <Link 
          onClick={showNavbar}>
        <AiOutlineUser
          className="dropdown-toggle"
          style={{
            height: 30,
            width: 30,
            cursor: "pointer",
            marginRight: 10,
            color: isHovering4 ? "#33FF95" : "black",
          }}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        /></Link>
      <div className="userOptions" ref={navref}>
        <Link className="userButtons" to="/">
            Dashboard
          </Link>
          <Link className="userButtons" to="/">
            Order History
          </Link>
          <Link className="userButtons" to="/">
            Sign Out
          </Link>
        <button className="user-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      {/* <button className="user-btn" onClick={showNavbar}>
        <AiOutlineUser
          className="dropdown-toggle"
          style={{
            height: 30,
            width: 30,
            cursor: "pointer",
            marginRight: 10,
            color: isHovering4 ? "#33FF95" : "black",
          }}
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        />
      </button> */}
    </>
  );
};

export default MenuBar;
