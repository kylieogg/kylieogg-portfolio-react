import React from 'react';
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/Javascript.png';
import ReactImg from '../assets/React.png';
import Tailwind from '../assets/Tailwind.png';
import GitHub from '../assets/Github.png';

const Skills = () => {
  return (
    <div name='skills' className='bg-gray-900 text-gray-300 w-full h-screen'>
       {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p> 
                <p className='py-4'>These are the technologies I have worked with.</p>  
            </div> 

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React JS icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;