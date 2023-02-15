"use client"
import React from "react";
import { useState } from 'react';

export default function CounterApp() {
    const [counter,setcounter]=useState(0)
    const decrement=()=>{
        setcounter(counter - 1)
    }
    const increment=()=>{
        setcounter(counter + 1)
    }
  return (
    <div>
      <br />
      <b>
        <i >COUNTER APP</i> <br />
        Data Start Here
      </b><br />
    <button onClick={decrement}>Decrement</button><br />
    {counter}<br />
    <button onClick={increment}>Increment</button><br />
    </div>
  );
}
