import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
<h1>Dicitionary App</h1>
      </div>
      <div className='right'>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/history'}>History</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
