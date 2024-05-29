import React, { useRef,useEffect } from 'react'
import './Resume.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const Resume = ({basic,workExp,projectData,educationData,achivementData,summaryData,pallateActive}) => {

   const pdfRef = useRef();
  // const basic = props.basic
  // const workExp = props.workExp
  // const projectData = props.projectData
  // const educationData = props.educationData
  // const achivementData = props.achivementData
  // const summaryData = props.summaryData


//   const {activeColor}=props


// useEffect(() => {
//   console.log('Active Color:', activeColor);
// }, [activeColor]);


  console.log(pallateActive)





  const downloadPDF = () => {
    const input = pdfRef.current; html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png'); 
      const pdf = new jsPDF('p', 'mm', 'a4', true); 
      const pdfWidth = pdf. internal. pageSize.getWidth();
       const pdfHeight = pdf. internal.pageSize.getHeight(); 
       const imgWidth = canvas. width; 
       const imgHeight = canvas.height; 
       const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2; 
        const imgY = 30; pdf .addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio); pdf.save('invoice.pdf');
  });
  };

  


  return (
    <div className='flex flex-col w-[794px] h-[1124px]' ref={pdfRef}>
      <section className='flex flex-col  w-[794px] h-[1124px]    mx-auto bg-white' >
        <div className='flex flex-col basic'>
          <div className='flex flex-col gap-[14px] p-10 text-center bg-slate-700'>
            <h1 className=' py-2 text-[40px] text-white font-semibold leading-10 '> {basic.name}</h1>
            <p className="text-4xl " style={{color:pallateActive}}>{basic.title}</p>

          </div>

        </div>


        <div className='flex justify-between w-[100%] h-[100%]'>
          <div className='flex flex-col text-start h-[100%] w-[60%] p-10 bg-orange-200 left '>
            <div className='flex flex-col text-start w-[100%] left py-5'>
              <h1 className='py-2 text-3xl font-semibold leading-10 underline '>Contact Details</h1>
              <p><i className="m-2 fa-solid fa-envelope"></i>{basic.email}</p>
              <p><i className="m-2 fa-solid fa-phone"></i>{basic.phone}</p>
              <p><i className="m-2 fa-brands fa-linkedin"></i>{basic.linkedin}</p>
              <p><i className="m-2 fa-brands fa-github"></i>{basic.github}</p>
            </div>
            <div className="flex flex-col text-start w-[100%] left py-5">
              <h1 className='py-2 text-3xl font-semibold leading-10 underline '>{educationData.sectiontitle}</h1>
              <p>{educationData.sectiontitletitle}</p>
              <p className='text-[17px] font-semibold'>{educationData.course}</p>
              <p className='leading-7'>{educationData.university}</p>
              <p className='leading-7'>{educationData.collage}</p>
              <p className='leading-7'>{educationData.startdate}</p>
              <p className='leading-7'>{educationData.enddate}</p>
            </div>
            <div className="flex flex-col text-start w-[100%] left py-5">
              <h1 className='py-2 text-3xl font-semibold leading-10 underline '>{achivementData.sectiontitle}</h1>
              <p className='leading-7'>{achivementData.achivement1}</p>
              <p className='leading-7'>{achivementData.achivement2}</p>
              <p className='leading-7'>{achivementData.achivement3}</p>
              <p className='leading-7'>{achivementData.achivement4}</p>
            </div>
          </div>







          <div className='flex flex-col text-start w-[100%] bg-white left p-10'>

            <div className="flex flex-col py-5">
              <h1 className='flex py-2 text-3xl font-semibold leading-10 underline '>{summaryData.sectiontitle}</h1>
              <p>{summaryData.summary}</p>


            </div>
            <div className="flex flex-col py-5">
              <h1 className='py-2 text-3xl font-semibold leading-10 underline '>{projectData.sectiontitle}</h1>
              <p className='text-[17px] font-semibold'>{projectData.title}</p>
              <p className='py-[2px] underline cursor-pointer'>{projectData.deploylink}</p>
              <p className='py-[2px] underline cursor-pointer'>{projectData.githublink}</p>
              <li>{projectData.overview}</li>
              <li>{projectData.projectdescription}</li>

            </div>
            <div className="flex flex-col py-5 text-start">
              <h1 className='py-2 text-3xl font-semibold leading-10 underline '>{workExp.sectiontitle}</h1>
              <p className='text-[17px] font-semibold'>{workExp.title}</p>
              <p>{workExp.company}</p>
              <p>{workExp.certificate}</p>
              <p>{workExp.startdate}</p>
              <p>{workExp.enddate}</p>
              <p>{workExp.location}</p>
              <li>{workExp.description1}</li>
              <li>{workExp.description2}</li>
              <li>{workExp.description3}</li>
            </div>
          </div>



        </div>
      </section>

      <button type='file' className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-5  w-[100px]" onClick={downloadPDF}>Download </button></div>
  )
}

export default Resume
