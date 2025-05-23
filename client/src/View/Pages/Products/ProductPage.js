import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../../Redux/actions/productActions';
import Products from './Products';
import { Grid } from '@mui/material';

const ProductPage = () => {
    const dispatch = useDispatch();
    const prodData = useSelector((state) => state?.productReducer?.product ?? []);

    useEffect(() => {
        dispatch(getProductData());
    }, [dispatch]);
    return (
        <Grid container spacing={3}>
            {
                !!prodData && Array.isArray(prodData) && prodData?.map((prod, index) => {
                    return (
                        <Products prod={prod} index={index} />
                    )
                })
            }
        </Grid>
    )
}

export default ProductPage