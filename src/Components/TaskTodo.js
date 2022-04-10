

import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { delete_todo, done_todo } from '../redux/Action';
import EditTask from './EditTask';


const TaskTodo = ({todo}) => {
   const  dispatch=useDispatch();
  return (
    <div style={{display:"flex",justifyContent:"space-around",margin:"5%"}}>
     <h3>{todo.text}</h3>
     <EditTask Task={todo} />
     <Button onClick={()=>dispatch(done_todo(todo.id))}>{todo.done?"undone":"Done"}</Button>
     <Button onClick={()=>dispatch(delete_todo(todo.id))}>Delete</Button>
    </div>
  )
};

export default TaskTodo;