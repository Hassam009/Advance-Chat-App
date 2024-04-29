import { Home } from '@mui/icons-material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { lazy } from 'react'

const Home=lazy(()=>{
  import("./Pages/Home")
})
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/About' element={<h1>About</h1>}></Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
 