
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edit_todo } from '../redux/Action';



const EditTask = ({Task}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const dispatch=useDispatch();
  const [editTask, setEditTask] = useState(Task.text);
const handleEdit=()=>{
    dispatch(edit_todo(editTask,Task.id));
    handleClose()
};
  return (
    <div>
 
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input style={{borderRadius:10,background:"moccasin",color:"black"}} type="text" onChange={(e)=>setEditTask(e.target.value)} value={editTask}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
};

export default EditTask