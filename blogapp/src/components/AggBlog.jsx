import React from 'react'
import {Button, Typography, TextField, TableContainer, TableBody, TableCell } from '@mui/material'
import '../App.css'

const AggBlog = () => {
  return (
    <div className="box">
       <Typography variant="h1">FILL THE DETAILS</Typography>
       
        <TextField variant="outlined" label="Name" />
        <br />
        <br />
        <TextField variant="outlined" label="Place" />
        <br />
        <br />
      <TextField variant="outlined" label="Age" />
      <br />
      <br />
      <TextField variant="outlined" label="Email" />
      <br />
      <br />
      <Button>submit</Button>



      
    </div>
  )
}

export default AggBlog
