import { useState ,useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [number,setNumber]=useState(false)
  const [length,setLength]=useState(8)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str=""
  },[length,number,char,setPassword])

  }

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )


export default App
