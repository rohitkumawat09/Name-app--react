








import { useState } from 'react'

import './App.css'
 function App(){

const [ name, setPara,]=useState("")
const [ btn, setPara2,]=useState("")
function next(){




const reversed = name.split('').reverse().join('');
setPara2(reversed);
}



return(

<>


<input type="text" value={name} onChange={(e) => setPara(e.target.value)} placeholder='Enter firstname name' />

<button onClick={next}>click</button>




<h2>{btn}</h2>
</>


)





 }






 export default App
