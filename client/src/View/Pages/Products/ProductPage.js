import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../../Redux/actions/productActions';
import Products from './Products';
import { Grid } from '@mui/material';

const ProductPage = () => {
    const dispatch = useDispatch();
    const prodData = useSelector((state) => state.productReducer.product);

    useEffect(() => {
        dispatch(getProductData());
    }, [dispatch]);
    return (
        <>
            <Grid container spacing={3}>
                {
                    !!prodData && prodData?.length !== 0 && prodData?.map((prod) => {
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