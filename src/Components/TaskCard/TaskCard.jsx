import React from 'react'
import './TaskCard.css'
import tomorrowIcon from '../../img/event-upcoming-rounded.svg'
import todayIcon from '../../img/round-event.svg'
import Task from '../Task/Task'

const TaskCard = ({tasks, day, selectedTasks, setSelectedTasks}) => {

  return (
    <div className='task-card-container'>

        <div className='header'>
            <img src={day === 'Today' ? todayIcon : tomorrowIcon} />
            <h1>{day} Tasks</h1>
        </div>


        <div className="tasks">
            { tasks.length > 0 
              ? 
                tasks.map(task => <Task task={task} 
                                        key={task.id} 
                                        selectedTasks={selectedTasks}
                                        setSelectedTasks={setSelectedTasks} /> )
              : 
                <p>You have no tasks for {day}</p>
              
            }
        </div>
    </div>
  )
}

export default TaskCard