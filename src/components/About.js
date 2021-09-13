import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
   return (
      <div style={{ margin: '20px' }}>
         Version 1.0<br />
         <Link to='/'>Go back</Link>
      </div>
   )
}

export default About