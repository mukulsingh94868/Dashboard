import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductDataById } from '../../../Redux/actions/productActions';
import useStyles from './style';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ProductDetails = () => {
    const { id } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDataById(id));
    }, [id, dispatch]);

    const getProductData = useSelector((state) => state.productReducer.product);
    console.log('getProductData', getProductData);
    return (
        <>
            <div className={classes.productContainer}>
                <Grid container spacing={3}>
                    <Grid item container spacing={3}>
                        <div>
                            <Grid item container spacing={3}>
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
                                                    <Typography className={classes.colorName}>Color</Typography>
                                                    <Typography className={classes.colorName}>{getProductData?.color}</Typography>
                                                </div>

                                                <div className={classes.colorQuality}>
                                                    <Typography className='varientQuantity'>
                                                        Quantity:
                                                    </Typography>
                                                    <div>
                                                        <AddIcon className='addBtn' />
                                                        <b>{getProductData?.quantity}</b>
                                                        <RemoveIcon className='removeBtn' />
                                                    </div>
                                                </div>

                                                <div className={classes.colorQuality}>
                                                    <Typography>{`$${getProductData?.salePrice}`}</Typography>
                                                </div>
                                            </div>

                                            <div>

                                            </div>
                                        </form>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ProductDetails;