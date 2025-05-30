import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG
          </Typography>
         <Button>
            <Link to={"/"} style={{ color: "white"}}>
            AggBlog
            </Link>          
          </Button>
          <Button>
            <Link to={"/a"} style={{ color: "white"}}>
            ViewBlog
            </Link>          
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
