"use client";

import { useState } from "react";

export default function StrPrac() {
  // const val="hello g"
  const [val, setVal] = useState("adeel");
  const [val2, setVal2] = useState("khalid");

  const onChangeHandler = (e: any) => {
    setVal(e.target.value);
  };
  const onChangeHandler2 = (e: any) => {
    setVal2(e.target.value);
  };
  return (
    <div>
      <h1>Hello</h1>
      <input type="text" value={val} onChange={onChangeHandler} /> <br />
      <input type="text" value={val2} onChange={onChangeHandler2} />
      <br />
      length of string 1:{val.length} <br />
      length of string 2:{val2.length}
    </div>
  );
}
