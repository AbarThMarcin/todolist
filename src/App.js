import AddForm from './components/AddForm';
import './App.css';
import Header from './components/Header'
import { useState } from 'react'
import Todos from './components/Todos';


function App() {

   const [showAddForm, setShowAddForm] = useState(true)
   const [items, setItems] = useState([
      {
         id: 1,
         name: 'Posprzatac',
         description: 'Posprzatac pokoj dzieciecy',
         category: 'dziecko',
         time: 'tomorrow',
         priority: 1,
         reminder: false
      }, {
         id: 2,
         name: 'Zrobic zakupy',
         description: 'Kupic owoce i warzywa',
         category: 'zakupy',
         time: '05-Sep-2021',
         priority: 2,
         reminder: true
      }
   ])

   // Add Todo
   const addTodo = (e) => {
      e.preventDefault()
   }

   // Delete Todo
   const deleteTodo = (id) => {
      setItems(items.filter(item => item.id !== id))
   }

   // Toggle Reminder
   const toggleReminder = (id) => {
      setItems(items.map(
         item => item.id === id ?
            { ...item, reminder: !item.reminder } : item
      )
      )
   }

   return (
      <div className="app-container">
         <Header toggleAddForm={() => setShowAddForm(!showAddForm)}
            showAddForm={showAddForm} />
         {showAddForm && <AddForm onAdd={addTodo} />}
         {items.length > 0 ?
            <Todos
               items={items}
               onDelete={deleteTodo}
               onToggle={toggleReminder}
            /> :
            'No tasks'
         }
      </div>
   );
}

export default App;
