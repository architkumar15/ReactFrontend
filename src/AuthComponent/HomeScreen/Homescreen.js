import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    
    <div style={{paddingTop:"1%", paddingRight:"3%"}}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="0" >
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '85vh'  }} /> */}
        <img src={'../../developer.png'} alt="Logo" height="700vh"   />;
      </Container>
    </React.Fragment></div>
  );
}