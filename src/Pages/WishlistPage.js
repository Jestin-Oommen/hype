import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MiddleHeader from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/MiddleHeader'
import ProductCard from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard'
import Navbar from '../Components/Navbar'
import './WishlistPage.css'
import Footer from '../Components/Footer'


export default function WishlistPage() {
  useEffect(() => {
    document.title = "Hype - Wishlist";
  }, []);

  // ---------------- Handles Add To Cart & Wishlist -------------------

  // Fetch the global wishlist state
  const wishlist = useSelector(state => {
    try{
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
