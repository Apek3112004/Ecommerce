import React from 'react'

const Newsletterbox = () => {
    const onsubmithandler=(event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get <b>20%</b> off </p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fugiat tempore minus architecto. Quia distinctio dolor, ad numquam totam fugiat non eum animi saepe, illum reiciendis. Unde soluta dignissimos in?
      Alias nam at aspernatur dicta corrupti porro maiores quaerat dolore. Cum facilis asperiores repudiandae impedit inventore enim ea blanditiis aperiam quibusdam. Enim unde repudiandae eius ratione expedita porro facilis distinctio.
      </p>
      <form onSubmit={onsubmithandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder="Enter your mail" className='w-full sm:flex-1 outline-none'required/>
        <button type="submit" className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletterbox
