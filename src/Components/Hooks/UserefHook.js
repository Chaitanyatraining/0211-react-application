import React, { useEffect, useRef } from 'react'

function UserefHook() {    
    // useState will re-render when the content changes and updates in UI.

    // useRef doesn't notify you when its content changes. Mutating the (.current) property doesn't cause a re-render

   const data = useRef(null);

   const handleSubmit = (e)=>{
    e.preventDefault();
        console.log(data.current.value)
   }

   useEffect(()=>{
    data.current.focus();
   })

  return (
    <div>
        <h2>UserefHook</h2>

        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <form onSubmit={handleSubmit}>
                    <input ref={data} type="text" placeholder='Enter you name' className='form-control' />
                    <button className='btn btn-warning mt-3'>Submit</button>
                </form>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
  )
}

export default UserefHook