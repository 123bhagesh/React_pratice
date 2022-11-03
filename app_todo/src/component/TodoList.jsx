import { Box, Button, Typography } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import "./TodoList.css"
import { Edit } from '@mui/icons-material';
import { TodoEditModal } from './TodoEditModal';

export const TodoList = ({data,handleDelete,getTodo}) => {
  return (
    <Box width={"480px"} margin="auto">
        <h1>Todo List</h1>
        <Box>
            {
              data.map((el)=>(
                <Box key={el.id} display="flex" justifyContent="space-between" marginBottom="5px">
                    <Box width={"8%"}  >
                    {
                        el.status ? 
                        <Box width="5px" height="5px" border="1px solid red" ></Box>
                        :
                        <Box id="NotCompleted" >
                            <Box id="non"></Box>
                        </Box>
                    }
                    </Box>
                    <Box width={"40%"} >
                      <Typography variant="h5" component="h4">{el.name}</Typography>
                    </Box>
                    <Box width={"18%"} >
                      <TodoEditModal id={el.id} getTodo={getTodo}/>
                    </Box>
                    <Box width={"23%"} >
                      <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={()=>handleDelete(el.id)}>Delete</Button>
                    </Box>   

                    </Box>
                ))
            }
        </Box>
    </Box>
  )
}
