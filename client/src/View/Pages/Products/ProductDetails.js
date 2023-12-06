import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/joy/Button';
import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDataById } from '../../../Redux/actions/productActions';
import useStyles from './style';


const ProductDetails = () => {
    const { id } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDataById(id));
    }, [id, dispatch]);

    const getProductData = useSelector((state) => state.productReducer.product);
    return (
        <>
            <div className={classes.productContainer}>
                <Grid container spacing={3}>
                    <Grid item container spacing={3}>
                        <div>
                            <Grid item container spacing={3} mt={3}>
                                <Grid item xs={6}>
                                    <div>
                                        <img src={getProductData?.imageUrl} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <Typography className={classes.productName}>{getProductData?.name}</Typography>

                                        <Typography className={classes.productDetails}>This
                                            <span className={classes.productDetailName}> {getProductData?.name} </span> is highly known for its features, like you can control your
                                            apple smartphone with this watch and you can do everything you would want to do on
                                            smartphone
                                        </Typography>

                                        <form>
                                            <div className={classes.varients}>
                                                <div className={classes.colorQuality}>
                                                    <Typography className={classes.colorName}>Color:</Typography>
                                                    <Typography className={classes.colorName2}> {getProductData?.color}</Typography>
                                                </div>

                                                <div className={classes.colorQuality}>
                                                    <Typography className={classes.varientQuantity}> Quantity: </Typography>
                                                    <div className={classes.minusPlus}>
                                                        <AddIcon className={classes.addIcon} />
                                                        <Typography className={classes.productQuantity}>{getProductData?.quantity}</Typography>
                                                        <RemoveIcon className={classes.removeIcon} />
                                                    </div>
                                                </div>

                                                <div className={classes.colorQuality}>
                                                    <Typography className={classes.price}>Price: </Typography>
                                                    <Typography className={classes.salePrice}>{`$${getProductData?.salePrice}`}</Typography>
                                                </div>
                                            </div>

                                            <div className={classes.cartButton}>
                                                <Button className={classes.buyNow}>Buy Now</Button>
                                                <Button className={classes.addToCart}>Add To Cart</Button>
                                            </div>
                                        </form>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item container spacing={3} xs={12} mt={3}>
                        <Grid item xs={8}>
                            <div>
                                <Typography className={classes.feature}>Features</Typography>
                                <div className={classes.featDiv}>
                                    <Typography className={classes.features}>Color: <span className={classes.featuresData}>{getProductData?.color}</span></Typography>
                                    <Typography className={classes.features}>Inch: <span className={classes.featuresData}>{getProductData?.inches}</span></Typography>
                                    <Typography className={classes.features}>Regular Price: <span className={classes.featuresData}>{getProductData?.regularPrice}</span></Typography>
                                    <Typography className={classes.features}>Sale Price: <span className={classes.featuresData}>{getProductData?.salePrice}</span></Typography>
                                    <Typography className={classes.features}>Storage RAM: <span className={classes.featuresData}>{getProductData?.storageRAM}</span></Typography>
                                    <Typography className={classes.features}>Type: <span className={classes.featuresData}>{getProductData?.type}</span></Typography>
                                    <Typography className={classes.features}>Product Id: <span className={classes.featuresData}>{getProductData?._id}</span></Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                            <div>
                                <Typography className={classes.specification}>Specification</Typography>
                                <div className={classes.featDiv}>
                                    <Typography className={classes.features}>Description: <span className={classes.featuresData}>{getProductData?.description}</span></Typography>
                                    <Typography className={classes.features}>Vendor: <span className={classes.featuresData}>{getProductData?.vendor}</span></Typography>
                                    {/* <Typography className={classes.features}>Varients:
                                        <span className={classes.featuresData}>
                                            {Object?.values(getProductData?.varients)?.map((key, value) => {
                                                return (
                                                    <Typography>{`${key},`}</Typography>
                                                )
                                            })}
                                        </span>
                                    </Typography> */}
                                    <Typography className={classes.features}>Varients: <span className={classes.featuresData}>{getProductData?.varients}</span></Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProductDetails;