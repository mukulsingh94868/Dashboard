import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import React, { useEffect, useState } from 'react';
import ProductForm from './AddProducts';
import { useSelector, useDispatch } from 'react-redux';
import { getProductData } from '../../Redux/actions/productActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

const ProductList = () => {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch();

    const prodData = useSelector((state) => state?.productReducer?.product);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = prodData?.filter(prod =>
        prod?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod?.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod?.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod?.vendor.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    useEffect(() => {
        dispatch(getProductData());
    }, [dispatch]);

    return (
        <div className="form-container">
            <Button onClick={() => setOpen(true)}>Add Product</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ProductForm />
            </Modal>

            <div style={{ margin: '20px 0' }}>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ padding: '10px', width: '100%' }}
                />
            </div>

            <TableContainer component={Paper} style={{ height: 650, overflowY: 'auto' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Quantity&nbsp;(g)</TableCell>
                            <TableCell align="right">Sale Price&nbsp;(g)</TableCell>
                            <TableCell align="right">Regular Price&nbsp;(g)</TableCell>
                            <TableCell align="right">Type&nbsp;(g)</TableCell>
                            <TableCell align="right">Vendor&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts?.map((prod, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Avatar alt="Travis Howard" src={prod?.imageUrl} />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {prod?.name}
                                </TableCell>
                                <TableCell align="right">{prod?.color}</TableCell>
                                <TableCell align="right">{prod?.quantity}</TableCell>
                                <TableCell align="right">{prod?.salePrice}</TableCell>
                                <TableCell align="right">{prod?.regularPrice}</TableCell>
                                <TableCell align="right">{prod?.type}</TableCell>
                                <TableCell align="right">{prod?.vendor}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductList
