import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { initializeCart } from '../../../../src/store/slices/CartSlice'
import "../CSS FILES/HypeCart.css";
import pants from "../IMAGES/pants.png";
import { useEffect } from "react";
// Firebase imports
import { db } from "../../config/firebase-config";
import { set, ref } from "firebase/database";

const HypeCart = () => {
  
  
  // Fetch the user's status
  const userID = useSelector(user => {
    try{
      return user.users.users.user.uid
    }
    catch{
      return null
    }})

     // Fetch the statr from config store using useSelector
    const cartItems = useSelector(state => state.cart.cartItems);

  //create a dispatch to update the items of removal of items
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) =>{
    // Get index of item to remove
    const updatedCart = cartItems.filter(element => element !== item)

    dispatch(initializeCart(updatedCart));

    console.log(cartItems)
  }

    // Use useEffect to listen for changes in cartItems and update Firestore
    useEffect(() => {
      if (userID) {
        // Convert the array to a map
        const cartItemsMap = cartItems.reduce((acc, item, index) => {
          acc[index] = item;
          return acc;
        }, {})

        // Update the DB
        set(ref(db, `Users/${userID}/cart`), cartItemsMap)
      }
    }, [userID, cartItems]); // useEffect will be triggered whenever userID or cartItems change

  return (
    <>
      {/* Shopping header div */}
      <div id="shopping-heading">
        <h1>Shopping bag</h1>
      </div>

      {/* Here we are displaying from reduc, but we must fo it from DB */}
      {cartItems.map((item, index) => ( 
      <div className="item" key={index}>
        {/* Image of the product */}
        <div className="item-image">
          <img src={pants} alt="p1" />
        </div>

        {/* Outer Div of name and price and buttons*/}
        <div className="item-details">
          {/* Holds Item Name and Price and Size and total */}
          <div className="item-heading">
            <h3>{item.name}</h3>
          </div>
          <div className="item_price">
            <p>Rs. {item.price}</p>
          </div>

          {/* Size and price outer div */}
          <div className="size_and_price">
            <div>
              <p>Size: M</p>
            </div>
            <div>
              <p>Total: Rs 2000</p>
            </div>
          </div>

          {/* Outer div of Wishlist button and quantity*/}
          <div className="wish_and_quantity">
            <div>
              <i className="fa-regular fa-heart"></i>
            </div>
            <div>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div>
            <i className="fa-solid fa-xmark" onClick={() => handleRemoveFromCart(item)}></i>
            </div>
          </div>
        </div>
      </div>
      
       ))} 
      
    </>

)};

export default HypeCart;
