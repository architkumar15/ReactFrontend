import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';



const theme = createTheme();
const user ={
  name: '',
  email: '',
  age: 0,
  Technology: ''
}

const Register = () => {

  const history = useNavigate();
  const [useData, setUserData] = useState({...user});
  toast.configure();

  // const dataArr=[useData];
  // localStorage.setItem('data',useData);

  const onChangeInput = (event, fieldName) => {
    
    setUserData({ ...useData, [fieldName]: event.target.value }) 
  }

  // const onChangeName = (event) => {
  //   // setName(event.target.value);
  //   setUserData({ ...useData, name: event.target.value })
  // };

  // const onChangeEmail = (event) => {
  //   // setEmail(event.target.value);
  //   setUserData({ ...useData, email: event.target.value })

  // };

  // const onChangeAge = (event) => {
  //   setUserData({ ...useData, Age: event.target.value })
  //   // setAge(event.target.value);
  // };

  // const onChangeTechnology = (event) => {
  //   setUserData({ ...useData, Technology: event.target.value })
  //   // setTechnology(event.target.value);
  // };

  // const onChangePassword = (event) => {
  //   setUserData({ ...useData, Password: event.target.value })
  //   // setPassword(event.target.value);

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:44325/Developercontroller/PostDeveloper', {
      developerEmail: useData.email,
      developerName: useData.name,
      developerAge: useData.Age,
      tech: useData.Technology
    })
      .then(function (response) {
        console.log(response);
        toast(response.data.Message)
      })
      .catch(function (error) {
        console.log(error);
      });
      setUserData({
        name: '',
        email: '',
        age: 0,
        Technology: ''
      
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
            Register
          </Typography>
          <Box  >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={useData.email}
              onChange={(event) => onChangeInput(event, 'email')}
            />
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="Age"
              label="Age"
              name="age"
              value={useData.Age}
              onChange={(event) => onChangeInput(event, 'Age')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Technology"
              label="Technology"
              name="Technology"
              value={useData.Technology}
              onChange={(event) => onChangeInput(event, 'Technology')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/UpdateUser" variant="body2">
                  {"Already Register change profile? "}
                </Link>
              </Grid>
              <Grid item>
              <Button
              
              onClick={() => history(-1)}            >
              Back
            </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider> 
  )
};

export default Register;

