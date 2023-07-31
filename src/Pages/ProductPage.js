import React, { useEffect } from 'react'
import ProductPreview from '../Components/PRODUCT PREVIEW PAGE COMPONENTS/JS FILES/ProductPreview'
import ProductDetails from '../Components/PRODUCT PREVIEW PAGE COMPONENTS/JS FILES/ProductDetails';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './ProductPage.css';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  useEffect(() => {
    document.title = "Hype - Product Preview";
  }, []);

  // Get the details from params
  const { name, price } = useParams();


  return (
    <>

        <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS'></Navbar>

        <div className="outer_div">
            
            <div className='product_image_div'>
                <ProductPreview></ProductPreview>
            </div>

            <div>
                <ProductDetails name={name} price={price}></ProductDetails>
            </div>
        </div>
        <Footer/>
    </>
  )
}
