import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../stores/taskReducer';

function All() {
  const items = useSelector(state => state.tasks)
  const dispatch = useDispatch();

  const deleteTask=(id)=>{
    dispatch(removeTask({id}));
  }
  return (
    <>
    <div className='flex justify-center content-center mt-3 '>
        <div>
          <p className='flex justify-center content-center  font-semibold mb-3 text-amber-600 text-xl'>All Tasks</p>
          {items.map((item, index) =>
            <div className='border rounded-md  bg-gray-100 p-2 mt-3' key={item.id}>
              <div className='flex w-80 md:w-auto '>
                <p className='text-gray-800 font-semibold w-48 h-fit text-sm'>{item.text}</p>
                <div className='flex font-semibold'>
                  <div><p className={` ml-3 p-0.5  rounded-sm w-16 m-1 md:ml-7 ${item.status === 'Done' ? 'text-green-600':'text-red-600'}`}>{item.status}</p></div>
                  <div><button className='text-black-200 ml-2 m-1 p-0.5 w-16 hover:text-red-500 rounded-sm md:ml-7 text-end' onClick={()=>deleteTask(item.id)}><FontAwesomeIcon icon={faTrash}/></button></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default All
