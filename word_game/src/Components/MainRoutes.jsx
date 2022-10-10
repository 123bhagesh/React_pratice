import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Homepage from './Homepage'
import { Result } from './Result'
import Word from './Word'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/word" element={<Word/>}/>
        <Route path="/result" element={<Result/>}/>
    </Routes>
  )
}

export default MainRoutes
