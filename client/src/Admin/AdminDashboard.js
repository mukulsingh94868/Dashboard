import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import CircularProgress from '@mui/joy/CircularProgress';
import IconButton from '@mui/joy/IconButton';
import SvgIcon from '@mui/joy/SvgIcon';
import Typography from '@mui/joy/Typography';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:5000/api/auth/getData');
            const result = await response.json();
            setData(result);
        };

        getData();
    }, []);
    return (
        <>
            {/* <h1 style={{ color: '#ccc', textAlign: 'center' }}>Welcome to Admin Dashboard</h1>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div>
                        <h2>{data?.length}</h2>00000000000
                        <Typography variant='h5'>Users</Typography>
                    </div>
                </Grid>
            </Grid> */}
            <div class="Dashcontainer">
                <div class="Dashcontainer1">
                    <div class="layer layer-1">
                        <Card variant="solid" color="primary" invertedColors>
                            <CardContent orientation="horizontal">
                               
                                <IconButton
                                    variant="outlined"
                                    size="sm"
                                    sx={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}
                                >
                                    <BookmarkOutlinedIcon />
                                </IconButton>
                                <CircularProgress size="lg" determinate value={data?.length / 100}>
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

                                    <Typography level="body-md">Total User</Typography>
                                    <Typography level="h2">{data?.length}</Typography>
                                </CardContent>
                            </CardContent>
                            <CardActions>
                                
                                

                               
                                    <Button variant="solid" size="md">
                                    <Link className='LinkColorLight' to="/dashboard/user-management/"  >
                                        View User List

                                        </Link>
                                    </Button>
                              

                            </CardActions>
                        </Card>

                    </div>
                    {/* <div class="layer layer-2">Layer 2</div>
                    <div class="layer layer-2">Layer 2</div>
                    <div class="layer layer-3">Layer 3</div>
                    <div class="layer layer-4">Layer 4</div> */}

                </div>
                {/* <div class="Dashcontainer2">
                    <div class="layer layer-5">Layer 5</div>
                    <div class="layer layer-6">Layer 6</div>
                    <div class="layer layer-7">Layer 7</div>
                </div > */}
                {/* <div class="Dashcontainer3">
                    <div class="layer layer-8">Layer 8</div>
                    <div class="layer layer-9">Layer 9</div>
                    <div class="layer layer-10">Layer 10</div>
                </div > */}

                {/* <div class="Dashcontainer4">
                    <div class="layer layer-8">Layer 8</div>
                    <div class="layer layer-9">Layer 9</div>
                    <div class="layer layer-10">Layer 10</div>
                </div > */}
            </div>


        </>
    )
}

export default AdminDashboard;