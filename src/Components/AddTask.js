
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { add_todo } from '../redux/Action';

const AddTask = () => {
    const dispatch=useDispatch();
    const [addtext, setAddtext] = useState("");
    const handleAdd=()=>{
        dispatch(add_todo({text:addtext,id:Math.random(),done:false}))
    }
  return (
    <div  >
       <input style={{borderRadius:10,background:"moccasin",color:"black",fontFamily: "system-ui",height:40,width:300,margin:5,}}
        type="txt" placeholder='Add task' onChange={(e)=>setAddtext(e.target.value)}  /><br/>
       <Button onClick={()=>dispatch(handleAdd())}>ADD</Button>
    </div>
  )
}

export default AddTask