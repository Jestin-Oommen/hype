import React, { useState } from 'react';
import Imgdes from "./Imgdes";
import ProductCard from "../../PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard";
import "../CSS FILES/newin.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database'


export default function Newin() {
    // Collection reference

    const [products, setProducts] = useState([]);
  
    useEffect(() =>{
      try {
        onValue(ref(db, "/New_Ins/"), snapshot => {
          // Fetch the data
          const data = snapshot.val();
  
          console.log(data);
  
          // Update the state
          setProducts(data);
        })
      } 
      catch (error) {
        console.error('Error fetching products:', error);
      }
    }, [])
    
    
    
  return (
    <>
    <div className="container-newin">
        <h1>New In</h1>
    </div>
      <div className="carousel-cards">
          {products && products.map((item, index) => (
            <ProductCard name={item.name} price={item.price} type={item.type} key={index} />
          ))}
      
      </div>
    </>
  );
}
