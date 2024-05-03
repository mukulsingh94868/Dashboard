import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../../Redux/actions/productActions';
import CheckoutPage from './CheckoutPage';
import useStyles from './style';

const ProductCartScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [orderDone, setOrderDone] = useState(false);

    const cartState = useSelector((state) => state.productReducer);
    const cartItems = cartState.cartItems;

    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

    return (
        <>
            <div className={classes.cartContainer}>
                <Typography className={classes.myCart} style={{ fontSize: '40px !important' }}>My Cart</Typography>
                <Grid container spacing={3}>
                    <Grid item container spacing={3} xs={8}>
                        {
                            !!cartItems && cartItems?.map((cart, index) => {
                                return (
                                    <>
                                        <Grid item xs={5} key={index}>
                                            <div>
                                                <img src={cart?.image} alt="" style={{ width: 300, height: 250 }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <div>
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
                                    </>
                                )
                            })
                        }
                    </Grid>

                    <Grid item xs={4}>
                        {
                            !!cartItems && cartItems?.length > 0 ? (
                                <div className={classes.checkOutBox}>
                                    <div className={classes.checkOutBox}>

                                        {
                                            !!orderDone && orderDone ? (
                                                <>
                                                    <div className={classes.orderPlaced}>
                                                        <Typography>Your order is placed Successfully!</Typography>
                                                        <Typography>Go to orders section for more information</Typography>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className={classes.orderSummary}>
                                                        <div className={classes.orderPadd}>
                                                            <Typography style={{ fontWeight: 700 }}>Order Summary</Typography>
                                                        </div>
                                                        <hr />
                                                        <div className={classes.orderPadd}>
                                                            <div className={classes.orderStack}>
                                                                <Typography className={classes.orderTotal1}>Sub Total</Typography>
                                                                <Typography className={classes.orderTotal}>{subTotal}</Typography>
                                                            </div>
                                                            <div className={classes.orderStack}>
                                                                <Typography className={classes.orderTotal1}>Estimated Delivery</Typography>
                                                                <Typography>0</Typography>
                                                            </div>
                                                            <div className={classes.orderStack}>
                                                                <Typography className={classes.orderTotal1}>Voucher</Typography>
                                                                <Typography>0</Typography>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={classes.orderSummary} style={{ marginTop: '20px' }}>
                                                        <div className={classes.orderPadd}>
                                                            <div className={classes.orderStack}>
                                                                <Typography className={classes.orderTotal}>Total</Typography>
                                                                <Typography className={classes.orderTotal}>{subTotal}</Typography>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <CheckoutPage subTotal={subTotal} setOrderDone={setOrderDone} />
                                                </>
                                            )
                                        }

                                    </div>
                                </div>
                            )
                                : <Typography className={classes.noProducts}>No Products Selected</Typography>
                        }
                    </Grid>
                </Grid>
            </div >
        </>
    )
}

export default ProductCartScreen;