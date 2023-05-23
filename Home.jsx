import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
    var [here,setHere] = useState("Home");
    const hom = () =>
    {
        console.log("Home clicked");
        setHere("Home");
    }
    const gal = () =>
    {
        console.log("Gallery clicked");
        setHere("Gallery");
    }
    const con = () =>
    {
        console.log("Contact clicked");
        setHere("Contact");
    }
  return (
    <div>
        <Typography>Welcome to {here}</Typography>
        <Button variant='contained' color='error' onClick={hom}>Home</Button>
        <Button variant='contained' color='warning'onClick={gal}>Gallery</Button>
        <Button variant='contained' color='success'onClick={con}>Contact</Button>
    </div>
  )
}

export default Home