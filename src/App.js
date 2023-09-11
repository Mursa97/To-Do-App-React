import './App.css';
import { useState } from 'react';
import TaskCard from './Components/TaskCard/TaskCard';
import TaskInput from './Components/TaskInput/TaskInput';
import TaskActions from './Components/TaskActions/TaskActions';

function App() {
  
  const [todayTasks, setTodayTasks] = useState([])
  const [tomorrowTasks, setTomorrowTasks] = useState([])
  const [selectedTasks, setSelectedTasks] = useState([])


  return (
    <div className="App">

      <TaskInput todayTasks={todayTasks} 
                 setToday={(e) => {setTodayTasks(e)}}
                 tomorrowTasks={tomorrowTasks}
                 setTomorrow={(e) => {setTomorrowTasks(e)}} />
      

      <div className="tasks">
        <TaskCard day='Today' 
                  tasks={todayTasks} 
                  selectedTasks={selectedTasks} 
                  setSelectedTasks={(e) => setSelectedTasks(e)} />

        <TaskCard day='Tomorrow' 
                  tasks={tomorrowTasks}
                  selectedTasks={selectedTasks} 
                  setSelectedTasks={(e) => setSelectedTasks(e)} />
      </div>

      {
        //ha a todayTasks vagy a tomorrowTasks array hossza nagyobb 0-nál akkor megjelennek a TaskActions-ok
        todayTasks.length > 0 || tomorrowTasks.length > 0 
        
        ?

        <TaskActions selectedTasks={selectedTasks}
                   setSelected={(e) => {setSelectedTasks(e)}}
                   todayTasks={todayTasks}
                   setToday={(e) => {setTodayTasks(e)}}
                   tomorrowTasks={tomorrowTasks}
                   setTomorrow={(e) => {setTomorrowTasks(e)}}  />
        
        :
        
        ''
      }
      

    </div>
  );
}

export default App;
