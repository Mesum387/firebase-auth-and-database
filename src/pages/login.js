import { Box, Button, Typography } from "@mui/material";
import React, { useState } from 'react'
import ComponentInput from "../Components/inputt";
import { CircularProgress } from "@mui/material";
import '../App.css'
import { loginUser } from "../config/firebase/firebasemethods";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
    const [loader,setloader]=useState(false)
    const [userObj,setuserObj]=useState({})
    const navigate=useNavigate();
    const [able,setable]=useState(false);
    let onclk=()=>{
        if(!userObj.email){
            return alert("email is required")
          }
          if(!userObj.password || userObj.password.length < 6){
            return alert("password is required and password must be aleast six character")
          }
          setloader(true);
          setable(true)
          console.log(userObj);
          loginUser(userObj).then((success)=>{
              setable(false)
              setloader(false);
              console.log("login successfully")
              navigate(`/${success.user.uid}`)
            }
            ).catch((err)=>{
                setable(false)
        setloader(false);
        console.log(err)
    })
    
}

return (
        <>
        <Typography variant="h2">Login</Typography>
          <Box>
          <Box>

    <Box>
        <ComponentInput
         onChange={(e)=>setuserObj({...userObj, email: e.target.value})}
         label="Email"
         type="email"/>
    </Box>
    <Box>
        <ComponentInput
         onChange={(e)=>setuserObj({...userObj, password: e.target.value})}
        label="Password" type="password" />
    </Box>
    <Button disabled={able} onClick={onclk} variant="contained">{ loader && <CircularProgress color="success"/>}Login</Button>
</Box>
</Box>

        </>
    )
}

export default LoginUser