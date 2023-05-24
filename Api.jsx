import React, { useState } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from '@mui/material';
import axios from 'axios';
const Api = () => {
    var[user,setUser]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) =>{
    setUser(response.data)
    console.log(user)
  }
  )
  return(
    <div style={{paddingTop:"100px"}}>
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            user.map((value,i)=>{
              return (
                <TableRow>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.username}</TableCell>
                    <TableCell>{value.email}</TableCell>

                </TableRow>
              )
            })
          }
        </TableBody>
        </Table>
       </TableContainer>
    </div>
  )
  }

export default Api
