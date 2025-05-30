import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const AddBlog = () => {
  var [input, setInput] = useState({});
  const inputHandler = (e)=>{
    setInput({...input,[e.target.name]: e.target.value})
    console.log(input);
  }
  const submitHandler=()=>{
    console.log("Button clicked")
  }
  return (
    <div>
      <Typography variant='h3'>Welcome to add blog page</Typography>
      <TextField variant='outlined' label="Blog Name" on change={inputHandler} name="Blog Name"/><br /><br />
       <TextField variant='outlined' label="Description" on change={inputHandler} name="Description"/><br /><br />
        <TextField variant='outlined' label="Author Name" on change={inputHandler} name="Author Name"/><br /><br />
        <Button variant='contained' onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default AddBlog