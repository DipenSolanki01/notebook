import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Task({text,date,time,id}){
  const [isdone, setIsdone] = useState(false);
  return(
    <>
    <div className='taskpannel'>
    <button onClick={()=>setIsdone((prev)=>!prev)}>{isdone?'✅':'⭕'}</button>
    <div >{text} is due til ⏰{time?time:'not set'} of {date?date:'not set'}</div>
    <button >🗑️</button>
    </div>
    </>
  )
}

function App() {

  const [textData,setTextData] = useState('')
  const [tasklist,setTasklist] = useState([])
  const [date, setDate] = useState('');
  const [tasktime, setTasktime] = useState('');
  
  return (
    <>
      <div className='card'>
        <div className='herobar'>
          {/* <form action={(e)=>e.} > */}
            <input type="text" onChange={(e)=>setTextData(e.target.value)} />
            <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            <input type="time" name="time" onChange={(e)=>setTasktime(e.target.value)}/>
            <button type='submit' onClick={()=>setTasklist((prev)=>prev = [...prev,{textData,date,tasktime}])}>add</button>
          {/* </form> */}
        </div>
        <div>
          {tasklist.length ? tasklist.map((tasks,index)=>(<Task id ={index} text={tasks.textData} date={tasks.date} time={tasks.tasktime} ></Task>)):<div></div>}
          </div>
      </div>
      
    </>
  )
}

export default App
