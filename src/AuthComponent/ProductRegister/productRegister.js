import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const theme = createTheme();
const user ={
  name: '',
  price: 0,
  type: '',
}

const ProductRegister = () => {
 
    const [ useData, setUserData] = useState({...user});
    const [errors, setErrors] = useState({});
    const history =useNavigate();
    toast.configure();

    const onChangeInput = (event, fieldName) => {
      setUserData({ ...useData, [fieldName]: event.target.value }) 
    }


    const validateForm = (event,value) => {
          if (value.name.length <= 4 && value.name.length >= 30) {
            setErrors({
              ...errors,
              name: 'Can not be empty'
            })
          }
          if (value.price.length < 0) {
            setErrors({
              ...errors,
              price: 'Please Enter Valid Input'
            })
          }
          if (value.type.length <= 1 && value.type.length >= 30 ) {
            setErrors({
              ...errors,
              type: 'Can not be empty '
            })
          }
      }
    

    const handleSubmit = (event) => {
      debugger;
      validateForm()
      if(Object.keys(errors).length) {
        return 
      }
        event.preventDefault();
        axios.post('https://localhost:44325/ProductController/PostProduct', 
        {
            productName: useData.name,
            productType: useData.type,
            productPrice: useData.price,
        })
          .then(function (response) {
            toast(response.data.Message);
          })
          .catch(function (error) {
            console.log(error);
          });
          setUserData({
            name: '',
            price: 0,
            type: ''
          })
      };

      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Product
              </Typography>
              <Box  >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="name"
                  value={useData.name}
                  onChange={(event) => onChangeInput(event, 'name')}
                /> 
               {/* <span style={{ color: "red" }}>{errors["name"]}</span> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  label="price"
                  name="price"
                  value={useData.price}
                  onChange={(event) => onChangeInput(event, 'price')}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="type"
                  label="type"
                  name="type"
                  value={useData.type}
                  onChange={(event) => onChangeInput(event, 'type')}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                 Product Register
                </Button>
                <Grid container>
              <Grid item xs>
              <Button onClick={() => history(-1)}            >
              Back
            </Button>
               </Grid>
            </Grid>
              </Box>
            </Box><br></br>
          </Container>
        </ThemeProvider> 
      )
    
}

export default ProductRegister