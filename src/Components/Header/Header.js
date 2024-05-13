import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#f0edfe]  '>
            <div className='flex justify-between h-[100px] w-[100%] text-start' >   
                <div className='flex w-[100%]'>
                    <img className='w-[48px] h-[48px] m-auto' src="https://webstockreview.net/images/resume-clipart-resume-icon.png" alt="error" />
                    <h1 className='w-[100%] top-0 p-4 text-4xl m-auto font-semibold text-black text-start  main-heading'>Resume Craft</h1>
                </div>
                <div className='flex  m-auto justify-end items-center w-[100%]'>
                    <p className='m-4 text-xl font-semibold text-black cursor-pointer text-start'>Contact Us</p>
                    <p className='m-4 text-xl font-semibold text-black cursor-pointer text-start'>About</p>
                </div>
            </div>
            <div className="container flex items-center justify-around p-[100px]  h-[600px]">
                <div data-aos="fade-right">
                    <h2 className='text-5xl font-bold text-[#1F2360] w-[650px] h-auto leading-[70px]'>"Unleash Your Potential with the  <span className='span'>Perfect Resume: Craft, Customize, Conquer!"</span> </h2>
                    <button className='px-5 text-xl mt-5 text-center py-2 rounded-sm bg-[#3ed3cd]'>Build Resume</button>
                </div>
                <div><img className="h-[500px]   mix-blend-multiply" data-aos="fade-left" src="https://img.freepik.com/free-photo/man-pointing-lateral_1368-663.jpg"  alt="error" /></div>
            </div>
        </div>
    )
}

export default Header
//bg-[#c1b5f7]