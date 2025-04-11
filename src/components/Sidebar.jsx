import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='min-h-screen w-[15%] bg-gradient-to-b from-blue-500'>
        <div className='flex-col items-center justify-center p-5'>
            <h1 className='text-yellow-400 text-2xl font-semibold'>DashBoard</h1>
            <ul className='flex-col'>
                <NavLink>Journals</NavLink>
                <NavLink>Researcher</NavLink>
                <NavLink>Users</NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar