import React from 'react'
import './TaskInput.css'
import PinIcon from '../../img/pin.svg'
import { useState } from 'react'

const TaskInput = ({todayTasks, tomorrowTasks, setToday, setTomorrow}) => {
  
  const [taskDay, setTaskDay] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [isFocused, setIsFocused] = useState(false)

  const addTask = () => {
    const task = {task: inputVal, day: taskDay}

    if (task.day === true && inputVal != '') {
      setToday([...todayTasks, task])
    } 
    else if (inputVal != ''){
      setTomorrow([...tomorrowTasks, task])
    }
    else {
      alert('Please write a task.')
    }

    document.getElementById('task-input').value = ''
    setInputVal('')
  }
  

  
  return (
    <div className={isFocused ? 'task-input-container input-active' : 'task-input-container'}>

        <div className="left-text">
            <img src={PinIcon} alt="Add a task to your list." />
            <p>Add new task...</p>
            <div className='vl'></div>
        </div>

        <input  id='task-input'
                onChange={(e) => setInputVal(e.target.value)} 
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)} 
                type="text" 
                placeholder='Enter a task...' />

        <div className='buttons'>
            <button onClick={() => setTaskDay(true)} className={taskDay ? '' : 'inactive'}>Today</button>

            <button onClick={() => setTaskDay(false)} className={taskDay ? 'inactive' : ''}>Tomorrow</button>

            <button onClick={() => addTask()}>Add Task</button>
        </div>
        
    </div>
  )
}

export default TaskInput