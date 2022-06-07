import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getData } from '../config/firebase/firebasemethods';

const Home = () => {
  let navigate=useNavigate()
const params=useParams();
useEffect(()=>{
if(params.id){
getData("users")
}
},[])
  return (<>
    <h2>Home</h2>
    <button onClick={()=>{
      navigate("/signup")
    }}>SignUp Page</button>
    <div>Check console after logging in</div>
  </>
  )
}

export default Home