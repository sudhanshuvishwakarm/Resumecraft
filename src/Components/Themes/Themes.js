import React, { useState } from 'react'
import './Themes.css'
import Slider from 'react-slick';



const Themes = ({onData}) => {

  const  [activeResume,setActiveResume]=useState(0)



  let array=["https://imagetolink.com/ib/LNSejgnFmM.png","https://s3.resume.io/cdn-cgi/image/width=524,format=auto/uploads/examples/resume/resume_pages/285/persistent-resource/software-developer-resume-examples.jpg","https://s3.resume.io/cdn-cgi/image/width=524,format=auto/uploads/examples/resume/resume_pages/255/persistent-resource/web-developer-resume-examples.jpg",];

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  
  return (
    <div className='' id='test'>
      <Slider {...settings}>
     {
      array.map((event,index)=>{
        return(
          <img key={index} onClick={(e)=>{
            setActiveResume(index)
            onData(index)
          }} 
          style={{
            background:'black',
            margin:'40px'
          }}
          className='cursor-pointer p-[20px]'  src={event} alt="error" />
        )
      })
     }    
     </Slider>
    </div>
  )
}

export default Themes



{/* <img className='h-[300px] cursor-pointer' src="https://s3.resume.io/cdn-cgi/image/width=524,format=auto/uploads/examples/resume/resume_pages/285/persistent-resource/software-developer-resume-examples.jpg" alt="Error" />
<img className='h-[300px] cursor-pointer' src="https://s3.resume.io/cdn-cgi/image/width=524,format=auto/uploads/examples/resume/resume_pages/255/persistent-resource/web-developer-resume-examples.jpg" alt="Error" />
<img className='h-[300px] cursor-pointer' src="https://s3.resume.io/cdn-cgi/image/width=524,format=auto/uploads/examples/resume/resume_pages/186/persistent-resource/data-analyst-resume-examples.jpg" alt="Error" /> */}




// "https://s3.resume.io/cdn-cgi/image/width=524,format=auto/uploads/examples/resume/resume_pages/186/persistent-resource/data-analyst-resume-examples.jpg"