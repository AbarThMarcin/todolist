import React from 'react'
import Todo from './Todo'

const Todos = ({ items, onDelete, onToggle }) => {
   return (
      <>
         {items.map(item => (
            <Todo key={item.id} item={item} onDelete={onDelete} onToggle={onToggle} />
         ))}
      </>
   )
}

export default Todos
