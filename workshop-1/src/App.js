import React, { useState } from 'react';
import Task from './Task';

const taskData = [
  { id: 1, title: 'Do stuff', description: 'Do the stuff', accepted: true },
  {
    id: 2,
    title: 'Do other stuff',
    description: 'Do the other stuff',
    accepted: true
  },
  {
    id: 3,
    title: 'Do even more stuff',
    description: 'Do that stuff too',
    accepted: false
  }
];

const App = () => {
  const [tasks, setTasks] = useState(taskData);

  const toggleAccepted = (tasks, index) => () => {
    const updatedTasks = [...tasks];
    updatedTasks[index].accepted = !tasks[index].accepted;
    setTasks(updatedTasks);
  };

  return (
    <div className="">
      <nav className="uk-navbar-container uk-navbar">
        <div className="uk-navbar-left">
          <p className="uk-navbar-item uk-logo uk-margin-remove">Taskr</p>
        </div>
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li className="">
              <a>Task</a>
            </li>
            <li className="">
              <a>Task</a>
            </li>
            <li className="">
              <a>Task</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="">
        {tasks.map((task, index) => (
          <Task
						key={task.id}
            title={task.title}
            description={task.description}
            accepted={task.accepted}
            toggle={toggleAccepted(tasks, index)}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
