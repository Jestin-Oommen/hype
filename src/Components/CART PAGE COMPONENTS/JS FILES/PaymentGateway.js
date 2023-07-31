import React from 'react';
import {ref, set, onValue} from 'firebase/database';


export default async function PaymentGateway(paymentInfo) {

    console.log(`total cost ${paymentInfo.totalCostInPaisa}`);

    // const data = await fetch('http://localhost:5000/razorpay', {
    //     method: 'POST',
    // }).then((t) => t.json())
    const data = await fetch('http://localhost:5000/razorpay', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        amount: paymentInfo.totalCostInPaisa // Replace this with the actual amount you want to pass
    })
}).then((response) => response.json());

    console.log(data); // The response data from the server will be logged here

    // options
    const options = {
        key: process.env.RAZORPAY_ID_KEY,
        currency: data.currency,
        amount: paymentInfo.totalCostInPaisa,
        description: data.description,
        order_id: data.id,
        image: 'http://localhost:5000/HYPE.png',
        
        // Things to do after payment is done
        handler: function (response) {
            alert("Payment ID" + response.razorpay_payment_id);
            alert("Order ID" + response.razorpay_order_id);

            // Reference of db
        },

        prefill:{
            name: "paddy",
            email: "paddy@gmail.com",
            contact:'9876546787'
        }

    };

    // Display the window
    const paymentObject = new window.Razorpay(options)

    paymentObject.open();

  return (
    <div></div>
  )
}
