import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList'

export const Todo = () => {
    const [todo,setTodo] = useState('')
    const [data,setData] = useState([])

    const handelAdd = ()=>{
        // console.log(todo)
        let payload={
            "name":todo,
            "status":false
        }
        axios.post("http://localhost:8080/todo",payload)
        .then(()=> getTodo())
        setTodo('')
    }

    const getTodo =()=>{
        axios.get('http://localhost:8080/todo')
        .then((res)=> setData(res.data))
    }

    useEffect(()=>{
       getTodo()
    },[])
    console.log("Data",data)

    const handleDelete=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:8080/todo/${id}`)
        .then(()=> getTodo())
    }

    // const handleEdit=(id)=>{
    //     payload={}
    //     axios.patch(`http://localhost:8080/todo/${id}`,payload)
    //     .then(()=> getTodo())
    // }

    
    console.log(todo)
  return (
    <Box width="500px" margin={"auto"} border={"1px solid red"} paddingTop="20px">
        <Box display="flex" gap="20px" justifyContent={"center"}>
            <TextField size="small" id="outlined-basic" label="Outlined" variant="outlined" value={todo} onChange={(e)=> setTodo(e.target.value)} />
            <Button variant="contained" onClick={handelAdd}>Add Todo</Button>

            {/* <button onClick={handelAdd}>Add Todo</button> */}
        </Box>
        <Box >
            <TodoList data={data} handleDelete={handleDelete} />

        </Box>
    </Box>
  )
}
