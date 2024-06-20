import React from 'react'
import './Header.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Header = () => {
    
    return (
        <div className='flex flex-col items-center justify-center h-[100%] w-[100%]' id='hero'>
            <div className='flex px-[50px] py-[40px] justify-between h-[100px] w-[100%] text-start' >
                <div className='flex justify-center items-center  w-[100%]'>
                    <img className='w-[48px] h-[48px] m-auto bg-white' src="https://webstockreview.net/images/resume-clipart-resume-icon.png" alt="error" />
                    <h1 className='w-[100%] top-0 px-4 text-4xl m-auto font-semibold text-white text-start  main-heading'>Resume Craft</h1>
                </div>
                <div className='flex  my-auto  justify-end items-center w-[100%]'>
                    <p className='m-4 text-xl font-semibold text-white cursor-pointer text-start'>Protfolio</p>
                    <Link activeClass="active"
                        to="ContactUs"
                        spy={true}
                        smooth={true}
                        offset={-10}
                        duration={800} className='m-4 text-xl font-semibold text-white cursor-pointer text-start'>Contact Us</Link>
                </div>
            </div>
            <div className="container flex items-center gap-20 justify-center p-[50px]">
                <div data-aos="fade-right"  className='flex flex-col gap-4'>
                    <h2 className='text-start text-5xl  font-bold text-white max-w-[650px] h-auto leading-[70px]'>Unleash Your Potential with the Resume Craft</h2>
                    <p className='text-xl text-white text-start max-w-[650px]'>"Boost your career with our powerful, easy-to-use resume builder—create a standout resume in minutes and land your dream job!"</p>
                    <Link activeClass="active"
                        to="editor"
                        spy={true}
                        smooth={true}
                        offset={-1}
                        duration={800}
                        className=' text-xl  hover:text-[#003B77] font-semibold  cursor-pointer max-w-[200px] text-[#3ed3cd]  py-2 rounded-sm hover:bg-[#3ed3cd] border-2 border-[#3ed3cd]'>Build Resume</Link>


                </div>
                <div><img className="h-[500px] relative  mix-blend-multiply background-image" data-aos="fade-left" src="https://img.freepik.com/free-photo/man-pointing-lateral_1368-663.jpg" alt="error" /></div>
            </div>
        </div>
    )
}

export default Header
//bg-[#c1b5f7]
