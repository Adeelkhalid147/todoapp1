"use client";
import { useState } from "react";
export default function Todo() {
  const [todos, setTodos] = useState([
    { todoText: "todo1", completed: false },
    { todoText: "todo2", completed: true },
    { todoText: "todo3", completed: true },
    { todoText: "todo4", completed: false },
  ]);
  const onChangeHandler=(meraElm:any)=>{
    console.log("meraElm", meraElm);
    
    const newTodos=todos.map((todo)=>{
        if(todo.todoText===meraElm.todoText){
            todo.completed= !todo.completed  //false he to true krdo, true h to false kardo

        }
        return todo
    })
    console.log(newTodos);
    setTodos(newTodos)
  }
  return (
    <div>
      <b>
        <br />
        <br />
        <i>TODO APP</i> <br />
        Data Start Here
      </b>
      <br />
      <hr />
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{ color: elm.completed ? "green" : "orange" }}
              key={elm.todoText}
            >
                <input type="checkbox" checked={elm.completed} onClick={()=>onChangeHandler(elm)} />
              {elm.todoText}****
            </li>
          );
        })}
      </ul>
    </div>
  );
}
