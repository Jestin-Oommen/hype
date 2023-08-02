import React,{ useRef, useState} from "react";
import { clearCart } from '../store/slices/CartSlice';
import { clearWishlist } from '../store/slices/WishSlice';
import { clearUser } from '../store/slices/UserSlice';
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";
import logo from './HYPE.png'
import searchicon from './search.png'
import carticon from './cart.png'
import usericon from './user.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {clearOrder} from '../store/slices/OrderSlice';


// Firebase import 
import {signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "./config/firebase-config"

const Navbar = (props) => {
  const navref = useRef();

  const showNavbar = () =>{
    navref.current.classList.toggle("responsive_nav");
  }

  // For navigation purposes
  const navigate = useNavigate();

   const [user, setUser] = useState();

   onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
  })

  
  // Function to signout
  const dispatch = useDispatch();

  const signOutFunc = async() => {
    signOut(auth);

    // Clear the cart state and wishlist state
    dispatch(clearCart([]));
    dispatch(clearWishlist([]));
    dispatch(clearUser([]));
    dispatch(clearOrder([]));

    navigate('/signin');
   }

  // Set default props
    Navbar.defaultProps = {
    opt1: '',
    opt1: '',
    opt1: '',
    signoutButton: false
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
            <FaTimes/>
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="HYPE" />
          </Link>
        </div>

        
        {/* Signout Button */}
        {props.signoutButton?<button onClick={signOutFunc}>Sign Out</button>:<p></p>}


        <div className="icons">
          {/* <Link to="/signin">
            <input type="button" value="Signout" onClick={signOutFunc}>Signin</input>
          </Link> */}
          <Link to="/wishlist">
            <div>❤️</div>
          </Link>
          <Link to="/">
            <img src={searchicon} alt="HYPE" />
          </Link>
          <Link to="/cart">
            <img src={carticon} alt="HYPE" />
          </Link>
          
            {user?
            (<img src={usericon} alt="HYPE" />)
            :
            (<Link to="/signin"><b>Log In</b></Link>)}
          
          
        </div>
      </div>
    </>
  );
};

export default Navbar;



