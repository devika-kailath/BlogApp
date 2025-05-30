import { Table, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material'
import React from 'react'

const ViewBlog = () => {
  return (
    <div>
        <Typography variant='h1'>DETIALS</Typography>
      <TableContainer>
              <Table>
                  <TableHead>
                      <TableBody>
                          <TableCell>Name</TableCell>
                          <TableCell>Place</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Email</TableCell>
                      </TableBody>
                  </TableHead>
              </Table>
             </TableContainer>
    </div>
  )
}

export default ViewBlog
