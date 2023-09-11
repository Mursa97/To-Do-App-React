import React from 'react'
import './TaskActions.css'
import TomorrowIcon from '../../img/tomorrow.svg'
import TodayIcon from '../../img/today.svg'
import DeleteIcon from '../../img/delete.svg'

const TaskActions = ({selectedTasks, setSelected, todayTasks, setToday ,tomorrowTasks, setTomorrow}) => { 
  
  //filter segítségével eltároljuk azokat a taskokat, amiket a selectedTasks nem tartalmaz, majd frissítjük erre a Today és Tomorrow taskokat.
  const deleteTask = () => {
    const updatedToday = todayTasks.filter(item => !selectedTasks.includes(item))
    const updatedTomorrow = tomorrowTasks.filter(item => !selectedTasks.includes(item))
    setToday(updatedToday)
    setTomorrow(updatedTomorrow)
    setSelected([])
  }

  const moveTomorrow = () => {
    // azok a taskok amiket a todayTasks és a selectedTasks is tartalmaz
    const toMove = todayTasks.filter(item => selectedTasks.includes(item))
    // azok a taskok amiket a selectedTasks nem tartalmaz
    const updatedToday = todayTasks.filter(item => !toMove.includes(item))
    // toMove array tartalmának pusholása a tomorrowTasks arraybe
    setTomorrow([...tomorrowTasks, ...toMove])
    // a mozgatott taskok nélküli array pusholása a todayTasks arraybe
    setToday(updatedToday)
    // isSelected array nullázása
    setSelected([])
  }

  const moveToday = () => {
    const toMove = tomorrowTasks.filter(item => selectedTasks.includes(item))
    const updatedTomorrow = tomorrowTasks.filter(item => !toMove.includes(item))
    setToday([...todayTasks, ...toMove])
    setTomorrow(updatedTomorrow)
    setSelected([])
  }

  return (
    <div className='task-actions-container'>

        <button className='action' onClick={() => {moveToday()}}>
            <img src={TodayIcon} alt='Move task to today tasks'/>
            <span>Today</span>
        </button>

        <button className='action' onClick={() => {moveTomorrow()}}>
            <img src={TomorrowIcon} alt='Move task to tomorrow tasks'/>
            <span>Tomorrow</span>
        </button>

        <button className='action' onClick={() => {deleteTask()}}>
            <img src={DeleteIcon} alt='Delete selected tasks'/>
            <span>Delete</span>
        </button>

    </div>
  )
}

export default TaskActions