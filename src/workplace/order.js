import React, {useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import axios from 'axios';
import moment from 'moment'



const Order = () => {
    const [orderData, setOrderData] = useState([]);


    useEffect(() => {
        getOrder();
      }, []);

    const  getOrder= async ()=> {
        try{
            debugger;
      axios.get(`https://localhost:44325/OrderController/GetOrder`)
      .then(res => {
        debugger;
        const actualOrder = res.data;
        setOrderData(actualOrder);
      })} catch (err) {
      console.log(err);
    }
    }

    return (
        <Box >
        <div textAlign="center">
        <Typography component="h1" variant="h5">
            </Typography>
        </div> 
            <TableContainer >
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell>UserID</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Order</TableCell>
                            <TableCell>Date TIME</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {orderData.map((curElem, index) => {
                            return (
                                <TableRow key={curElem.user + index}>
                                <TableCell> {curElem.id}</TableCell>
                                    <TableCell>{curElem.User}</TableCell>
                                    <TableCell>{curElem.Product}</TableCell>
                                    <TableCell>{curElem.Orders}</TableCell>
                                    <TableCell>{moment(curElem.DateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</TableCell> 
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>)
}

export default Order