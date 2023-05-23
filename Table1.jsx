import React, { useState } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from '@mui/material';
const Table1 = () => {
  var[names,setNames] = useState([{sname:"Tiya",age:10},{sname:"Austle",age:20}])
  return(
    <div style={{paddingTop:"50px"}}>
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {names.map((value,index)=>{
            return(
              <TableRow>
                <TableCell>{value.sname}</TableCell>
                <TableCell>{value.age}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Table1