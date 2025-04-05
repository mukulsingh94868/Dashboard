import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllOrdersDataByUserId } from '../../../Redux/actions/orderActions';
import './orderScreen.css';

const OrderScreen = () => {
    const dispatch = useDispatch();
    const orderState = useSelector((state) => state.orderReducer);
    const orders = orderState?.orders || [];

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('authId'));
        dispatch(GetAllOrdersDataByUserId(userId));
    }, [dispatch]);

    return (
        <div className='order-container'>
            <Typography variant='h4' align='center' gutterBottom>
                My Orders
            </Typography>
            <hr />

            {orders?.length > 0 ? (
                orders.map((order, index) => (
                    <div className='order-card' key={index}>
                        <div className='order-section'>
                            <h3>Items</h3>
                            {order?.orderItems?.map((item, i) => (
                                <div className='order-item' key={i}>
                                    <Typography><strong>Name:</strong> {item.name}</Typography>
                                    <Typography><strong>Varient:</strong> {item.varient}</Typography>
                                    <Typography><strong>Description:</strong> {item.description}</Typography>
                                    <Typography><strong>Quantity:</strong> {item.quantity}</Typography>
                                    <Typography><strong>Subtotal:</strong> ₹{item.price}</Typography>
                                </div>
                            ))}
                        </div>

                        <div className='order-section'>
                            <h3>Shipping Address</h3>
                            <Typography>Street: {order?.shippingAddress?.street}</Typography>
                            <Typography>City: {order?.shippingAddress?.city}</Typography>
                            <Typography>Country: {order?.shippingAddress?.country}</Typography>
                            <Typography>Pin Code: {order?.shippingAddress?.pincode}</Typography>
                        </div>

                        <div className='order-section'>
                            <h3>Order Info</h3>
                            <Typography><strong>Order Amount:</strong> ₹{order?.orderAmount}</Typography>
                            <Typography><strong>Date:</strong> {order?.createdAt?.substring(0, 10)}</Typography>
                            <Typography><strong>Transaction ID:</strong> {order?.transactionId}</Typography>
                            <Typography><strong>Order ID:</strong> {order?._id}</Typography>
                            <div className={`status-badge ${order?.isDelivered ? 'delivered' : 'pending'}`}>
                                {order?.isDelivered ? 'Delivered' : 'Pending'}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <Typography align='center' variant='h6'>No Orders Found</Typography>
            )}
        </div>
    );
};

export default OrderScreen;
