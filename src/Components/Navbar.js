import React, { useRef, useState } from "react";
import { clearCart } from "../store/slices/CartSlice";
import { clearWishlist } from "../store/slices/WishSlice";
import { clearUser } from "../store/slices/UserSlice";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import "./Navbar.css";
import logo from "./HYPE.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearOrder } from "../store/slices/OrderSlice";

// Firebase import
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase-config";
import MenuBar from "./MenuBar";

const Navbar = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };
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

  // For navigation purposes
  const navigate = useNavigate();

  const [user, setUser] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // Function to signout
  const dispatch = useDispatch();

  const signOutFunc = async () => {
    signOut(auth);

    // Clear the cart state and wishlist state
    dispatch(clearCart([]));
    dispatch(clearWishlist([]));
    dispatch(clearUser([]));
    dispatch(clearOrder([]));

    navigate("/signin");
  };

  // Set default props
  Navbar.defaultProps = {
    opt1: "",
    // opt1: '',
    // opt1: '',
    signoutButton: false,
  };

  
  return (
    <>
      <div className="navbar ">
        <div className="options" ref={navref}>
          <Link className="buttons" to="/Mens">
            {props.opt1}
          </Link>
          <Link className="buttons" to="/Womens">
            {props.opt2}
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="HYPE" />
          </Link>
        </div>

        {/* Signout Button */}
        {props.signoutButton ? (
          <button onClick={signOutFunc}>Sign Out</button>
        ) : (
          <p></p>
        )}

        <div className="icons">
          {/* <Link to="/signin">
            <input type="button" value="Signout" onClick={signOutFunc}>Signin</input>
          </Link> */}
          <Link to="/wishlist">
            <AiOutlineHeart
              style={{
                height: 30,
                width: 30,
                color: isHovering ? "red" : "black",
                marginRight: 10,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
          <Link to="/">
            <AiOutlineSearch
              style={{
                height: 30,
                width: 30,
                color: isHovering2 ? "#33BCFF" : "black",
                marginRight: 10,
              }}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            />
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                color: isHovering3 ? "#ffd700" : "black",
              }}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            />
          </Link>

          {user ? (
            <MenuBar/>
          ) : (
            <Link to="/signin">
              <AiOutlineUserAdd
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
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
