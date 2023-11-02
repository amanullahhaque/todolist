"use client"
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setMainTask] = useState([])

    const subitHandler = (e)=>{
        e.preventDefault()
         setMainTask([...mainTask, { title, desc}]);

        settitle("")
        setdesc("")
        console.log(mainTask)
    }

    let renderTask = <h2>No Task Available</h2>
   renderTask =  mainTask.map((t,i)=>{
    return (
        <div className='flex justify-between'>
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
    </div>
    )
    
    })
  return (
    <>
        <h2 className='bg-green-100 text-4xl font-bold text-center py-5 shadow-lg'>My Todo List</h2>
      <form onSubmit={subitHandler} className='grid grid-cols-3 gap-5 p-8'>
        <input className='border-2 border-gray-400 rounded-lg p-4'
            type='text'
            placeholder='Enter title' 
            value={title} 
            onChange={(e)=>
                settitle(e.target.value)
            }
        />
        <input className='border-2 border-gray-400 rounded-lg p-4' type='text' placeholder='Enter Description'
        value={desc}
        onChange={(e)=>
            setdesc(e.target.value)
        }
        />
         <button className='bg-gray-400 text-white rounded-md'>Add task</button>
      </form>

      <div className='p-8 bg-slate-200'>
        <ul>
            {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
