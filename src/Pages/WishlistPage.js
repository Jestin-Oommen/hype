import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MiddleHeader from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/MiddleHeader'
import ProductCard from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard'
import Navbar from '../Components/Navbar'
import './WishlistPage.css'
import Footer from '../Components/Footer'

// Firebase imports
import { db } from '../Components/config/firebase-config'
import { setDoc, doc } from 'firebase/firestore';

export default function WishlistPage() {
  useEffect(() => {
    document.title = "Hype - Wishlist";
  }, []);

  // Fetch the userID from global redux state
  const userID = useSelector(user => {
    try{
      return user.users.users.user.uid
    }
    catch{
      return null
    }})

    // Fetch the wishlist from the global redux state(while signin we are fetching from db and initializing the states with the db data)
    const wishlist = useSelector(state => {
      try{
        console.log(state.wish.wishItems);
        return state.wish.wishItems; 
      }
      catch{
        return []
      }
    })

    

  return (
    <>
        <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS'></Navbar>
        <MiddleHeader heading="Your Wishlist" description="This is the selection of items liked by you the most"></MiddleHeader>

        <div className='product-card-collection'>
          {/* Add a return statement inside the map function */}
          {wishlist.map((item, index) => {
            return <div key={index}><ProductCard name={item.name} price={item.price} type={item.type}></ProductCard></div>
          })}
        </div>
        <Footer/>
    </>
  )
}
