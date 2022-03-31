import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';



const theme = createTheme();

const UpdateUser=() => {
const [userData,setUserData] = useState(
  {
    Email:'',
    Name:'',
    Age:'',
    Technology:''
  }
);
toast.configure();

const onChangeInput = (event, fieldName) => {
  setUserData({ ...userData, [fieldName]: event.target.value })
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
       axios.put('https://localhost:44325/Developercontroller/UpdateDeveloper', {
        Email: userData.Email,
      developerName: userData.Name,
      developerAge: userData.Age,
      tech: userData.Technology
    })
      .then(function (response) {
        console.log(response);
        toast(response.data.Message);
      })
      .catch(function (error) {
        console.log(error);
      });
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
            Update User
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
           
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter same Email with you register"
              name="email"
              value={userData.Email}
              onChange={(event) => onChangeInput(event, 'Email')}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="Name"
              label="Name"
              name="Name"
             value={userData.Name}
             onChange={(event) => onChangeInput(event, 'Name')}
            /> <TextField
              margin="normal"
              required
              fullWidth
              id="Age"
              label="Age"
              name="Age"
             value={userData.Age}
             onChange={(event) => onChangeInput(event ,'Age')}
            /> <TextField
              margin="normal"
              required
              fullWidth
              id="Technology"
              label="Technology"
              name="Technology"
              value={userData.TechnologyTechnology}
              onChange={(event) => onChangeInput(event,'Technology')}
            />
            {/* <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={userData.Password}
              onchangeInput={(event) =>onChangeInput(event,"Password")}
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )};

export default UpdateUser;

