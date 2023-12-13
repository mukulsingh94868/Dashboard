import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutPage = () => {
    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.productReducer);
    const cartItems = cartState.cartItems;

    const SubTotal = cartItems.reduce((x, item) => x + item.price, 0);

    const tokenHander = (token) => {
        // dispatch(placeOrder(token, SubTotal));
    };
    return (
        <>
            <div>
                <StripeCheckout
                    amount={SubTotal * 100}
                    shippingAddress
                    token={tokenHander}
                    stripeKey='pk_test_51JtnAbSCYDML1dwkChRjpFPJfXk3bKgZRsTsSpQ7MZuTSzSsESDlMD6GmOGfoeitMZhVPy171yUsdloZUDTWtNez00amRTOhao'
                    currency='INR'
                >
                    <button className='btn'>Pay Now</button>
                </StripeCheckout>
            </div>
        </>
    )
}

export default CheckoutPage;