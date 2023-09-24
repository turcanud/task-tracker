import Header from "./conponents/Header";
import Tasks from "./conponents/Tasks";
import { useState } from "react";
import AddTask from "./conponents/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor aap',
      day: '5 oct',
      reminder: false,
    },
    {
      id: 2,
      text: 'Football match',
      day: '29 oct',
      reminder: true,
    },
    {
      id: 3,
      text: 'Derma aap',
      day: '31 oct',
      reminder: true,
    }
  ])

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='task-tracker' text='Hellos' onAdd={() => setShowAddTask(!showAddTask)} isShowing={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask} onToggle={toggleReminder} />) : ('No Tasks')}
    </div>
  );
}

export default App;
