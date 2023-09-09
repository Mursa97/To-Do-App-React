import './App.css';
import { useState } from 'react';
import TaskCard from './Components/TaskCard/TaskCard';
import TaskInput from './Components/TaskInput/TaskInput';

function App() {
  
  const [todayTasks, setTodayTasks] = useState([])
  const [tomorrowTasks, setTomorrowTasks] = useState([])
  
  return (
    <div className="App">
      <TaskInput todayTasks={todayTasks} 
                 setToday={(e) => {setTodayTasks(e)}}
                 tomorrowTasks={tomorrowTasks}
                 setTomorrow={(e) => {setTomorrowTasks(e)}} />
      
      <div className="tasks">
        <TaskCard day='Today' tasks={todayTasks} />
        <TaskCard day='Tomorrow' tasks={tomorrowTasks} />
      </div>

    </div>
  );
}

export default App;
