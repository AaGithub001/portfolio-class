import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const[firstname, setFirstname] = useState("");
  const[lastname, setLastname] = useState("");
  const[phone, setPhone] = useState("");
  const[address, setAddress] = useState("");
  const[email, setEmail] = useState("");
  const[message,setMessage] = useState("");

  console.log(firstname);
  console.log(lastname);
  console.log(phone);
  console.log(address);
  console.log(email);
  console.log(message);

  
  
  const handleClick = (e) => {
  e.preventDefault();
    if (firstname && lastname &&phone && address && email && message )
    {
    toast("form submit successfully");
    setFirstname("");
    setLastname("");
    setPhone("");
    setAddress("");
    setEmail("");
    setMessage("");
  }
  else if(!firstname) {
  toast("Please fill the Firstname");
  }
  else if(!lastname) {
    toast("Please fill the Lastname");
    }
  else if(!phone) {
      toast("Please fill the Phone");
      }
  else if(!address) {
        toast("Please fill the Address");
        }
  else if(!email) {
          toast("Please fill the Email");
          }
  else if(!message) {
            toast("Please fill the Message");
            }
  else
  toast("Please fill the form completely");
  }
  




  return (
    
<form className="bg-violet-200 mt-8 p-8 w-fit">
<div className='grid grid-cols-2 gap-4'>
  <div className='flex flex-col'>
    <label className='mr-3 '>Firstname</label>
    <input value={firstname} required onChange={e => setFirstname(e.target.value)} type="text" name='      firstname' placeholder='firstname' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700'/>
  </div>
  <div className='flex flex-col '>
    <label className='mr-3'>Lastname</label>
    <input value={lastname}  required onChange={e => setLastname(e.target.value)} type="text" name='Lastname' placeholder='Lasttname' className='px-3 py-2 rounded-md border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
  </div>
  <div className='flex flex-col '>
    <label htmlFor="firstname">Phone</label>
    <input  value={phone} required onChange={e => setPhone(e.target.value)}type="number" name='phone' placeholder='Phone no.' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700' />
  </div>
  <div className='flex flex-col '>
    <label htmlFor="firstname">Address</label>
    <input  value={address} required onChange={e => setAddress(e.target.value)} type="text" name='address' placeholder='address' className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700'/>
  </div>
</div>
<div className='mt-4 flex gap-2'>
    <label htmlFor="Email">Email</label>
    <input value={email} required onChange={e => setEmail(e.target.value)} type="email" name='Email' placeholder=' Email'  className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-700'/>
  </div>
  <div className='mt-4 flex flex-row gap-2 items-center'>
    <label htmlFor="Message">Message</label>
    <textarea value={message} required onChange={e => setMessage(e.target.value)} name="message" id="" cols="30" rows="5" className='px-3 py-2 rounded-md  border-blue-400 bg-gray-50 focus:outline-none'></textarea>
  </div>
  <div className='flex justify-center'>
  <ToastContainer />
  <button onClick={handleClick} className='bg-yellow-500 mt-4 px-4 py-4 rounded-md text-black font-semibold'> Submit</button>
  </div>
</form>

  )
}

export default Contact