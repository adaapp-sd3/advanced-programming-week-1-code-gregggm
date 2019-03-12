import React, { useReducer } from 'react';
import Task from './Task';
import reducer from './reducer';

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

const makeReorderable = (list, setList) => {
	let active = null;

	const onDragStart = (index) => () => active = index;

	const onDrop = (index) => () => {
		const newList = [...list];
		const movedItem = newList.splice(active, 1)[0];
		newList.splice(index, 0, movedItem);
		setList(newList);
	}

	return [onDragStart, onDrop]
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, taskData);
	// const [onDragStart, onDrop] = makeReorderable(tasks, setTasks);

  // const toggleAccepted = (tasks, index) => () => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].accepted = !tasks[index].accepted;
  //   setTasks(updatedTasks);
  // };

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
        {state.map(task => {
					return (
          <Task
						key={task.id}
            title={task.title}
            description={task.description}
            accepted={task.accepted}
            toggle={() => {
							dispatch({ type: 'TOGGLE', payload: task.id })}
							}
						// onDragStart={onDragStart(index)}
						// onDrop={onDrop(index)}
          />
        )})}
      </main>
    </div>
  );
};

export default App;
