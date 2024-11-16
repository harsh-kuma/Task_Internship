import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../stores/taskReducer';

function Today() {

const dispatch = useDispatch();
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
const items = useSelector(state => state.tasks.filter(task => (task.date === today & task.status === 'Pending') ))
const items2 = useSelector(state => state.tasks.filter(task => (task.date === today & task.status === 'Done') ))

  const onUpdate = (id,text,date,priority,status) => {
    dispatch(updateTask({ id,text,date,priority,status }));
  }

  const deleteTask=(id)=>{
    dispatch(removeTask({id}));
  }

  return (
    <>
      <div className='bg-slate-100 p-3'>
        <p className='flex justify-center content-center  font-semibold mb-3 text-amber-600 text-2xl'>Todays Tasks</p>
        <div className=' ml-3 mr-3 md:grid md:grid-cols-3 text-lg font-semibold font-serif'>
          <div>
            <p className='text-justify'>A new day means a new life, new hope. Be positive and enjoy your day. Have a great day.</p>
            <p>Date : {today}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center content-center'>
        <div>
          {items.map((item, index) =>
            <div className='border rounded-md bg-gray-100 p-2 mt-3' key={item.id}>
              <div className='  flex  w-80 md:w-auto '>
                <p className='text-gray-800 font-semibold w-48 h-fit text-sm'>{item.text}</p>
                <div className='flex font-semibold'>
                  <div><p className='text-red-600 ml-3 p-0.5 w-16 rounded-sm m-1 md:ml-7'>{item.status}</p></div>
                  <div><button className='text-black-200 ml-2 w-16 m-1 hover:bg-green-500 rounded-sm md:ml-7 bg-green-300 p-1 text-end flex justify-center content-center' onClick={() => onUpdate(item.id,item.text,item.date,item.priority,'Done')}>Done</button></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center content-center'>
        <div>
          {items2.map((item, index) =>
            <div className='border rounded-md bg-gray-100 p-2 mt-3' key={item.id}>
              <div className='   flex  w-80 md:w-auto '>
                <p className='text-gray-800 font-semibold w-48 h-fit text-sm'>{item.text}</p>
                <div className='flex font-semibold'>
                  <div><p className='text-green-600 ml-3 p-0.5 w-16 rounded-sm m-1 md:ml-7'>{item.status}</p></div>
                  <div><button className='text-black-200 ml-2 m-1 w-16 hover:text-red-500 rounded-sm md:ml-7 p-1 text-end' onClick={() => deleteTask(item.id)}><FontAwesomeIcon icon={faTrash}/></button></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Today
