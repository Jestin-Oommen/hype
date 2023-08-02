import React from 'react'
import '../CSS FILES/PaymentPortal.css'
import cod from '../IMAGES/cash-on-delivery 1.png'
import rupay from '../IMAGES/rupay 1.png'
import visa from '../IMAGES/visa 1.png'
import gpay from '../IMAGES/google-pay 1.png'
import razorpay from '../IMAGES/razorpaypng 1.png'
import mastercard from '../IMAGES/mastercard 1.png'
import { useSelector, useDispatch } from 'react-redux';
import {ref, set, onValue} from 'firebase/database';
import { useEffect } from 'react'
// import axios from 'axios'
import PaymentGateway from './PaymentGateway' 
import { db } from '../../config/firebase-config'
import { useNavigate } from 'react-router-dom'
import {paymentUpdate} from '../../../store/slices/OrderSlice'

export default function PaymentPortal() {
    // Script loading function
    function loadScript(src) {
      return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
              resolve(true);
          };
          script.onerror = () => {
              resolve(false);
          };
          document.body.appendChild(script);
      });
}

  useEffect(() => {
    async function initializeRazorpay() {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
      }
    }

    
    initializeRazorpay();
  }, []);


    // Fetching the userID of user logged in
    const userID = useSelector(state => state.users.userID);
    console.log(userID)
    
        // Fetch the statr from config store using useSelector
        const cartItems = useSelector(state => state.cart.cartItems);

        // Calculate the sum of items price
        let orderValue = cartItems.reduce((sum, item) => sum + item.price, 0);
        let deliveryCost = 150;
        let totalCost = orderValue + deliveryCost;
        let totalCostInPaisa = totalCost * 100;

        // Object to pass to payment gateway
        const paymentInfo = {
          "totalCostInPaisa":totalCostInPaisa,
          "userID": userID,
          "itemsOrdered": cartItems,
          'dispatch': useDispatch(),
          "uniqueProducts": cartItems.length
        }
        
    // Create a dispatcher
    const dispatch = useDispatch();

    // Get the order history state
    const orderItems = useSelector(state => state.order.orderItems)
      
    // Get the item ordered status(payment status)
    const paymentStatus = useSelector(state => state.order.paymentStatus)
    
    console.log(paymentStatus)

    // For navigation
    const navigate = useNavigate();

    // UseEffect to trach the redux state
    useEffect(() => {
      // If user is logged in and the payment is successful(item is ordered) update the db
        if(userID && paymentStatus==1){
            // Convert the arrap yo a map
          const orderItemsMap = orderItems.reduce((acc, item, index) => {
            acc[index] = item;
            return acc;
          }, {})
          
        // Update the DB
        set(ref(db, `Users/${paymentInfo.userID}/order`), orderItemsMap)

        // Update the paymentStatus back to 0
        dispatch(paymentUpdate(0))
        
        console.log(paymentStatus);
        // Navigate to order history
        navigate('/orderhistory')
          
        }            
      }, [paymentStatus]);



  return (
    <div>
        {/* Outer portion of the payment div */}
        <div className="payment_div">
                <div className="discount_div">
                    <div><p>Discounts</p></div>
                    <div><p>Apply discount</p></div>
                </div>

                {/* Holds login button */}
                {userID?<p></p>:(
                    <div className="login_div">
                        <div><button><b>Login</b></button></div>
                    </div>)}

                {/* Holds the order statement*/}
                <div className="order_div">
                    <div className="order_val_div">
                        <div className='order_value'><p> Order Value</p></div>
                        <div className='order_price'><p>₹‎{orderValue}</p></div>
                    </div>

                    {/* delivery and money */}
                    <div className='delivery_division'>
                        <div><p> Delivery</p></div>
                        <div className='order_price'><p>₹‎{deliveryCost}</p></div>
                    </div>

                    <div><hr /></div> 
                    
                    <div className="total_div">
                        <div><b>Total</b></div>
                        <div><b>₹‎{totalCost}</b></div>
                    </div>
                </div>

                {/* Holds the checkout button */}
                <div className="checkout_div" onClick={() => PaymentGateway(paymentInfo)}>
                    <div>Continue to checkout</div>
                </div>

                {/* Holds the payment header and icons */}
                <div className="payment_opt_div">
                    {/* Holds the WE ACCEPT heading */}
                    <div className="payment_heading_div">
                        <p>We Accept</p>
                    </div>

                    {/* Holds the icons of payments */}
                    <div className="payment_icons_div">
                        <div><img id='cod-icon' src={cod} alt="cash-on-delivery" /></div>
                        <div><img id='rupay-icon' src={rupay} alt="rupay" /></div>
                        <div><img id='visa-icon' src={visa} alt="visa" /></div>
                        <div><img id='gpay-icon' src={gpay} alt="google-pay" /></div>
                        <div><img id='razor-icon' src={razorpay} alt="razorpaypng" /></div>
                        <div><img id='master-icon' src={mastercard} alt="mastercard" /></div>
                    </div>
                </div>
            </div>
    </div>
  )
}
