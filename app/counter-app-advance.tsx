"use client";
import React from "react";
import { useState } from "react";

export default function CounterAppAdvance() {
  const [counter, setcounter] = useState(5);
  const decrement = (kitnabrhana: any) => {
    setcounter(counter - kitnabrhana);
  };
  const increment = (kitnabrhana: any) => {
    setcounter(counter + kitnabrhana);
  }; 
  return (
    <div>
      <br />
      <b>
        <i>COUNTER APP ADVANCE</i> <br />
        Data Start Here <br />
        increment & decrement by 2,3,5
      </b>
      <br />
      <button onClick={() => decrement(5)}>Decrement by 5</button>
      <br />
      <button onClick={() => decrement(3)}>Decrement by 3</button>
      <br />
      <button onClick={() => decrement(2)}>Decrement by 2</button>
      <br />

      {counter}
      <br />
      <button onClick={() => increment(2)}>Increment by 2</button>
      <br />
      <button onClick={() => increment(3)}>Increment by 3</button>
      <br />
      <button onClick={() => increment(5)}>Increment by 5</button>
      <br />
    </div>
  );
}
