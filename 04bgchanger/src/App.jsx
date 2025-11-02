import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-2xs bg-white gap-3 px-3 py-2 rounded-2xl'>
            <button 
            onClick={()=> setcolor("red")}
            className='outline-none px-4 py-2 rounded-3xl text-white shadow-lg '
            style={{background:"red"}}>Red</button>
            <button 
            onClick={()=> setcolor("pink")}
            className='outline-none px-4 py-2 rounded-3xl bg-pink-500 text-black shadow-lg'
            style={{background:"pink"}}>pink</button>
            <button 
            onClick={()=> setcolor("green")}
            className='outline-none px-4 py-2 rounded-3xl text-white shadow-lg'
            style={{background:"green"}}>green</button>
            <button 
            onClick={()=> setcolor("blue")}
            className='outline-none px-4 py-2 rounded-3xl text-white shadow-lg'
            style={{background:"blue"}}>blue</button>
            <button 
            onClick={()=> setcolor("skyblue")}
            className='outline-none px-4 py-2 rounded-3xl text-black shadow-lg'
            style={{background:"skyblue"}}>skyblue</button>
            <button 
            onClick={()=> setcolor("#4ee6d1")}
            className='outline-none px-4 py-2 rounded-3xl text-black shadow-lg'
            style={{background:"#4ee6d1"}}>spalsh-Green</button>
          </div>
        </div>
        <h1 className='bg-pink-400 rounded-3xl p-2 '> Hellow rold</h1>
      </div>
    </>
  )
}

export default App
