import React, { useEffect } from 'react';
import MiddleHeader from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/MiddleHeader';
import OrderHistoryAggregatedCard from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/OrderHistoryAggregatedCard';
import OrderHistoryCard from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/OrderHistoryCard';
import './OrderHistoryPage.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';

export default function OrderHistoryPage() {
  // Get the orderItems
  const orderItems = useSelector((state) => state.order.orderItems);

  useEffect(() => {
    console.log(orderItems);
    document.title = 'Hype - Order History';
  }, []);

  return (
    <>
      <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS' />
      <MiddleHeader
        heading='Your Order History'
        description='This is the list of items ordered by you previously'
      />
      {orderItems.map((order, index) => (
        <div key={index} className='order-history'>
          <OrderHistoryAggregatedCard order={order} />
          <OrderHistoryCard order={order} />
        </div>
      ))}
      <Footer />
    </>
  );
}
