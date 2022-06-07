import { TextField } from '@mui/material'
import React from 'react'

const ComponentInput = (props) => {

    const {label,type,onChange,value,fullWidth} = props;

  return (
      <>
      <TextField
      id='outlined-basic'
      type={type}
      label={label}
      variant='outlined'
      onChange={onChange}
      value={value}
      fullWidth={fullWidth}
      
      
      
      />
      </>
  )
}

export default ComponentInput