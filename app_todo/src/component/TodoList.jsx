import { Box, Button, Typography } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import "./TodoList.css"
import { Edit } from '@mui/icons-material';
import TodoEditModal from './TodoEditModal';

export const TodoList = ({data,handleDelete}) => {
    // console.log("Todo list", data[0].status)
  return (
    <Box>
        <h1>Todo List</h1>
        <Box>
            {
                data.map((el)=>(
                    <Box key={el.id} display="flex" justifyContent="space-between" marginBottom="5px">
                        {
                            el.status ? 
                            <Box width="5px" height="5px" border="1px solid red" ></Box>
                            :
                            <Box id="NotCompleted" >
                                <Box id="non"></Box>
                            </Box>
                        }
                        <Typography variant="h5" component="h4">{el.name}</Typography>
                        <Button variant="outlined" color="success"size="small" startIcon={<Edit />} onClick={()=>handleDelete(el.id)}>Edit</Button>
                        <TodoEditModal/>
                        <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={()=>handleDelete(el.id)}>Delete</Button>


                        {/* console.log(el.status) */}
                    </Box>
                ))
            }
        </Box>
    </Box>
  )
}
