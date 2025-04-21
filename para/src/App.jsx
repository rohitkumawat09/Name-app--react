


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  const [firstname, setfname,] = useState("")
  const [lastnam, setlname,] = useState("")
  const [fullname, setFullname] = useState("");

  function name() {
    setFullname(firstname + "" + lastnam)

  }

function clearInputs(){
  setfname("")
  setlname("")
  setFullname("")
}
  return (
    <>

      <input type="text" value={firstname} onChange={(e) => setfname(e.target.value)} placeholder='Enter first name' />
      <input type="text" value={lastnam} onChange={(e) => setlname(e.target.value)} placeholder='Enter last name' />


      <button id='btn' onClick={name}>Click Me</button>
      <button   id='btn2' onClick={clearInputs}>Clear</button> 
      <h2>{fullname}</h2>


    </>

  )

}

export default App