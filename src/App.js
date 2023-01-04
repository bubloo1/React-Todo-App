import {React, useState, useRef} from 'react';
import './App.css';
import DisplayTask from './components/DisplayTask';
import InputTask from './components/InputTask';


function App() {
  const newRef = useRef('')
  const [task, setSingleTask] = useState('')
  const [allTask, setTask] = useState([])
  const [background, setBackground] = useState(false)


 function handleSubmit(e) {
    e.preventDefault()

    const newTask = {id: allTask.length + 1, task: task, checkbox: false}
    setTask([...allTask, newTask])
    setSingleTask('')
   
  }


function handleCheckMark(taskId){
  const newTask = allTask.map(currTask => (
    currTask.id === taskId ? {...currTask, checkbox: !currTask.checkbox } : currTask
  ))
  setTask(newTask)

  }
  
  function handleDelete (){
    const task = allTask.filter(currTask => currTask.checkbox === false)
    setTask(task)
  }

  function handleBackground(){
      setBackground(!background)
  }

  return (
    <div className="app">
      <div onClick={handleBackground} 
            ref={newRef}
            className={ `background-img ${background ? "dark" : "active"} `}></div>
      <InputTask handleSubmit={handleSubmit} task={task} setSingleTask = {setSingleTask} handleBackground={handleBackground}/>
      <DisplayTask displayTask = {allTask} handleCheckMark={handleCheckMark} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
