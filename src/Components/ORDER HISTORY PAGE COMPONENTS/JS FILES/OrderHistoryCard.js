import React from 'react';
import '../CSS FILES/OrderHistoryCard.css';
import img from '../IMAGE/white_tshirt.png';
import { Link } from 'react-router-dom';

export default function OrderHistoryCard({ order }) {
  return (
    <div>
      {/* Represents an order item */}
      {order.itemsOrdered.map((item, index) => (
        <div key={index} className='order-item'>
          {/* Holds the product information */}
          <div className='order-item-information'>
            {/* Holds the date and image of product */}
            <div className='order-item-date-image'>
              <div>
                <p>Delivered {item.deliveryDate}</p>
              </div>
              <div>
                <img src={img} alt='cloth' />
              </div>
            </div>
            {/* Holds order items title and main buttons */}
            <div className='order-item-name-button'>
              {/* Holds the title */}
              <div>
                <p>{item.name}</p>
              </div>
              {/* Holds the buy again and view item buttons */}
              <div className='order-item-name-button-buttons'>
                <div className='buy-again-button'>
                  <Link to='/orderhistory'>Buy Again</Link>
                </div>
                <div className='view-item-button'>
                  <Link to='/orderhistory'>View this item</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Holds the buttons for the product */}
          <div className='order-item-buttons'>
            <Link to='/orderhistory'>
              <div className='rate-product-button'>Rate the product</div>
            </Link>
            <Link to='/orderhistory'>
              <div className='feedback-button'>Leave a feedback</div>
            </Link>
            <Link to='/orderhistory'>
              <div className='report-issue-button'>Report an issue</div>
            </Link>
            <Link to='/orderhistory'>
              <div className='invoice-button'>Download order invoice</div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
