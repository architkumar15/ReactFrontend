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



const UserDetails = () => {

  const [formData, setformData] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      axios.get(`https://localhost:44325/Developercontroller/GetDeveloper`)
      .then(res => {
        debugger;
        const actualData = res.data;
           setformData(actualData);
    })} catch (err) {
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
                        <TableCell>Email</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Tech</TableCell>
                        <TableCell>Date Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {formData.map((curElem, index) => {
                        return (
                            <TableRow key={curElem.user + index}>
                            <TableCell> {curElem.id}</TableCell>
                                <TableCell>{curElem.Email}</TableCell>
                                <TableCell>{curElem.DeveloperName}</TableCell>
                                <TableCell>{curElem.DeveloperAge}</TableCell>
                                <TableCell>{curElem.Tech}</TableCell> 
                                <TableCell>{moment(curElem.DateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</TableCell> 

                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
  )

     
};

export default UserDetails;

