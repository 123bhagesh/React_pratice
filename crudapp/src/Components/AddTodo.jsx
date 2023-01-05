import React, { useState } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const [data, setData] = useState([])

    const handleAdd = ()=>{
        // console.log(todo)
        setData([...data,todo])
    }
    console.log(data)
  return (
    <div>
      <input type="text" name="" id="" onChange={(e)=>setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>

      <div>
        {
            data?.map((el)=>{
                return <div key={el}>{el}</div>
            })
        }
      </div>
    </div>
  )
}
//
export default AddTodo


