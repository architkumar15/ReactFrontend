import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import omit from 'react-omit';

const theme = createTheme();
var user = {
  firstName: '',
  lastName: '',
  age: 0,
};
const CreateUser = () => {
  const [index, setIndex] = useState(-1);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState(user);
  const [errors, setErrors] = useState({})

  const onChangeInput = (event, fieldName) => {
    setUserData({ ...userData, [fieldName]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let copy = [...userList];
    if (index >= 0) {
      copy[index] = userData;
    } else
      copy.push(userData);
    setUserList(copy);
    setUserData(
      {
        firstName: '',
        lastName: '',
        age: 0,
      }
    );
    setIndex(-1);
  };
  const handleUpdate = (event, i) => {
    setIndex(i)
    event.preventDefault();
    debugger;
    let copy = [...userList];
    let data = copy[i];
    setUserData(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
      });
  }
  const handleDelete = (event, index) => {
    event.preventDefault();
    let copy = [...userList];
    copy.splice(index, 1);
    setUserList(copy);
  }

  const validateForm = (event, name, value) => {
    switch (name) {
      case 'firstName':
        if (value.length <= 4) {
          setErrors({
            ...errors,
            username: 'Username atleast have 4 letters'
          })
        }
        else {

          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }

        break;
      case 'lastName':
        if (value.length <= 4) {
          setErrors({
            ...errors,
            username: 'Username atleast have 4 letters'
          })
        }
        else {

          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;
      case 'age':
        if (value.length <= 15 && value.length >= 80) {
          setErrors({
            ...errors,
            username: 'Enter valid Age'
          })
        }
        else {
          let newObj = omit(errors, "age");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  }

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
            Create User
          </Typography>
          <Box component="form" id='CreateUserForm'>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={(event) => onChangeInput(event, 'firstName')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={(event) => onChangeInput(event, 'lastName')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Age"
              label="Age"
              name="Age"
              value={userData.age}
              onChange={(event) => onChangeInput(event, "age")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <br></br>
        <TableContainer >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>FirstName</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {userList.map((curElem, index) => {
                return (
                  <TableRow key={curElem.firstName + index}>
                    <TableCell> {curElem.firstName}
                    </TableCell>
                    <TableCell align="right">{curElem.lastName}</TableCell>
                    <TableCell align="right">{curElem.age}</TableCell>
                    <TableCell align="right"><Button type="button" variant="contained" onClick={(event) => handleUpdate(event, index)}>edit </Button></TableCell>
                    <TableCell align="right"><Button type="button" variant="contained" onClick={(event) => handleDelete(event, index)}>Delete </Button></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ThemeProvider>
  )
};

export default CreateUser;

