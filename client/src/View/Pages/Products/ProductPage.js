import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../../Redux/actions/productActions';
import Products from './Products';
import { Grid } from '@mui/material';
import useStyles from './style';

const ProductPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const prodData = useSelector((state) => state.productReducer.product);

    useEffect(() => {
        dispatch(getProductData());
    }, [dispatch]);
    return (
        <>
            <Grid container spacing={3}>
                {
                    !!prodData && prodData?.map((prod) => {
                        return (
                            <Products prod={prod} />
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default ProductPage