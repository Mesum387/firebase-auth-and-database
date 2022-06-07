import { Box, Button, Typography } from "@mui/material";
import { signUpUser } from "../config/firebase/firebasemethods";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { sendData } from "../config/firebase/firebasemethods";
import ComponentInput from "../Components/inputt";
import { useNavigate } from "react-router-dom";
function SignUp(){
    const [userObj,setuserObj]=useState({});
    const [loader,setloader]=useState(false);
    let navigate=useNavigate()
    const [able,setable]=useState(false);
    let ocLk = () => {
         if(!userObj.email){
           return alert("email is required")
         }
         if(!userObj.password || userObj.password.length < 6){
           return alert("password is required and password must be aleast six character")
         }
         setloader(true);
         setable(true)
         console.log(userObj);
         signUpUser(userObj).then((res)=>
         {
            navigate(`/login`)
            setable(false)
            setloader(false);
            console.log(res);
            sendData(userObj,"users",res.user.uid).then(()=>
            {
                console.log("successfuly saved")
            }).catch((err)=>
            {
console.log(err);
            })
        }).catch((err)=>
        {
            setable(false)
            setloader(false);
            console.log(err);
        })
    }

    return<>
<Typography variant="h2">SignUP</Typography>
<Box>
    <Box>
        <ComponentInput
    onChange={(e)=>setuserObj({...userObj, name: e.target.value})}
         label="Name"
         type="text" />
    </Box>
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
    {/* <ComponentButton onClick={ocLk} label="SignUp"/> */}
    <Button disabled={able} onClick={ocLk} variant="contained">{ loader && <CircularProgress color="success"/>}SignUp</Button>
</Box>
    </>
}
export default SignUp;