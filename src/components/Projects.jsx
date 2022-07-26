import React from 'react';
import Run from '../assets/run-buddy-image.png';
import Password from '../assets/password-generator.png';
import Peruse from '../assets/peruse.png';
import Photo from '../assets/photo-port.png';
import Awake from '../assets/awake.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-gray-900'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-4'>Check out some of my class projects.</p>    
            </div> 

            {/* Container */} 
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${Run})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            HTML/CSS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://kylieogg.github.io/run-buddy/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kylieogg/run-buddy" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Password})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://kylieogg.github.io/password-generator/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kylieogg/password-generator" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Peruse})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JavaScript/HTML/CSS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://katensullivan55.github.io/peruse/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kylieogg/peruse" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Photo})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://kylieogg.github.io/photo-port/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/kylieogg/photo-port" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Awake})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://intelligent-mandarine-12379.herokuapp.com/" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/joshgreiff/awake" target="_blank">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Repository</button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    </div>
  )
}

export default Projects;