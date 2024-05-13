import React, { useRef } from 'react'
import './Resume.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const Resume = (props) => {

  const pdfRef = useRef();
  const basicInfo = props.basic
  const workExp = props.workExp
  const projectDatas = props.projectData
  const educationtDatas = props.educationData
  const achivementDatas = props.achivementData
  const summaryDatas = props.summaryData
  



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
    <div className='flex flex-col'>
      <section className='flex flex-col h-auto  w-[70%] mx-auto bg-white' ref={pdfRef}>
        <div className='flex flex-col basicinfo'>
          <div className='text-center p-7 bg-slate-700'>
            <h1 className='text-[40px] text-white font-semibold leading-10 '> {basicInfo.name}</h1>
            <p className={`text-4xl `}>{basicInfo.title}</p>
          </div>

        </div>


        <div className='flex justify-between w-[100%]'>
          <div className='flex flex-col text-start w-[60%] p-10 bg-orange-200 left '>
            <div className='flex flex-col text-start w-[100%] left py-5'>
              <h1 className='text-3xl font-semibold leading-10 underline'>Contact Details</h1>
              <p><i className="m-2 fa-solid fa-envelope"></i>{basicInfo.email}</p>
              <p><i className="m-2 fa-solid fa-phone"></i>{basicInfo.phone}</p>
              <p><i className="m-2 fa-brands fa-linkedin"></i>{basicInfo.linkedin}</p>
              <p><i className="m-2 fa-brands fa-github"></i>{basicInfo.github}</p>
            </div>
            <div className="flex flex-col text-start w-[100%] left py-5">
              <h1 className='text-3xl font-semibold leading-10 underline'>{educationtDatas.sectiontitle}</h1>
              <p>{educationtDatas.sectiontitletitle}</p>
              <p className='font-semibold'>{educationtDatas.course}</p>
              <p className='leading-7'>{educationtDatas.university}</p>
              <p className='leading-7'>{educationtDatas.collage}</p>
              <p className='leading-7'>{educationtDatas.startdate}</p>
              <p className='leading-7'>{educationtDatas.enddate}</p>
            </div>
            <div className="flex flex-col text-start w-[100%] left py-5">
              <h1 className='text-3xl font-semibold leading-10 underline '>{achivementDatas.sectiontitle}</h1>
              <p className='leading-7'>{achivementDatas.achivement1}</p>
              <p className='leading-7'>{achivementDatas.achivement2}</p>
              <p className='leading-7'>{achivementDatas.achivement3}</p>
              <p className='leading-7'>{achivementDatas.achivement4}</p>
            </div>
          </div>







          <div className='flex flex-col text-start w-[100%] bg-white left p-10'>

            <div className="flex flex-col py-5">
              <h1 className='text-3xl font-semibold leading-10 underline'>{summaryDatas.sectiontitle}</h1>
              <p>{summaryDatas.summary}</p>


            </div>
            <div className="flex flex-col py-5">
              <h1 className='text-3xl font-semibold leading-10 underline'>{projectDatas.sectiontitle}</h1>
              <p>{projectDatas.title}</p>
              <p>{projectDatas.overview}</p>
              <p>{projectDatas.deploylink}</p>
              <p>{projectDatas.gtihublink}</p>
              <p>{projectDatas.projectdescription}</p>

            </div>
            <div className="flex flex-col py-5 text-start">
              <h1 className='text-3xl font-semibold leading-10 underline'>{workExp.sectiontitle}</h1>
              <p className='font-semibold'>{workExp.title}</p>
              <p>{workExp.company}</p>
              <p>{workExp.certificate}</p>
              <p>{workExp.startdate}</p>
              <p>{workExp.enddate}</p>
              <p>{workExp.location}</p>
              <p>{workExp.description1}</p>
              <p>{workExp.description2}</p>
              <p>{workExp.description3}</p>
            </div>
          </div>



        </div>
      </section>

      <button type='file' className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-5  w-[100px]" onClick={downloadPDF}>Download </button></div>
  )
}

export default Resume
