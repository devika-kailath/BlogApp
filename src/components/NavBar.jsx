import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow:1}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2}}
                    >
                </IconButton>
                <Typography variant="h6" components="div" sx={{ flexGrow: 1 }}>
                    Main menu
                </Typography>
                <Button color="inherit">
                    <Link to={'/b'} style={{color:'white'}}>HOME</Link>
                </Button>
                <Button>
                    <Link to={'/'} style={{color:'white'}}>ADDBLOG</Link>
                </Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar