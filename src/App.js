import './App.css';
import AddForm from './components/AddForm';
import Header from './components/Header'
import Todos from './components/Todos';
import { useState, useEffect } from 'react'

const URL_ENDPOINT = 'http://localhost:5000/tasks'

function App() {

   const [showAddForm, setShowAddForm] = useState(true)
   const [items, setItems] = useState([])

   const sortingFunction = (a, b) => {
      if (a.name === b.name) {
         if (a.priority === b.priority) return 0
         return (a.priority > b.priority ? 1 : -1)
      } else {
         return (a.name > b.name ? 1 : -1)
      }
   }

   useEffect(() => {
      const getData = async () => {
         const data = await fetchTasks()
         setItems(data.sort(sortingFunction))
      }
      getData()
   }, [])

   // Fetch tasks from server
   const fetchTasks = async () => {
      const res = await fetch(URL_ENDPOINT)
      const tasks = await res.json()
      return tasks
   }

   // Fetch task from server
   const fetchTask = async (id) => {
      const res = await fetch(`${URL_ENDPOINT}/${id}`)
      const task = await res.json()
      return task
   }

   // Add Todo
   const addTodo = async (task) => {
      const res = await fetch(`${URL_ENDPOINT}`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(task)
      })

      const newTask = await res.json()

      setItems([...items, newTask].sort(sortingFunction))
   }

   // Delete Todo
   const deleteTodo = async (id) => {
      await fetch(`${URL_ENDPOINT}/${id}`, {
         method: 'DELETE'
      })
      setItems(items.filter(task => task.id !== id))
   }

   // Toggle Reminder
   const toggleReminder = async (id) => {

      const toggledTask = await fetchTask(id)
      const updTask = { ...toggledTask, reminder: !toggledTask.reminder }
      const res = await fetch(`${URL_ENDPOINT}/${id}`, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(updTask)
      })
      const data = await res.json()

      setItems(
         items.map(
            task => task.id === id ?
               { ...task, reminder: data.reminder } : task
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
