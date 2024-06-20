import React from 'react'

export default function Contactus() {
  return (
    <>
       <section id="ContactUs" className='flex flex-col items-center justify-center mt-10 w-[100%]  text-white bg-black '>
        <div>
        <h1 className='xs:text-[22pt] text-4xl leading-[32pt] text-center mt-8 mb-3'>CONTACT US</h1>
        <p className="className=' px-6 font-normal lg:text-[14pt] lg:leading-[24xpt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p></div>
        <h2 className='xs:text-[15pt] leading-[32pt] text-center px-[2px]'>Let's build something beautiful together.</h2>
        <div className=' sm:container'> 
          <div className='flex flex-row  xs:h-[35px] sm:h-[40px] justify-center items-center border-white border-[2px]  m-10 '>
            <h1 className='md:w-[250px] xs:w-[120px] text-center font-bold border-r-2 border-white '>Name</h1>
            <textarea type="text" className='text-white sm:px-10 xs:pl-1 w-[100%] h-[30px] border-black border-2 flex justify-start items-center bg-black' placeholder='Enter your name'></textarea>
          </div>
          <div className='flex flex-row xs:h-[35px] sm:h-[40px]  justify-center items-center border-white border-[2px]  m-10 '>
            <h1 className='md:w-[250px] xs:w-[120px] text-center font-bold border-r-2 border-white '>E-mail</h1>
            <textarea type="text" className='text-white sm:px-10 xs:pl-1 w-[100%] h-[30px] border-black border-2  flex justify-start items-center bg-black' placeholder='Enter your E-mail'></textarea>
          </div>
          <div className='flex flex-row xs:h-[35px] sm:h-[40px]  justify-center items-center border-white border-[2px]  m-10 '>
            <h1 className='md:w-[250px] xs:w-[120px]  text-center font-bold border-r-2 border-white '>Message</h1>
            <textarea type="text"  className='text-white sm:px-10 xs:pl-1 w-[100%] h-[30px] border-black border-2  flex justify-start items-center bg-black' placeholder='Text here'></textarea>
          </div>
         
       </div> 
        <button className='px-7  py-2 font-bold text-cyan-500 border-[2px] border-cyan-500 hover:bg-cyan-500 hover:text-black rounded-sm  text-bold'>SUBMIT</button>



      <div className='justify-start gap-6 sm:flex sm:container xs:p-4 sm:px-10'>
        <div>
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Location</p>
        <p className=' font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>405/3 Malviya Nagar,  opposite telephone exchange</p>
        <p className=' font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>   Indore , Madhya Pradesh</p>
         <br />
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>E-mail</p>
        <p className='p-2 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>sudhanshuvishwakarma2005@gmail.com</p>
        

        </div  >
        <div className='mx-auto'>
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt] '>Social</p>
       <div>
        <a href="" className=''> <i className="w-[40px] text-center rounded-[10px] mx-2 text-3xl cursor-pointer hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 fa-brands fa-facebook hover:text-black "></i></a>
      
      <a href="" className=''> <i className="w-[40px] text-center rounded-[10px] mx-2 text-3xl cursor-pointer hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 fa-brands fa-instagram hover:text-black "></i></a>
      <a href="" className=''> <i className="w-[40px] text-center rounded-[10px] mx-2 text-3xl cursor-pointer hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 fa-brands fa-whatsapp hover:text-black "></i></a>
      
       </div>
       
         <br />
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Contact No.</p>
        <p className='p-2 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>9630798512, 9685740803</p>
        </div>
      </div>
      </section>
      
    </>
  )
}
