import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import axios from 'axios';

const ProductDetails = () => {
  const [formData, setformData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  // const getProduct = async () => {
  //   try {
  //     const data = await fetch(`https://localhost:44325/ProductController/GetProduct`);
  //     const actualData = await data.json();
  //     setformData(actualData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getProduct = async () => {
    try {
      debugger;
      axios.get(`https://localhost:44325/ProductController/GetProduct`)
        .then(res => {
          debugger;
          const actualData = res.data;
          setformData(actualData);
        })
    } catch (err) {
      console.log(err);
    }
    };

    return (
      <Box >
        <div textAlign="center">
          <Typography component="h1" variant="h5">
          </Typography>
        </div>
        <TableContainer >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow >
                <TableCell >UserID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {formData.map((curElem, index) => {
                return (
                  <TableRow key={curElem.user + index}>
                    <TableCell> {curElem.id}</TableCell>
                    <TableCell>{curElem.ProductName}</TableCell>
                    <TableCell>{curElem.ProductType}</TableCell>
                    <TableCell>{curElem.ProductPrice}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }
export default ProductDetails
