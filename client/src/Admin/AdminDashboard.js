import React, { useEffect, useState } from 'react';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductData } from '../Redux/actions/productActions';
import { GetAllOrdersData } from '../Redux/actions/orderActions';
import MapComponent from '../Compoments/MapComponent';

const AdminDashboard = () => {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const prodData = useSelector((state) => state?.productReducer?.product);
    const orderState = useSelector((state) => state.orderReducer);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:5000/api/auth/getData');
            const result = await response.json();
            setData(result);
        };

        getData();
        dispatch(GetAllOrdersData());
        dispatch(getProductData());
    }, [dispatch]);

    const cardData = [
        {
            title: 'Total User',
            count: data?.length,
            progressValue: data?.length / 100,
            link: '/dashboard/user-management',
            buttonText: 'View User List'
        },
        {
            title: 'Total Products',
            count: prodData?.length,
            progressValue: prodData?.length / 100,
            link: '/dashboard/products-list',
            buttonText: 'View Product List'
        },
        {
            title: 'Total Orders',
            count: orderState?.orders?.length,
            progressValue: orderState?.orders?.length / 100,
            link: '/dashboard/orders-list',
            buttonText: 'View Order List'
        }
    ];

    return (
        <div className="Dashcontainer">
            <div className="Dashcontainer1">
                {cardData.map((card, index) => (
                    <div className="layer layer-1" key={index}>
                        <Card variant="solid" color="primary" invertedColors>
                            <CardContent orientation="horizontal">
                                <IconButton
                                    variant="outlined"
                                    size="sm"
                                    sx={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}
                                >
                                    <BookmarkOutlinedIcon />
                                </IconButton>
                                <CircularProgress size="lg" determinate value={card.progressValue}>
                                    <SvgIcon>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                            />
                                        </svg>
                                    </SvgIcon>
                                </CircularProgress>
                                <CardContent>
                                    <Typography level="body-md">{card.title}</Typography>
                                    <Typography level="h2">{card.count}</Typography>
                                </CardContent>
                            </CardContent>
                            <CardActions>
                                <Button variant="solid" size="md">
                                    <Link className="LinkColorLight" to={card.link}>
                                        {card.buttonText}
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}

                <div className='layer layer-1'>
                    <MapComponent />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
