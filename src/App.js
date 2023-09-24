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
  return (
    <div className="container">
      <Header title='task-tracker' text='Hellos' />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
