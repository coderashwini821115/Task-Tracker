import { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import Footer from './components/Footer'
import About from './components/About'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([
    {
        id: 1, 
        text: 'Doctors Appointment',
        day : 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2, 
        text: 'Meeting at School',
        day : 'Feb 6th at 12:30pm',
        reminder: true,
    },
    {
        id: 3, 
        text: 'Food Shopping',
        day : 'Feb 15th at 5:30pm',
        reminder: true,
    },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id? {...task, reminder: !task.reminder}: task)
  )
}
  return (
    <Router>
    <div className='container'>
      <Header onAdd={()=> setShowAddTask(!showAddTask)}
      addTask={showAddTask}/>
      
      <Routes>
      <Route
      path='/'
      element={
        <>
        {showAddTask && <AddTask onAdd={addTask}/> }
        {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
          </>
      }
      />
      <Route path = '/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
