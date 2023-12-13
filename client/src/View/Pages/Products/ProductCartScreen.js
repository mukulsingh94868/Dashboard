import React from 'react';
import useStyles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { addToCart, deleteFromCart } from '../../../Redux/actions/productActions';
import CheckoutPage from './CheckoutPage';
import { useNavigate } from 'react-router-dom';

const ProductCartScreen = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartState = useSelector((state) => state.productReducer);
    const cartItems = cartState.cartItems;

    const SubTotal = cartItems.reduce((x, item) => x + item.price, 0);

    return (
        <>
            <Typography className={classes.myCart} style={{ fontSize: '40px !important' }}>My Cart</Typography>
            <div className={classes.cartContainer}>
                {
                    !!cartItems && cartItems?.map((cart, index) => {
                        return (
                            <>
                                <Grid container spacing={3}>
                                    <Grid item xs={5}>
                                        <div>
                                            <img src={cart?.image} alt="" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <div key={index}>
                                            <div className='text-left m-1 w-100' style={{ textAlign: 'justify' }}>
                                                <Typography className={classes.productName}>{cart?.name} [{cart?.varient}]</Typography>

                                                <div className={classes.colorQuality}>
                                                    <Typography className={classes.price}>Price: </Typography>
                                                    <Typography className={classes.salePrice}>{cart?.quantity} * {cart?.prices[0][cart?.varient]} = {cart?.price}</Typography>
                                                </div>

                                                <div className={classes.colorQuality}>
                                                    <Typography className={classes.varientQuantity}> Quantity: </Typography>
                                                    <div className={classes.minusPlus}>
                                                        <AddIcon className={classes.addIcon} onClick={() => dispatch(addToCart(cart, cart?.quantity + 1, cart?.varient))} />
                                                        <Typography className={classes.productQuantity}>{cart?.quantity}</Typography>
                                                        <RemoveIcon className={classes.removeIcon} onClick={() => dispatch(addToCart(cart, cart?.quantity - 1, cart?.varient))} />
                                                    </div>
                                                </div>

                                                <div className={classes.featDiv}>
                                                    <Typography className={classes.features}>Description: <span className={classes.featuresData}>{cart?.description}</span></Typography>
                                                    <Typography className={classes.features}>ID: <span className={classes.featuresData}>{cart?._id}</span></Typography>
                                                </div>
                                            </div>

                                            <div className='m-1 w-100'>
                                                <DeleteIcon className={classes.deleteIcon} onClick={() => dispatch(deleteFromCart(cart))} />
                                            </div>

                                            <Divider className={classes.dividerScale} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </>
                        )
                    })
                }

                <div className={classes.cartButton}>
                    <Button className={classes.buyNow} onClick={() => navigate('/dashboard/products/cart/checkout')}>Buy Now</Button>
                    <Button className={classes.addToCart}>Remove From Cart</Button>
                </div>
            </div >
        </>
    )
}

export default ProductCartScreen;