import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../CSS FILES/ProductCard.css';
import modelimg from '../IMAGES/card_model.png';
import cart_icon from '../../cart.png';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../store/slices/CartSlice';
import { addToWishlist } from '../../../store/slices/WishSlice';
import {db} from "../../config/firebase-config"
import { useEffect } from 'react';

// Firebase imports
import { doc, setDoc } from "firebase/firestore";

export default function ProductCard(props) {
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
  } 

// Use useEffect to listen for changes in cartItems and update Firestore
    useEffect(() => {
      if (userID) {
        // Check if cart is empty
        console.log(cartItems);
        setDoc(doc(db, 'Cart', userID), { cart: cartItems }).then(() => {
          // Handle any additional logic or UI updates after Firestore is updated
        }).catch((error) => {
          console.error('Error updating Firestore:', error);
        });
      }
    }, [userID, cartItems]); // useEffect will be triggered whenever userID or cartItems change

  // 28 july productcard
  // Fetch the wishlist from the global redux state(while signin we are fetching from db and initializing the states with the db data)
   // Function to execute on click of addToWishlist
   const handleAddToWishList = async() =>{
    dispatch(addToWishlist(props))
  }

  const wishlist = useSelector(state => {
    try{
      return state.wish.wishItems; 
    }
    catch{
      return []
    }
  })

  useEffect(() => {
    if (userID) {
    // Sync the DB with redux state
    setDoc(doc(db, 'Wishlist', userID), { wishlist: wishlist }).then(() => {
        // Handle any additional logic or UI updates after Firestore is updated
      }).catch((error) => {
        console.error('Error updating Firestore:', error);
      });
    }
  }, [userID, wishlist]); // useEffect will be triggered whenever userID or cartItems change

  // Function to handle click on product
  const navigate = useNavigate();
  const handleProductClick = () =>{
    navigate(`/products/preview/${props.name}/${props.price}`);
  }

  return (
    <>
      <div className='product-card'>
        <div className='product-image' onClick={handleProductClick}>
          <img src={modelimg} alt='model' />
        </div>

        <div className='product-details'>
          <div className='product-name'>
            <p>{props.name}</p> {/* Use props.name instead of props.Name */}
          </div>

          <div className='product-price'>
            <p>Rs. {props.price}</p> {/* Use props.price instead of props.Price */}
          </div>

          <div className="cart-button-div">
            <button onClick={handleAddToCart}>
              <img src={cart_icon}></img>
            </button>
          </div>

          <div className="wishlist-button-div">
            <button onClick={handleAddToWishList}>
              ❤️
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
