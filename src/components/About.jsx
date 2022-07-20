import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
            <div></div>
            </div>
             <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                 <div className='sm:text-right text-4xl font-bold'>
                     <p>Hi. I'm Kylie. I am not your average developer.</p>
                 </div>
            <div>
               <p>
                 I have spent the past 15 years as a music educator. During the pandemic, I was expected to quickly pivot all of my classroom lessons to a 100% remote learning style. After that, I became incredibly interested in technology, and wanted to learn more about how to create beautiful, interactive web pages.    
               </p>
               <br>
               </br>
               <p>
               I am a recent Full-Stack Web Development Bootcamp graduate from The Ohio State University.
               </p>
            </div>
             </div>
        </div>
    </div>
  )
}

export default About;