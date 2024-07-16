import { useState } from 'react'
import TaskList from './components/TaskList';
import sunset from './images/sunset.jpeg'
import './App.css'

function App() {

  const [taskInput, setTaskInput] = useState('');
  const [list, setList] = useState(new Map());

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  }

  const addToList = () => {
    if (taskInput.trim()) {
      const id = list.size + 1;
      setList(pervMap => new Map(pervMap).set(id, { id, value: taskInput }));
      setTaskInput('');
    }
  }

  return (
    <div className='main-container'>
      <h1>TO DO</h1>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Write your task"
          value={taskInput}
          onChange={handleChange} />

        <button className='submit-button' onClick={addToList}>+</button>
      </div>

      <div>
        <TaskList taskInput={taskInput} list={list}></TaskList>
      </div>

      <nav>{list.size} tasks</nav>
    </div>
  )
}

export default App
