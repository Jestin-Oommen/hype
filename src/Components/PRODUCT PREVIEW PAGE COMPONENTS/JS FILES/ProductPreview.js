import React from 'react'
import '../CSS FILES/ProductPreview.css'
import model1 from '../IMAGES/model1.jpg'
import model2 from '../IMAGES/model2.webp'
import model3 from '../IMAGES/model3.webp'
import model4 from '../IMAGES/model4.webp'
import model5 from '../IMAGES/model5.webp'



export default function ProductPreview() {

    
  return (
    <div>
        {/* Outer Div Of Product Image */}
        <div className='product_image_div'>
            
            {/* First image of product */}
            <div className='product-main-image'><img src={model1} alt='model1'/></div>

            {/* Div holding grid of images */}
            <div className="product_image_grid_div">

                <div className='product_image_grid'>
                    <div className='grid_f'><img src={model2} alt='model2'/></div>
                    <div><img src={model3} alt='model3'/></div>
                </div>
                
                <div className='product_image_grid'>
                    <div className='grid_f'><img src={model4} alt='model4'/></div>
                    <div><img src={model5} alt='model5'/></div>
                </div>
                
            </div>

            {/* Last image of the product */}
            <div>
                <img src={model2} alt='model2'/>
            </div>

        </div>

    </div>
  )
}



