import React from 'react'
import { useState } from 'react'

const AddForm = ({ onAdd }) => {

   const [name, setName] = useState('')
   const [description, setDescription] = useState('')
   const [category, setCategory] = useState('')
   const [time, setTime] = useState('')
   const [priority, setPriority] = useState('')
   const [reminder, setReminder] = useState(false)

   const onSave = (e) => {
      e.preventDefault()
      if (!name || !category || !time || !priority) {
         alert("Fill all fields, then submit!")
         return
      }
      onAdd({ name, description, category, time, priority, reminder })
      setName('')
      setDescription('')
      setCategory('')
      setTime('')
      setPriority('')
      setReminder(false)
   }

   const assignPriority = (v) => {
      switch (v) {
         case '1 (important)':
            return 1
         case '2':
            return 2
         case '3':
            return 3
         case '4 (not important)':
            return 4
         default:
            return v
      }
   }

   return (
      <form onSubmit={onSave}>
         <div className='form-container'>
            <div className='form-left'>
               <div>
                  <label>Task Name</label>
                  <input className='input' type='text' placeholder='Enter Task Name'
                     value={name}
                     onChange={(e) => setName(e.target.value)} />
               </div>
               <div>
                  <label>Task Description</label>
                  <input className='input' placeholder='Enter Task Description'
                     value={description}
                     onChange={(e) => setDescription(e.target.value)} />
               </div>
               <div>
                  <label>Category</label>
                  <input className='input' type='text' placeholder='Choose Category' list='categoryList'
                     value={category}
                     onChange={(e) => setCategory(e.target.value)} />
                  <datalist id='categoryList'>
                     <option>Nikoś</option>
                     <option>Dom</option>
                     <option>Ogród</option>
                     <option>Rozwój</option>
                  </datalist>
               </div>
            </div>

            <div className='form-right'>
               <div>
                  <label>Date & Time</label>
                  <input className='input' type='text' placeholder='Enter Date & Time'
                     value={time}
                     onChange={(e) => setTime(e.target.value)} />
               </div>
               <div>
                  <label>Priority</label>
                  <input className='input' type='text' placeholder='Choose Priority' list='priorityList'
                     value={priority}
                     onChange={(e) => setPriority(assignPriority(e.target.value))} />
                  <datalist id='priorityList'>
                     <option>1 (important)</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4 (not important)</option>
                  </datalist>
               </div>
               <div className='reminder-container'>
                  <div><label>Reminder</label></div>
                  <div className='reminder-checkbox'><input type='checkbox'
                     checked={reminder}
                     onChange={(e) => setReminder(e.target.checked)} /></div>
                  <div><input type='submit'
                     className='btn-save'
                     value='SAVE TASK' /></div>
               </div>
            </div>
         </div>
      </form>
   )
}

export default AddForm