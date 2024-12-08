import { useState } from "react"
import axios from "axios"

const App = ()=>{

  const [fname, setfname] = useState("")

 function handlechange(event){
  setfname(event.target.value)

 }

function change(event){
  event.preventDefault();
var fruit = axios.post("http://localhost:5000/fruitname", {fruitname: fname} )
}

  return(
    <div >
      <h1>Fruit Form</h1>
      <form action="http://localhost:5000/fruitname" method="">
        <input value={fname} name="fruitname" onChange={handlechange} placeholder="Enter the Fruit Name" />
        <button onClick={change} >Add Fruit</button>
      </form>
    </div>
  )
}

export default App