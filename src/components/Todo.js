import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Todo = ({ item, onDelete, onToggle }) => {
   return (
      <div className={`todo-container ${item.reminder ? 'reminder-on' : ''}`} onDoubleClick={() => onToggle(item.id)}>
         <h2 className='grid-name'>{item.name}</h2>
         <h4 className='grid-desc'>{item.description}</h4>
         <h4 className='grid-cat'>{item.category}</h4>
         <h4 className='grid-time'>{item.time}</h4>
         <h4 className='grid-priority'>Priority: {item.priority}</h4>
         <FaTimes className='grid-x-icon' onClick={() => onDelete(item.id)} />
      </div>
   )
}

export default Todo
