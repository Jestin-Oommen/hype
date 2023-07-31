import React, { useEffect, useState } from 'react';
import Imgdes from '../JS FILES/Imgdes';
import ProductCard from '../../PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard';
import '../CSS FILES/bestseller.css';
import { db } from '../../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import {onValue, ref} from 'firebase/database'

export default function Bestseller() {
 
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    try {
      onValue(ref(db, "/Bestsellers/"), snapshot => {
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
      <div className="container-bestseller">
        <p>Bestsellers</p>
      </div>
      <div className="carousel-cards">
        {/* Check if product is defined before mapping */}
        {products &&
          products.map((item, index) => (
            <ProductCard name={item.name} type={item.type} price={item.price} key={index} />
          ))}
      </div>
    </>
  );
}
