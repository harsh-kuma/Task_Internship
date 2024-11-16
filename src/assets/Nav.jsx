import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [navopen, setNaveopen] = useState(false);
  return (
    <div className=' bg-white shadow-lg sticky z-50 top-0'>
      <div className='p-2 flex'>
        <button className='text-xl ml-2' onClick={() => setNaveopen(true)}><FontAwesomeIcon icon={faBars} /></button>
        <p className=' text-black font-serif font-bold text-xl md:text-3xl text-center w-full' >Task - Managment</p>
      </div>
      {navopen ? <div className='w-60 h-screen absolute p-2 bg-white shadow-lg top-0'>
        <div className='m-2 text-xl flex'><p className='bg-black text-white rounded-full p-1'>TM</p><p className='w-full text-end'><FontAwesomeIcon icon={faXmark} onClick={() => setNaveopen(false)} /></p></div>
        <div className='mt-5 pt-1 pb-1 border-gray-300 font-bold rounded-md bg-gray-200 pl-2 hover:text-amber-600 '><Link to='/today' onClick={()=>setNaveopen(false)}>Today's Task</Link></div>
        <div className='mt-3 pt-1 pb-1 border-gray-300 font-bold rounded-md bg-gray-200 pl-2 hover:text-amber-600 '><Link to='/' onClick={()=>setNaveopen(false)}>Add Task</Link></div>
        <div className='mt-3 pt-1 pb-1 border-gray-300 font-bold rounded-md bg-gray-200 pl-2 hover:text-amber-600 '><Link to='/all' onClick={()=>setNaveopen(false)}>All Task</Link></div>
        <div className='mt-3 pt-1 pb-1 border-gray-300 font-bold rounded-md bg-gray-200 pl-2 hover:text-amber-600 '><Link to='/complete' onClick={()=>setNaveopen(false)}>Completed Task</Link></div>
      </div> : <div></div>}
    </div>
  )
}

export default Nav
