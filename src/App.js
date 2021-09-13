import './App.css';
import AddForm from './components/AddForm'
import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'
import About from './components/About';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

const URL_ENDPOINT = 'http://localhost:5000/tasks'

function App() {

   const [showAddForm, setShowAddForm] = useState(false)
   const [items, setItems] = useState([])

   const sortingFunction = (a, b) => {
      if (a.priority === b.priority) {
         if (a.name === b.name) return 0
         return (a.name > b.name ? 1 : -1)
      } else {
         return (a.priority > b.priority ? 1 : -1)
      }
   }

   // --------------------------------- fetch ---------------------------------

   // useEffect(() => {
   //    const getData = async () => {
   //       const data = await fetchTasks()
   //       setItems(data.sort(sortingFunction))
   //    }
   //    getData()
   // }, [])

   // // Fetch tasks from server
   // const fetchTasks = async () => {
   //    const res = await fetch(URL_ENDPOINT)
   //    const tasks = await res.json()
   //    return tasks
   // }

   // --------------------------------- axios ---------------------------------

   useEffect(() => {
      axios.get(URL_ENDPOINT)
         .then(res => setItems(res.data.sort(sortingFunction)))
   }, [])

   // -------------------------------------------------------------------------

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
      <Router>
         <div className="app-container">
            <Header toggleAddForm={() => setShowAddForm(!showAddForm)}
               showAddForm={showAddForm} />
            <Route
               path='/'
               exact
               render={(props) => (
                  <>
                     {showAddForm && <AddForm onAdd={addTodo} />}
                     {items.length > 0 ?
                        <Todos
                           items={items}
                           onDelete={deleteTodo}
                           onToggle={toggleReminder}
                        /> :
                        'No tasks'
                     }
                     <Footer />
                  </>
               )} />
            <Route path='/about' component={About} />
         </div>
      </Router>
   );
}

export default App;
