import React from 'react'
import '../CSS FILES/category.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Category(props) {

  // Used for navigation to product listing page of given gender and category
  const navigate = useNavigate();

  // Function to route to product listing on click
  const routeToProducts = () =>{  
    navigate(`/products/${props.gender}/${props.type}`);
  }
  return (
    <>
    <div className='prophead'>

    <div className='category-card' onClick={routeToProducts}>
      
      <div className='prop'> <img src={props.imgsrc} alt={props.altimgname} /> </div>   

      <div className='category-card-text'>
        <div className='aval'>AVAILABLE NOW</div>    
        <div className='cat'>{props.category}</div>   
      </div> 
       
    </div>
    
    </div> 
    </>
  )
}
