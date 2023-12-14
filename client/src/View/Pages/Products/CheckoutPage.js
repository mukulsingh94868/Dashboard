import Button from '@mui/joy/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import useStyles from './style';
import { PlacedOrderData } from '../../../Redux/actions/orderActions';

const CheckoutPage = ({ subTotal }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const tokenHander = (token) => {
        dispatch(PlacedOrderData(token, subTotal));
    };
    return (
        <>
            <div className={classes.checkout}>
                <StripeCheckout
                    amount={subTotal * 100}
                    shippingAddress
                    token={tokenHander}
                    stripeKey='pk_test_51JtnAbSCYDML1dwkChRjpFPJfXk3bKgZRsTsSpQ7MZuTSzSsESDlMD6GmOGfoeitMZhVPy171yUsdloZUDTWtNez00amRTOhao'
                    currency='INR'
                >
                    <Button className={classes.checkoutPage}>Buy Now</Button>
                </StripeCheckout>
            </div>
        </>
    )
}

export default CheckoutPage;