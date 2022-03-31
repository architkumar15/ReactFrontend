import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import './order.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from '../images/light-blu.jpg';
import Paper from '@mui/material/Paper';


const styles = {
    paperContainer: {
        height: 780,
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
};
const theme = createTheme();
const order = {
    user: "",
    product: "",
    orders: 0
}
const buttons = {
    saveButton: true,
    resetButton: true,
    updateButton: false
}


const Operation = () => {
    const [userNameData, setNameData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [orderData, setOrderData] = useState({});
    const [orderList, setOrderList] = useState([]);
    const [orderDetails, setOrderDetail] = useState({ ...order });
    const [index, setIndex] = useState(-1);
    const [Id, setId] = useState();
    const [hideButton, setHideButton] = useState({buttons});

    toast.configure();

    useEffect(() => {
        getUser();
        getProduct();
    }, []);

    const getUser = async () => {
        try {
            const data = await fetch(`https://localhost:44325/Developercontroller/GetDeveloper`);
            const actualData = await data.json();
            setNameData(actualData);
        } catch (err) {
            console.log(err);
        }
    };

    const getProduct = async () => {
        try {
            axios.get(`https://localhost:44325/ProductController/GetProduct`)
                .then(res => {
                    const actualProduct = res.data;
                    setProductData(actualProduct);
                })
        } catch (err) {
            console.log(err);
        }
    }

    const getOrderdata = () => {
        try {
            axios.get(`https://localhost:44325/OrderController/GetlastOrder`)
                .then(res => {
                    debugger;
                    const orderCollectionData = res.data;
                    setOrderData(orderCollectionData.ResponseData);
                    setId(orderCollectionData.ResponseData.id);

                })
        } catch (err) {
            console.log(err);
        }
    }

    const onSubmitData = (event, name) => {
        console.log(event.target.value, name, orderDetails)
        event.preventDefault();
        setOrderDetail({ ...orderDetails, [name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let copy = [...orderList];
        if (index >= 0) {
            copy[index] = orderDetails;
        } else
            copy.push(orderDetails);
        setOrderList(copy);
        axios.post('https://localhost:44325/OrderController/PostOrder',
            {
                user: orderDetails.user ,
                product: orderDetails.product ,
                orders: orderDetails.orders ,
            })
            .then(function (response) {
                console.log(response);
                toast(response.data.Message);
                getOrderdata();
                setOrderDetail({
                    user: "",
                    product: "",
                    orders: 0
                })
            }).catch(function (error) {
                console.log(error);
                toast(error);
              });
        setIndex(-1);
    }

    const handleRest = (event) => {
        event.preventDefault();
        setOrderDetail({
            user: "",
            product: "",
            orders: 0
        })
    }

    const handleDelete = async (event) => {
        axios.delete(`https://localhost:44325/OrderController/${Id}`)
            .then(function (response) {
                debugger;
                toast(response.data.Message)
                setOrderDetail({
                    user: "",
                    product: "",
                    orders: 0
                })
            })
            .catch(function (error) {
                console.log(error);

            });
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`https://localhost:44325/OrderController/UpdateOrder`,
            {
                id: Id,
                user: orderDetails.user,
                product: orderDetails.product,
                orders: orderDetails.orders,
            })
            .then(res => {
                debugger;
                const orderCollectionData = res.data;
                if(orderCollectionData.ResponseData !=null)
                {
                    setOrderData(orderCollectionData.ResponseData);
                    toast(orderCollectionData.Message);
                    setOrderDetail({
                        user: "",
                        product: "",
                        orders: 0
                    })
                }
                else{
                    toast(orderCollectionData.Message);
                    setOrderDetail({
                        user: "",
                        product: "",
                        orders: 0
                    })
                }
            })
            .catch(error => {
                toast(error);
            });
    }
    const updateRow = async (event) => {
        event.preventDefault();
        setHideButton({
            saveButton: false,
            resetButton: false,
            updateButton: true
        });
        setOrderDetail(
            {
                user: orderData.User,
                product: orderData.Product,
                orders: orderData.Orders
            });
    }
    return (
        <Paper style={styles.paperContainer}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <form>
                        <br></br>
                        <Typography component="h1" variant="h5">
                            User
                        </Typography>
                        <Select id="user" value={orderDetails.user} key="user" className='box' onChange={(e) => onSubmitData(e, 'user')}>
                            {userNameData.map((users) => {
                                return <MenuItem key={users.DeveloperName} value={users.DeveloperName}>
                                    {users.DeveloperName}</MenuItem>
                            })}
                        </Select>
                        <br></br>
                        <Typography component="h1" variant="h5">
                            Product
                        </Typography>
                        <Select id="product" value={orderDetails.product} key="product" className='box' onChange={(e) => onSubmitData(e, 'product')} >
                            {productData.map((data) => {
                                return <MenuItem key={data.ProductName} value={data.ProductName}>{data.ProductName}</MenuItem>
                            })}
                        </Select><br></br>
                        <Typography component="h1" variant="h5">
                            Orders
                        </Typography>
                        <TextField
                            className='box'
                            margin="normal"
                            required
                            fullWidth
                            id="Order"
                            label="Order"
                            name="order"
                            key="order"
                            type="number"
                            value={orderDetails.orders > 0 ? orderDetails.orders : false}
                            onChange={(event) => onSubmitData(event, 'orders')}
                        >
                        </TextField>
                        <TableCell align='left'><Button
                            type="click"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Save
                        </Button></TableCell>
                        <TableCell align='left'><Button
                            type="click"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleRest}
                        >
                            Reset
                        </Button></TableCell>
                        <TableCell align='left'>
                        {
                            hideButton.updateButton && (
                                <Button
                            type="click"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                            )
                        }
                        </TableCell>
                        <TableCell align='left'><Button             >
                        </Button></TableCell>
                    </form>
                    <br></br>
                    <Box >
                        <Typography component="h1" variant="h5">
                            Order List
                        </Typography>
                        <TableContainer >
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell >UserName</TableCell>
                                        <TableCell align="center">Product</TableCell>
                                        <TableCell align="center">Order</TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    <TableRow key={orderData.User}>
                                        <TableCell> {orderData.User}</TableCell>
                                        <TableCell align="right">{orderData.Product}</TableCell>
                                        <TableCell align="right">{orderData.Orders}</TableCell>
                                        <TableCell align="right"><Button type="button" variant="contained" onClick={(event) => updateRow(event)}>Edit</Button></TableCell>
                                        <TableCell align="right"><Button type="button" variant="contained" onClick={(event) => handleDelete(event, orderData.id)}>Delete</Button></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </ThemeProvider>
        </Paper>
    )
}

export default Operation