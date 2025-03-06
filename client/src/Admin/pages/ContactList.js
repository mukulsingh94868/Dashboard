import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactListData } from "../../Redux/actions/contactActions";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ContactList = () => {
    const dispatch = useDispatch();

    const contactData = useSelector((state) => state?.contactReducer?.contact);

    useEffect(() => {
        dispatch(getContactListData());
    }, []);
    return (
        <>
            <div className="form-container">
                <h1>Contact List</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.No</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email&nbsp;</TableCell>
                                <TableCell align="right">Subject&nbsp;</TableCell>
                                <TableCell align="right">Message&nbsp;</TableCell>
                                <TableCell align="right">Updated At&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contactData?.data?.map((row, index) => (
                                <TableRow
                                    key={row.name}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.subject}</TableCell>
                                    <TableCell align="right">{row.message}</TableCell>
                                    <TableCell align="right">{row.createdAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
};

export default ContactList;