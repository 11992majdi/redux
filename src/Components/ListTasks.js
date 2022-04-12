
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TaskTodo from "./TaskTodo"

const ListTasks = () => {
    const list=useSelector((state)=>state.Reducer_todo.Task)
    const [Status, setStatus] = useState("All")
  return (
    <div >
      <div style={{display:"flex",justifyContent:"space-evenly" ,margin:"5%"}}>
        <Button onClick={()=>setStatus("All")}>ALL</Button>
        <Button onClick={()=>setStatus("Done")} >DONE</Button>
        <Button onClick={()=>setStatus("unDone")}>UNDONE</Button>
      </div>
        {Status==="All"
        ?list.map((el)=><TaskTodo todo={el} />)
        :Status==="Done"?list.filter((el)=>el.done)
        .map((el)=><TaskTodo todo={el}/> ):
         list.filter((el)=>!el.done).map((el)=><TaskTodo todo={el}/> ) 
         }
    </div>
  )
}

export default ListTasks