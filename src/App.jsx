import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Task({text}){
  return(
    <>
    <div className='card'>{text}</div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [textData,setTextData] = useState('')

  return (
    <>
    
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <div>

          <Task text={count}></Task>
        </div>
      </div>
      
    </>
  )
}

export default App
