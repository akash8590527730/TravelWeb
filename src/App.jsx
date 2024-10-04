import { useState } from 'react'
import './App.css'

function App() {
  
  const changeColor=(color)=>{

    const data=color
    document.body.style.backgroundColor=data
  }

  return (
    <>
     <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className='text-info-emphasis'>BackGround Color change</h1>
      <div className='d-flex mt-3 '>
        <button onClick={()=>{changeColor('red')}}  className='mx-3 btn btn-danger border rounded-pill'>Red</button>
        <button onClick={()=>{changeColor('blue')}} className='mx-3 btn btn-primary border rounded-pill '>Blue</button>
        <button onClick={()=>{changeColor('green')}} className='mx-3 btn btn-success border rounded-pill '>Green</button>
        <button onClick={()=>{changeColor('yellow')}} className='mx-3 btn btn-warning border rounded-pill'>Yellow</button>
        <button onClick={()=>{changeColor('Black')}} className='mx-3 btn btn-dark border rounded-pill'>Black</button>
        <button style={{backgroundColor:'purple'}} onClick={()=>{changeColor('purple')}} className='mx-3 btn border rounded-pill '>Purple</button>
        
      </div>
     </div>
    </>
  )
}

export default App