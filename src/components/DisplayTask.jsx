import React from 'react'
import './DisplayTask.css'
import TaskDetails from './TaskDetails'
const DisplayTask = ({displayTask, handleCheckMark, handleDelete}) => {

  return (
    <div className='display-task'>
       <div className="container-task">
        {displayTask.map(currTask => (
          <div className='list'>
            <div className="check-box">
              <input 
                className='check' 
                checked={currTask.checkbox}
                onChange= {() => handleCheckMark(currTask.id)}   
                type="checkbox" 
                />
            </div>
              <p style={currTask.checkbox ? {textDecoration: 'line-through'}: null} className='task' key={currTask.id}>{currTask.task}</p>
          </div>     
          
  ))}
    <TaskDetails displayTask={displayTask} handleDelete={handleDelete} />
  </div>

    </div>
  )
}

export default DisplayTask

