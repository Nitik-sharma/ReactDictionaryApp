import React from 'react'
import Navbar from '../Component/Navbar'
import {  useSelector } from 'react-redux'
function History() {
  const history=useSelector((state)=>state.history.history);
  console.log(history);
  return (
    <div>
        <Navbar/>   
        <h1>Searched History</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <a> {item.word} </a>
                    </li>
                ))}
            </ul>

    </div>
  )
}

export default History
