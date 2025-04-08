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
import { Button, Typography } from '@mui/material';
import { CSVLink } from 'react-csv';
import './addProduct.css';

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
  const orders = orderState?.orders?.orders || [];

  useEffect(() => {
    dispatch(GetAllOrdersData());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOrders = orders?.length > 0
    ? orders.filter((order) =>
    (order?._id?.includes(searchQuery) ||
      order?.orderItems?.[0]?.name?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
      order?.transactionId?.includes(searchQuery) ||
      order?.shippingAddress?.city?.toLowerCase()?.includes(searchQuery.toLowerCase()))
    )
    : [];
  return (
    <div className="form-container">
      <div className='exportTech'>
        <div>
          <input type='text' placeholder='Search' value={searchQuery} onChange={handleSearchChange} />
        </div>

        <div>
          <CSVLink data={filteredOrders?.length > 0 ? filteredOrders : []} filename="orders.csv">
            <Button variant='outlined' disabled={filteredOrders.length === 0}>Export</Button>
          </CSVLink>
        </div>
      </div>

      {/* Show message if no orders exist */}
      {orders.length === 0 ? (
        <Typography variant="h6" style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          No Orders Found
        </Typography>
      ) : (
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
            {filteredOrders.length > 0 ? (
              filteredOrders.map((row, index) => (
                <StyledTableRow key={row?._id || index}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{row?._id || "N/A"}</StyledTableCell>
                  <StyledTableCell>{row?.orderItems?.[0]?.name || "N/A"}</StyledTableCell>
                  <StyledTableCell>{row?.orderAmount || "N/A"}</StyledTableCell>
                  <StyledTableCell align="right">{row?.transactionId || "N/A"}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row?.createdAt ? moment(row?.createdAt).format("DD/MM/YYYY") : "N/A"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row?.updatedAt ? moment(row?.updatedAt).format("DD/MM/YYYY") : "N/A"}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row?.shippingAddress?.city || "N/A"}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} style={{ textAlign: "center", color: "red" }}>
                  No matching orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default OrderList;