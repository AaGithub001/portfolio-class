import React from 'react'

const Contact = () => {
  return (
    
<form className="bg-violet-200 mt-8 p-8 w-fit">
<div className='grid grid-cols-2 gap-4'>
  <div className='flex flex-col'>
    <label className='mr-3 '>Firstname</label>
    <input type="text" name='      firstname' placeholder='firstname' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700'/>
  </div>
  <div className='flex flex-col '>
    <label className='mr-3'>Lastname</label>
    <input type="text" name='Lastname' placeholder='Lasttname' className='px-3 py-2 rounded-md border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
  </div>
  <div className='flex flex-col '>
    <label htmlFor="firstname">Phone</label>
    <input type="number" name='phone' placeholder='Phone no.' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
  </div>
  <div className='flex flex-col '>
    <label htmlFor="firstname">Address</label>
    <input type="text" name='address' placeholder='address' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700'/>
  </div>
</div>
<div className='mt-4 flex gap-2'>
    <label htmlFor="Email">Email</label>
    <input type="email" name='Email' placeholder=' Email'  className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700'/>
  </div>
  <div className='mt-4 flex flex-row gap-2 items-center'>
    <label htmlFor="Message">Message</label>
    <textarea name="message" id="" cols="30" rows="5" className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none'></textarea>
  </div>
  <div className='flex justify-center'>
  <button className='bg-yellow-500 mt-4 px-4 py-4 rounded-md text-black font-semibold'> Submit</button>
  </div>
</form>

  )
}

export default Contact