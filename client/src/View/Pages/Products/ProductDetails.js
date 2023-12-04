import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
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
    console.log('getProductData', getProductData);
    return (
        <>
            <div className={classes.productContainer}>

            </div>
        </>
    )
}

export default ProductDetails;