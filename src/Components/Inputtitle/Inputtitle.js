import React from 'react'
import "./Inputtitle.css"
const Inputtitle = (props) => {
  return (
    <div className='container flex flex-col items-start justify-center px-10 py-4'>
      
        <label className="text-xl leading-10 tracking-[1px] font-semibold" >{props.label} </label>
          <input type="text" className='border-2 border-black rounded-md w-[100%] h-[40px] p-5' name="name" {...props} />
        
    </div>
  )
}

export default Inputtitle
