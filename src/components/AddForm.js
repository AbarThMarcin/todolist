import React from 'react'

const AddForm = ({ onAdd }) => {
   return (
      <form>
         <div className='form-container'>
            <div className='form-left'>
               <div>
                  <label>Task Name</label>
                  <input className='input' type='text' placeholder='Enter Task Name' />
               </div>
               <div>
                  <label>Task Description</label>
                  <input className='input' placeholder='Enter Task Description' />
               </div>
               <div>
                  <label>Category</label>
                  <input className='input' type='text' placeholder='Choose Category' />
               </div>
            </div>

            <div className='form-right'>
               <div>
                  <label>Date & Time</label>
                  <input className='input' type='text' placeholder='Enter Date & Time' />
               </div>
               <div>
                  <label>Priority</label>
                  <input className='input' type='text' placeholder='Choose Priority' />
               </div>
               <div className='reminder-container'>
                  <div><label>Reminder</label></div>
                  <div className='reminder-checkbox'><input type='checkbox' /></div>
                  <div><button onClick={onAdd} className='btn-save'>SAVE TASK</button></div>
               </div>
            </div>
         </div>
      </form>
   )
}

export default AddForm