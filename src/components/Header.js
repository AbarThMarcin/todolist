const Header = ({ toggleAddForm, showAddForm }) => {

   return (
      <div className='header-container'>
         <h2 className='title'>TO DO LIST APP</h2>
         <button className='btn' onClick={toggleAddForm}>{
            showAddForm ? 'HIDE ADD-FORM' : 'SHOW ADD-FORM'
         }</button>
      </div>
   )
}

export default Header
