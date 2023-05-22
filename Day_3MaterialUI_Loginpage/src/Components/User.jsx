import React from "react";

export const User=(props)=>{

    return (
        <>
        <h1>This is user component {props.name}</h1>
        <button onClick={props.fun}>Click me</button>

        </>
    );
};