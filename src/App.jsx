
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { lazy } from 'react'

const Home=lazy(()=>{
  import("./Pages/Home")
})

const Login=lazy(()=>{import("./Pages/Login") })
const Chat=lazy(()=>{import("./Pages/Chat") }) 
const Group=lazy(()=>{import("./Pages/Group") })   

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/Login' element={Login}></Route>
        <Route path='/Chat' element={Chat}></Route>
        <Route path='/Group' element={Group}></Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
 