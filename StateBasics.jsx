import React ,{useState}from 'react'
import {Button, Typography,TextField } from '@mui/material';
const StateBasics = () => {
 
                 var [pname,setPname] = useState("");
                 var[val,setVal]=useState()

                 const changeName = () =>{
                     setPname(val);
                 }

                 const inputHandler =(e) =>{
                    setVal(e.target.value)
                    console.log(val)
                 }

            return (
              <div>
                <Typography variant='h1'>Hai {pname}</Typography>
                <TextField variant='outlined' aria-label="Name" onChange={inputHandler}></TextField>
                <br></br>
    <Button variant='contained' onClick={changeName}>Change</Button>

    </div>
  )
}

export default StateBasics