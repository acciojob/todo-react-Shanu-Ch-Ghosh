
import React, { useState } from "react";
import './../styles/App.css';
import { v4 as uuidv4 } from 'uuid';

const App = ()  => {

  
  const [text,setText]=useState("")
  const [todos,setTodos]=useState([])

  return (
    <div>
       <input type="text" placeholder="Enter Your Todo" onChange={(e)=>{
        setText(e.target.value)
       }}/>
       <button onClick={()=>{
        let newTodo={
          task:text,
          id: uuidv4()
        }

        setTodos([...todos,newTodo])

        setText("")

       }}>Add Todo</button>

       <ul>
        {todos && todos.map((item)=>{
          return <li style={{listStyle:"none"}} >{item.task}  <button onClick={()=>{
            const newArr= todos.filter((todo)=>{
              return todo.id != item.id
            })


            setTodos(newArr)

          }}>Delete</button></li>
        })}
       </ul>
    </div>
  )
}

export default App
