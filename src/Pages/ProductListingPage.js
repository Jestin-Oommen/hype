import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard';
import CategoryHeader from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/CategoryHeader';
import './ProductListingPage.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { db } from '../Components/config/firebase-config';

import { ref, equalTo, onValue, set } from 'firebase/database'

export default function ProductListingPage() {
  // State to store the products and their count from DB
  const [products, setProducts] = useState([]);
  const [nresults, setNresults] = useState();

  // Use the useParams hook to get the URL parameters
  const { gender, type } = useParams();

  // Use effect to change the title
  useEffect(() => {
    document.title = `Hype - ${gender} ${type}`;

  try {
    if (gender && type) {
      // Create a reference to the 'Products'
      const productsRef = ref(db, 'Products');

      // Fetch all products from the database
      onValue(productsRef, (snapshot) => {
        const allProducts = snapshot.val();

        // Filter the products based on gender and type
        const filteredProducts = Object.values(allProducts).filter((product) => {
          return product.gender === gender && product.type === type;
        });

        // Get the number of matching products
        const dataLength = filteredProducts.length;

        // Update the state with the filtered products and the number of results
        setProducts(filteredProducts);
        setNresults(dataLength);
      });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}, []);

  return (
    <>
    
      <Navbar opt1="MENS" opt2="WOMENS" opt3="KIDS" signoutButton={true} />
      <CategoryHeader category="Oversized T-shirts" nresults={nresults} />

      <div className="product-card-collection">
        {products.map((product, key) => (
          <div key={key}>
            <ProductCard name={product.name} price={product.price} type={type}/>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
