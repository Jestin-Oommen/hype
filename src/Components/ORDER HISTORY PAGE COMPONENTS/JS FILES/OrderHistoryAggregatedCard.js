import React from 'react';
import '../CSS FILES/OrderHistoryAggregated.css';

export default function OrderHistoryAggregatedCard({ order }) {
  return (
    <div>
      {/* The outer main component holding details of aggregated order */}
      <div className='outer-heading'>
        <div>
          <p>Order Placed: {order.orderPlacedDate}</p>
        </div>
        <div>
          <p>Total: {order.amount}</p>
        </div>
        <div>
          <p>Shipped to: {order.shippingAddress}</p>
        </div>
        <div>
          <p>Order ID: {order.orderID}</p>
        </div>
        <div>
          <p>Order Status: {order.orderStatus}</p>
        </div>
      </div>
    </div>
  );
}
