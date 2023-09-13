import React from 'react'
import './TaskCard.css'
import { AnimatePresence, motion } from "framer-motion"
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
          <AnimatePresence>
            { tasks.length > 0 
              ? 
                tasks.map(task => <motion.div className='task-motion'
                                              initial={{ opacity: 0, x: 10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              exit={{ opacity: 0, x: 20 }}
                                              transition={{ duration: 0.3 }}>

                                        <Task task={task} 
                                              key={task.id} 
                                              selectedTasks={selectedTasks}
                                              setSelectedTasks={setSelectedTasks} />
                                  </motion.div> )
              : 
                <p>You have no tasks for {day}</p>
              
            } </AnimatePresence>
        </div>
    </div>
  )
}

export default TaskCard