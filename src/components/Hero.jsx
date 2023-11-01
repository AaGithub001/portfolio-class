import React from 'react'
import HeroImg from "../components/images/images.jpeg"
import HeroImg2 from "../components/images/00030590.jpg"

const Hero = () => {
  return (  
  <div className ="w-full flex justify-center items-center h-[60vh] gap-16 bg-lime-50 text-red-600">
    <div className='flex flex-col justify-center items-center'>
    <h1 className=" font-extrabold text-3xl text-gray-700">Hello,It's Me Achyut Aryal</h1>
    <h2 className="font-semibold text-2x mb-4 mt-2 text-black">I am a good Web Developer</h2>
    <button className='bg-yellow-500 px-4 py-2 rounded-full text-white font-semibold'>Learn More</button>
    </div>
    <div classname ="ml-5"> 
    <img
    src ={HeroImg}
    alt ="Achyut Aryal"
    className="  ml-32 w-[400px] h-[300px] rounded-full border-2 border-gray-700">
    </img>
    </div>
  </div>
  )
}

export default Hero