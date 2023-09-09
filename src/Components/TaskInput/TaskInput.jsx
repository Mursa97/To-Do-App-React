import React from 'react'
import './TaskInput.css'
import PinIcon from '../../img/pin.svg'

const TaskInput = () => {
  return (
    <div className='task-input-container'>

        <div className="left-text">
            <img src={PinIcon} alt="Add a task to your list." />
            <p>Add new task...</p>
            <div className='vl'></div>
        </div>

        <input type="text" placeholder='Enter a task...' />

        <div className='buttons'>
            <button>Today</button>
            <button className='inactive'>Tomorrow</button>

            <button>Add Task</button>
        </div>
        
    </div>
  )
}

export default TaskInput