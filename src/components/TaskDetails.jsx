import React, { useEffect, useState } from 'react'
import './TaskDetails.css'

const TaskDetails = ({displayTask, handleDelete}) => {
    const [newLength, setNewLength] = useState(displayTask.length)

    useEffect(() => {
       const newSize = displayTask.filter(task => task.checkbox === false)
        setNewLength(newSize)
    },[displayTask])
  
    return (
    <div className='container-details'>
        <p>{newLength.length} Items left</p>
        <ul>
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
        </ul>
       <button onClick={handleDelete} className='clear-completed'> Clear Completed</button>
    </div>
  )
}

export default TaskDetails