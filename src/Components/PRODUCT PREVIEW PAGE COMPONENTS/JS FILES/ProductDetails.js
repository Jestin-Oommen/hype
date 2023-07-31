import React from "react";
import "../CSS FILES/ProductDetails.css";
import stars from '../IMAGES/reviews_star.png'
import icontext from '../IMAGES/add_icon_text.png'
import deliveryicon from '../IMAGES/delivery_icon.png'
import giftbox from '../IMAGES/gift_box.png'
import shakehand from '../IMAGES/shake_hand.png'
import payment from '../IMAGES/payment.png'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../../store/slices/CartSlice";

// Firebase imports
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";


export default function ProductDetails(props) {

  // Create a dispatch to send data to the config store
  const dispatch = useDispatch();
  const userID = useSelector(user => {
    try{
      console.log(user.users.users.user.uid)
      return user.users.users.user.uid
    }
    catch{
      return null
    }})

    // Fetch list fof items
    const cartItems = useSelector(state => state.cart.cartItems)
  

  // Function dispatch props to config store using addToCart which creates a slice
  const handleAddToCart = async() =>{
    dispatch(addToCart(props))
    
    await setDoc(doc(db, 'Cart', userID), {cart: cartItems})
  } 

  return (
    <div>
      {/* Outer div of product details */}
      <div className="product_details_div">
        {/* Has name of the product */}
        <div className="product_name_div">
          <h3>{props.name}</h3>
        </div>

        {/* Holds the price and the discount of product */}
        <div className="product_price_div">
          <div>
            <h4>Rs. {props.price}</h4>
          </div>
          <div className="discount_msg">
            <div>
              <b>30% off</b>
            </div>
          </div>
        </div>

        {/* Holds reviews and stars of product */}
        <div className="product_review_div">
          <div>
            <h4>Reviews</h4>
          </div>

          <div className="reviews_stars">
            <div>
              <img src={stars} alt="star review"></img>
            </div>
            <div>
              <img src={stars} alt="star review"></img>
            </div>
            <div>
              <img src={stars} alt="star review"></img>
            </div>
            <div>
              <img src={stars} alt="star review"></img>
            </div>
            <div>
              <img src={stars} alt="star review"></img>
            </div>
          </div>
        </div>

        {/* Holds Colour option of product */}
        <div className="product_colour_div">
          <div>
            <h4>Colour</h4>
          </div>

          <div className="colour_collection">
            <div className="colour_option"></div>
            <div className="colour_option"></div>
            <div className="colour_option"></div>
            <div className="colour_option"></div>
          </div>
        </div>

        <div className="size_text">
          <h4>Sizes</h4>
        </div>

        {/* All the buttons with sizes */}
        <div className="product_size_div">
          <div className="product_size">
            <div className="size_button_div">
              <a href="/">XS</a>
            </div>

            <div className="size_button_div">
              <a href="/">S</a>
            </div>

            <div className="size_button_div">
              <a href="/">M</a>
            </div>
          </div>

          <div className="product_size">
            <div className="size_button_div">
              <a href="/">L</a>
            </div>
            <div className="size_button_div">
              <a href="/">XL</a>
            </div>
            <div className="size_button_div">
              <a href="/">XXL</a>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <div className="add_to_cart_button_div" onClick={handleAddToCart}>
          <div>
            <img src={icontext} alt="icon"></img>
          </div>
        </div>

        {/* 4 points with icons after add button */}
        <div className="product_points_div">
          <div className="sub_points">
            <div className="point">
              <div>
                <img src={deliveryicon} alt="delivery"></img>
              </div>
              <div>
                <p>Standard delivery in 4-7 days</p>
              </div>
            </div>

            <div className="point">
              <div>
                <img src={giftbox} alt="gift box"></img>
              </div>
              <div>
                <p>Get a hamper on your first order</p>
              </div>
            </div>
          </div>

          <div className="sub_points">
            <div className="point">
              <div>
                <img src={shakehand} alt="shake hand"></img>{" "}
              </div>
              <div>
                <p>Product you can trust</p>
              </div>
            </div>

            <div className="point">
              <div>
                <img src={payment} alt="payment"></img>
              </div>
              <div>
                <p>Multiple mode of payments available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
