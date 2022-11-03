import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Edit } from '@mui/icons-material';
import { TextField } from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const TodoEditModal = ({id, getTodo})=> {
  // console.log(id)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [todo,setTodo] = useState('')

  const handleEdit=()=>{
  
    let payload={
      "name":todo
    }
    axios.patch(`http://localhost:8080/todo/${id}`,payload)
    .then(()=> getTodo())
    handleClose()
}
  return (
    <div>
      <Button variant="contained" color="success"size="small" startIcon={<Edit />} onClick={handleOpen}>Edit</Button>      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Box display="flex" gap="20px" justifyContent={"center"}>
            <TextField size="small" id="outlined-basic" label="Add Name..." variant="outlined" value={todo} onChange={(e)=> setTodo(e.target.value)} required />
            <Button variant="contained" onClick={handleEdit}>Submit</Button>

        </Box>
        </Box>
      </Modal>
    </div>
  );
}

