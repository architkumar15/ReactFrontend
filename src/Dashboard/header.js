import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }} >
              <a className='link' href="/Register">Register</a>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            ><a  className='link' href="/Product">Product</a>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <a  className='link' href="/Order">Order</a>              </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <a  className='link' href="/Operation">Billing</a>                    </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Archit Singh" src="practicewebapp/public/profile.jpeg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem >
                <Button textAlign="center" onClick={handleCloseUserMenu}><a   className='link2' href="/ProductDetails">AllProduct</a></Button>
              </MenuItem>
              <MenuItem >
                <Button textAlign="center" onClick={handleCloseUserMenu}><a  className='link2' href="/UserDetails">AllUser</a></Button>
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;