import React, { useEffect, useState } from "react";
import { Button,makeStyles } from "@mui/material";
import { easing } from "@material-ui/core";
export const User = (props) => {
  //const classes = userStyle();
  const [number, newNum] = useState(0);
  const [value,setValue] =useState("")
  const[error,setError]=useState("")

  const incrementNumber = () => {
    newNum(number + 1);
  };

  const decrementNumber = () => {
    newNum(number - 1);
  };
  useEffect(()=>{
    if (value.length<10){
      setError("Value length must be more than 10");
    }else{
      setError("");
    }
    
  },[value]);
  //for update  variable 
  // useEffect(()=>{
  //   alert("Number is updated")
  // },[number]);
  


  return (
    <>
      <h1>this is User components {props.name}</h1>
      <p>Number : {number}</p>
      <p>
        incrementNumber :{" "}
        <Button onClick={incrementNumber} variant="contained" color="secondary">
          +
        </Button>
      </p>
      <p>
      decrementNumber :{" "}
        <Button onClick={decrementNumber} variant="contained" color="primary">
          -
        </Button>
        <br />
        <input value={value}onChange={e =>setValue(e.target.value)}/>
        <br />
        <p>eroor is:{error && error}</p>
      </p>
    </>
  );
};
