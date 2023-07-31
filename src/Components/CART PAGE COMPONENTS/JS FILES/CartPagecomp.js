import React from 'react'
import HypeCart from './HypeCart'
import PaymentPortal from './PaymentPortal'
import '../CSS FILES/CartPage.css'

export default function CartPagecomp() {
  return (
    <div className='cart-page'>
        <div id='items'><HypeCart/></div>
        <div id='payment'><PaymentPortal/></div>
    </div>
  )
}
