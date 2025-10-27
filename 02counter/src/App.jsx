import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(16)

  // let counter=16
  const addValue=()=>{
    console.log("Value Clicked",counter);
    // counter=counter+1
    if(counter>=20){
      setCounter(20)
    }else{
      setCounter(counter+1)
    }
    
  }

  const removeValue=()=>{
    console.log("Value Clicked",counter);
    if(counter<=0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Yash Or React</h1>
    <h1>Counter Value: {counter}</h1>
    <button onClick={addValue}>Add Value{counter}</button>
    <button onClick={removeValue}>Decrease Value{counter}</button>
    <p>Fotter: {counter}</p>
    </>

  )
}

export default App
