import React, { useEffect } from 'react'
import { useState } from 'react'
import './Task.css'

const Task = ({task, selectedTasks ,setSelectedTasks}) => {

  const [isChecked, setIsChecked] = useState(false)

  //ha az isChecked értéke true-ra változik az adott taskot hozzáadjuk a selectedTask arrayhez.
  useEffect(() => {
    
    if (isChecked === true) {
      setSelectedTasks([...selectedTasks, task])
    } 
    else {
        const updatedTasks = selectedTasks.filter((e) => {
          if (e.id === task.id) {
            return false
          } else {
            return true
          }})
        setSelectedTasks(updatedTasks)
      }
    }, [isChecked])

  return (
    <div className='task-container'>
        
        <input type="checkbox" 
               onChange={() => {isChecked ? setIsChecked(false) : setIsChecked(true)}} />

        <span>{task.task}</span>
    
    </div>
  )
}

export default Task