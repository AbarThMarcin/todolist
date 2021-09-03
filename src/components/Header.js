const Header = ({ toggleAddForm, showAddForm }) => {

   return (
      <div className='header-container'>
         <h1 className='title'>TO DO LIST APP</h1>
         <button className='btn' onClick={toggleAddForm}>{
            showAddForm ? 'HIDE ADD-FORM' : 'SHOW ADD-FORM'
         }</button>
      </div>
   )
}

export default Header
