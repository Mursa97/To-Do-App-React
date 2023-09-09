import React from 'react'
import './Task.css'

const Task = ({task}) => {
  return (
    <div className='task-container'>
        <input type="checkbox" name="" id="" />
        <span>{task.task}</span>
    </div>
  )
}

export default Task