import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllOrdersData } from '../../Redux/actions/orderActions';
import moment from 'moment';
import { Button } from '@mui/material';
import './addProduct.css';
import { CSVLink } from 'react-csv';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const OrderList = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const orderState = useSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(GetAllOrdersData());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = orderState?.orders?.filter(order =>
    order?._id.includes(searchQuery) ||
    order?.orderItems[0]?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order?.transactionId.includes(searchQuery) ||
    order?.shippingAddress?.city.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="form-container">
        <div className='exportTech'>
          <div>
            <input type='text' placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
          </div>

          <div>
            <CSVLink data={filteredOrders} filename="data.csv">
              <Button variant='outlined'>Export</Button>
            </CSVLink>
          </div>
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Order Name</StyledTableCell>
              <StyledTableCell>Order Amount</StyledTableCell>
              <StyledTableCell align="center">Transaction ID</StyledTableCell>
              <StyledTableCell align="right">Created</StyledTableCell>
              <StyledTableCell align="right">Updated</StyledTableCell>
              <StyledTableCell align="right">Shipping Address</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders?.map((row, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">{row?._id}</StyledTableCell>
                  <StyledTableCell align="left">{row?.orderItems[0]?.name}</StyledTableCell>
                  <StyledTableCell align="left">{row?.orderAmount}</StyledTableCell>
                  <StyledTableCell align="right">{row?.transactionId}</StyledTableCell>
                  <StyledTableCell align="right">{moment(row?.createdAt).format("DD/MM/YYYY")}</StyledTableCell>
                  <StyledTableCell align="right">{moment(row?.updatedAt).format("DD/MM/YYYY")}</StyledTableCell>
                  <StyledTableCell align="right">{row?.shippingAddress?.city}</StyledTableCell>
                </StyledTableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default OrderList;