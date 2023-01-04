import React from 'react'
import './InputTask.css'


const InputTask = ({handleSubmit, task, setSingleTask, handleBackground}) => {
 
  return (
    <div className='input-task'>
      <div className='container'>
        <div className="top">
          <h1>TODO</h1>
          <div onClick={handleBackground} className="input-img"></div>
        </div>
       <form action="" onSubmit={handleSubmit}>
        <div className="bottom">
            <div className="bottom-checkbox">
                <input checked = {false} className='checkbox' type="checkbox" />
            </div>
              <input 
                className='task-input' 
                type="text" 
                placeholder='enter todo..' 
                value={task}
                onChange={(e) => setSingleTask(e.target.value)}
                required
                />
          </div>
       </form>
      </div>
    </div>
  )
}

export default InputTask