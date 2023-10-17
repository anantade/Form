

import { Route,Routes } from "react-router-dom"
import './App.css'
import Form from './Form'
import Login from './Login'
import Navbar from './Navbar'

function App() {

  return (
    <>
    <Routes>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/" element={<Login/>}/>    
   </Routes>
      {/* <Navbar/> */}
    </>
  )
}

export default App
