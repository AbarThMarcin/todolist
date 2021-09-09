import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Todo = ({ item, onDelete, onToggle }) => {
   return (
      <div className={`todo-container ${item.reminder ? 'reminder-on' : ''} ${item.priority === 1 ? 'important' : ''}`}
         onDoubleClick={() => onToggle(item.id)}>
         <h3 className='grid-name'>{item.name}</h3>
         <h5 className='grid-desc'>{item.description}</h5>
         <h5 className='grid-cat'>{item.category}</h5>
         <h5 className='grid-time'>{item.time}</h5>
         <h5 className='grid-priority'>Priority: {item.priority}</h5>
         <FaTimes className='grid-x-icon' onClick={() => onDelete(item.id)} />
      </div>
   )
}

export default Todo