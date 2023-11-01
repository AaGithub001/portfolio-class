import React from 'react'
import HeroImg2 from "../components/images/00030590.jpg"


const About = () => {

  const achyut = [
    {number: "4+", lebel:"Years Experiences"},
    {number: "30+", lebel:"Projects Completed"},
    {number: "10+", lebel:"Satisfied Clients "},

  ]
  return (
    <div className="flex justify-between py-8 bg-gray-200">
      <div className='w-1/2'>
      <h1 className='ml-[300px] pt-10 font-bold text-2xl'>About Us:</h1>
      <p className= 'text-justify ml-8 pt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, possimus laboriosam. Optio, eos. Suscipit culpa odio aperiam dolor laudantium, quibusdam tenetur non perspiciatis exercitationem accusantium delectus explicabo sit dolore numquam. </p>
      <p className='text-justify ml-8 pt-8'>Feel free to contact me to flourish your individual and company goals</p>
      
      <div className='flex justify-center gap-[50px] pt-6 ml-8'>
      
      {achyut.map((achyuts, index) =>(
        <div key={index} className='flex justify-center gap-[50px] pt-6 ml-8'>
          <div className=' bg-white p-4 rounded-lg shadow-lg w-[100px] h-[100px]'>
            <h1 className='text-center font-semibold text-lg'>{achyuts.number}</h1>
            <p>{achyuts.lebel}</p>
            </div>
          </div>
        ))}
        </div>
        </div>
        <div className='w-1/2 flex justify-center'>
      <img className=" W-[300px] h-[300px] justify-between rounded-xl" src={HeroImg2} alt="picture" />
  
    </div>
    </div>
  )
}

export default About