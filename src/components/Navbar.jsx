import React, { use } from 'react'

import './styles.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  let Navigate=useNavigate()
  return (
    <nav>
        <h1>Doctor app</h1>
        <h3> 
          <div>
            <button onClick={()=>Navigate('/')}>Home</button>
          </div>
          <div>
            <button onClick={()=>Navigate('/add-doctor')}>Add doctor</button>
          </div>
        </h3>
    </nav>
  )
}

export default Navbar