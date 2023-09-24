import Header from "./conponents/Header";
import Tasks from "./conponents/Tasks";
import { useState } from "react";

function App() {
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

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='task-tracker' text='Hellos' />
      {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask} />) : ('No Tasks')}
    </div>
  );
}

export default App;
