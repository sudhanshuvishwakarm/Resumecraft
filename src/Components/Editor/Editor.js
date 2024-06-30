import React, { useEffect, useState } from 'react'
import Inputtitle from '../Inputtitle/Inputtitle';
import Resume from '../Resume/Resume';
import './Editor.css'
import Themes from '../Themes/Themes';
import Resume2 from '../Resume/Resume2';


const Editor = ({ sections }) => {
  const section = sections;
  const a = ['white', 'black', 'red', 'yellow', 'aqua']
 
  //from child theme selection
  const [dataFromChild, setDataFromChild] = useState();

  const handleDataFromChild = (childData) => {
    setDataFromChild(childData);
    
  };
  
  const [activeBorder, setActiveBorder] = useState('red')

  const [activestate, setactivestate] = useState(0);
  const [resumestate, setresumestate] = useState(false);
  const [autoTitle, setautoTitle] = useState(Object.keys(section)[activestate]);
  const [basicInfoData, setBasicInfoData] = useState({
    sectiontitle: "Basic Information",
    name: "",
    title: "",
    linkedin: "",
    github: "",
    email: "",
    phone: "",
  })
  const [workExpData, setWorkExpData] = useState({
    sectiontitle: "Work Experience",
    title: "",
    company: "",
    certificate: "",
    location: "",
    startdate: "",
    enddate: "",
    description1: "",
    description2: "",
    description3: "",
  })
  const [project, setProjects] = useState({
    sectiontitle: "Projects",
    title: "",
    // overview: "",
    deploylink: "",
    githublink: "",
    projectdescription: "",
  })
  const [educations, setEducations] = useState({
    sectiontitle: "Education",
    course: "",
    university: "",
    collage: "",
    startdate: "",
    enddate: "",

  })
  const [achivement, setAchivement] = useState({
    sectiontitle: "Achivements",
    achivement1: "",
    achivement2: "",
    achivement3: "",
    achivement4: "",

  })
  const [summarys, setSummarys] = useState({
    sectiontitle: "Summary",
    summary: "",


  })
  const [others, setOthers] = useState({
    sectiontitle: "Other",
    Other: "",


  })


  useEffect(() => {
    setautoTitle(Object.keys(section)[activestate])

  }, [activestate])








  const basicinfo = (<>
    <Inputtitle label={"Title :-"} value={basicInfoData.sectiontitle} placeholder="Enter section title" onChange={(e) => setBasicInfoData(prevState => ({
      ...prevState, sectiontitle: (e.target.value)
    }))}></Inputtitle>

    <div className='flex'>
      <Inputtitle label={"Name :-"} placeholder="Enter full name" value={basicInfoData.name} onChange={(e) => setBasicInfoData(prevState => ({
        ...prevState, name: (e.target.value)
      }))}></Inputtitle>
      <Inputtitle label={"Title :-"} placeholder="Enter your title e.g. frontend devloper" value={basicInfoData.title} onChange={(e) => setBasicInfoData(prevState => ({
        ...prevState, title: (e.target.value)
      }))}></Inputtitle>

    </div>
    <div className='flex'>
      <Inputtitle label={"Linkedin Link :-"} placeholder="Enter your linkedin profile link" value={basicInfoData.linkedin} onChange={(e) => setBasicInfoData(prevState => ({
        ...prevState, linkedin: (e.target.value)
      }))}></Inputtitle>
      <Inputtitle label={"Github Link :-"} placeholder="Enter your github profile link" value={basicInfoData.github} onChange={(e) => setBasicInfoData(prevState => ({
        ...prevState, github: (e.target.value)
      }))}></Inputtitle>


    </div>
    <div className='flex'>
      <Inputtitle label={"Email :-"} placeholder="Enter your Email" value={basicInfoData.email} onChange={(e) => setBasicInfoData(prevState => ({
        ...prevState, email: (e.target.value)
      }))} ></Inputtitle>
      <Inputtitle label={"Enter Phone :-"} placeholder="Enter your phone number" value={basicInfoData.phone} onChange={(e) => setBasicInfoData(prevState => ({
        ...prevState, phone: (e.target.value)
      }))}></Inputtitle>

    </div>
    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setactivestate(1)} >Next</button>
  </>
  )

  const workexp = (<>
    <Inputtitle label={"Title :-"} value={workExpData.sectiontitle} onChange={(event) => setWorkExpData(prevState => ({
      ...prevState, sectiontitle: (event.target.value)
    }))} placeholder="Enter section title"></Inputtitle>

    <div className='flex'>
      <Inputtitle label={"Title :-"} value={workExpData.title} onChange={(event) => setWorkExpData(prevState => ({
        ...prevState, title: (event.target.value)
      }))} placeholder="Enter your title e.g. frontend devloper"></Inputtitle>
      <Inputtitle label={"Company Name :-"} value={workExpData.company} onChange={(event) => setWorkExpData(prevState => ({
        ...prevState, company: (event.target.value)
      }))} placeholder="Enter company name e.g. amazon" ></Inputtitle>

    </div>
    <div className='flex'>
      <Inputtitle label={"Certificate Link :-"} value={workExpData.certificate} onChange={(event) => setWorkExpData(prevState => ({
        ...prevState, certificate: (event.target.value)
      }))} placeholder="Enter cenrtificate link"></Inputtitle>
      <Inputtitle label={"Enter location :-"} value={workExpData.location} onChange={(event) => setWorkExpData(prevState => ({
        ...prevState, location: (event.target.value)
      }))} placeholder="Enter location e.g. Remote"></Inputtitle>

    </div>
    <div className='flex'>
      <Inputtitle label={"Start Date :-"} value={workExpData.startdate} onChange={(event) => setWorkExpData(prevState => ({
        ...prevState, startdate: (event.target.value)
      }))} type="date" ></Inputtitle>
      <Inputtitle label={"End Date :-"} value={workExpData.enddate} onChange={(event) => setWorkExpData(prevState => ({
        ...prevState, enddate: (event.target.value)
      }))} type="date"></Inputtitle>

    </div>

    <Inputtitle label={"Enter Work Description :-"} value={workExpData.description1} onChange={(event) => setWorkExpData(prevState => ({
      ...prevState, description1: (event.target.value)
    }))} placeholder="Line 1"></Inputtitle>
    <Inputtitle placeholder="Line 2" value={workExpData.description2} onChange={(event) => setWorkExpData(prevState => ({
      ...prevState, description2: (event.target.value)
    }))}></Inputtitle>
    <Inputtitle placeholder="Line 3" value={workExpData.description3} onChange={(event) => setWorkExpData(prevState => ({
      ...prevState, description3: (event.target.value)
    }))}></Inputtitle>
    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setactivestate(2)} >Next</button>

  </>
  )
  const projects = (<>
    <Inputtitle label={"Title :-"} value={project.sectiontitle} onChange={(event) => setProjects(prevState => ({
      ...prevState, sectiontitle: (event.target.value)
    }))} placeholder="Enter section title"></Inputtitle>
    <Inputtitle label={"Title :-"} value={project.title} onChange={(event) => setProjects(prevState => ({
      ...prevState, title: (event.target.value)
    }))} placeholder="Enter title e.g. chat app"></Inputtitle>
    {/* <Inputtitle label={"Overview :-"} value={project.overview} onChange={(event) => setProjects(prevState => ({
      ...prevState, overview: (event.target.value)
    }))} placeholder="Enter basic overview of project"></Inputtitle> */}

    <div className='flex'>
      <Inputtitle label={"Deployed Link :-"} value={project.deploylink} onChange={(event) => setProjects(prevState => ({
        ...prevState, deploylink: (event.target.value)
      }))} placeholder="Enter deployed link of project"></Inputtitle>
      <Inputtitle label={"Github Link :-"} value={project.githublink} onChange={(event) => setProjects(prevState => ({
        ...prevState, githublink: (event.target.value)
      }))} placeholder="Enter github link of project"></Inputtitle>

    </div>
    <Inputtitle label={"Enter Project Description :-"} value={project.projectdescription} onChange={(event) => setProjects(prevState => ({
      ...prevState, projectdescription: (event.target.value)
    }))} placeholder="Line 1"></Inputtitle>
    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setactivestate(3)} >Next</button>
  </>
  )
  const education = (<>
    <Inputtitle label={"Title :-"} value={educations.sectiontitle} onChange={(event) => setEducations(prevState => ({
      ...prevState, sectiontitle: (event.target.value)
    }))} placeholder="Enter section title"></Inputtitle>
    <Inputtitle label={"Enter Course :-"} value={educations.course} onChange={(event) => setEducations(prevState => ({
      ...prevState, course: (event.target.value)
    }))} placeholder="Enter your course e.g. Btech"></Inputtitle>
    <Inputtitle label={"Enter university :-"} value={educations.university} onChange={(event) => setEducations(prevState => ({
      ...prevState, university: (event.target.value)
    }))} placeholder="Enter your course e.g. Btech"></Inputtitle>
    <Inputtitle label={"Collage Name :-"} value={educations.collage} onChange={(event) => setEducations(prevState => ({
      ...prevState, collage: (event.target.value)
    }))} placeholder="Enter your collage name"></Inputtitle>

    <div className='flex'>
      <Inputtitle label={"Start Date :-"} value={educations.startdate} onChange={(event) => setEducations(prevState => ({
        ...prevState, startdate: (event.target.value)
      }))} type="date" ></Inputtitle>
      <Inputtitle label={"End Date :-"} value={educations.enddate} onChange={(event) => setEducations(prevState => ({
        ...prevState, enddate: (event.target.value)
      }))} type="date"></Inputtitle>

    </div>
    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setactivestate(4)} >Next</button>
  </>
  )
  const achivements = (<>
    <Inputtitle label={"Title :-"} value={achivement.sectiontitle} onChange={(event) => setAchivement(prevState => ({
      ...prevState, sectiontitle: (event.target.value)
    }))} placeholder="Enter section title"></Inputtitle>


    <Inputtitle label={"List your achivements :-"} value={achivement.achivement1} onChange={(event) => setAchivement(prevState => ({
      ...prevState, achivement1: (event.target.value)
    }))} placeholder="Line 1"></Inputtitle>
    <Inputtitle placeholder="Line 2" value={achivement.achivement2} onChange={(event) => setAchivement(prevState => ({
      ...prevState, achivement2: (event.target.value)
    }))} ></Inputtitle>
    <Inputtitle placeholder="Line 3" value={achivement.achivement3} onChange={(event) => setAchivement(prevState => ({
      ...prevState, achivement3: (event.target.value)
    }))} ></Inputtitle>
    <Inputtitle placeholder="Line 4" value={achivement.achivement4} onChange={(event) => setAchivement(prevState => ({
      ...prevState, achivement4: (event.target.value)
    }))} ></Inputtitle>
    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setactivestate(5)} >Next</button>
  </>
  )
  const summary = (<>
    <Inputtitle label={"Title :-"} value={summarys.sectiontitle} onChange={(event) => setSummarys(prevState => ({
      ...prevState, sectiontitle: (event.target.value)
    }))} placeholder="Enter section title"></Inputtitle>
    <Inputtitle label={"Summary :-"} value={summarys.summary} onChange={(event) => setSummarys(prevState => ({
      ...prevState, summary: (event.target.value)
    }))} placeholder="Enter summary here" ></Inputtitle>
    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setactivestate(6)} >Next</button>
  </>
  )
  const other = (<>
    <Inputtitle label={"Title :-"} value={others.sectiontitle} onChange={(event) => setOthers(prevState => ({
      ...prevState, sectiontitle: (event.target.value)
    }))} placeholder="Enter section title"></Inputtitle>
    <Inputtitle label={"Other :-"} value={others.Other} onChange={(event) => setOthers(prevState => ({
      ...prevState, Other: (event.target.value)
    }))} placeholder="Enter other here"></Inputtitle>

    <button type="button" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center m-4 " onClick={() => setresumestate(true)} >SAVE</button>
  </>
  )

  const activeResume1=(<>
   <Resume others={others} pallateActive={activeBorder} basic={basicInfoData} workExp={workExpData} projectData={project} educationData={educations} achivementData={achivement} summaryData={summarys}></Resume> 
  </>)
  const activeResume2=(<>
   <Resume2 others={others} pallateActive={activeBorder} basic={basicInfoData} workExp={workExpData} projectData={project} educationData={educations} achivementData={achivement} summaryData={summarys}></Resume2> 
  </>)
  const activeResume3=(<>
   <Resume others={others} pallateActive={activeBorder} basic={basicInfoData} workExp={workExpData} projectData={project} educationData={educations} achivementData={achivement} summaryData={summarys}></Resume> 
  </>)

  const activeResumeBody=()=>{
    switch (dataFromChild) {
      case 0:
        return activeResume1
        break;
      case 1:
        return activeResume2
        break;
      case 2:
        return activeResume3
        break;
    
      default:
        return ""
        break;
    }
  }



  const activebody = () => {
    switch (activestate) {
      case 0:
        return basicinfo
        break;
      case 1:
        return workexp
        break;
      case 2:
        return projects
        break;
      case 3:
        return education
        break;
      case 4:
        return achivements
        break;
      case 5:
        return summary
        break;
      case 6:
        return other
        break;

      default:
        return basicinfo
        break;
    }
  }

  return (
    <>
      <h1 id='editor' className='w-[100%] top-0 p-4 text-4xl m-auto font-semibold text-center text-black  heading2' data-aos="fade-left">Fill to create resume</h1>
      <div className='container mx-auto min-h-[600px] max-w-[1000px] m-10' id='totransform' data-aos="flip-left" >
        <div className='container flex items-center justify-center '>
          {
            Object.values(section).map((obj, index) => {
              return (
                <div onClick={() => setactivestate(index)} style={{
                  backgroundColor: activestate === index ? '#3ED3CD' : "",
                  font: 'bold',
                  textDecorationLine: activestate === index ? 'underline' : ""
                }} className={`py-2 text-lg border-2 border-black rounded-sm cursor-pointer flex-1 `} key={index}>{obj}</div>
              )
            })
          }

        </div>
        <div className="container border-2 border-black min-h-[500px]">



          {activebody()}

        </div>
      </div>
      <div  className='bg-[#003B77] p-[30px]    '>
      <h1 id='editor' className='w-[100%] top-0 p-4 text-4xl m-auto font-semibold text-center text-white  heading2' data-aos="fade-left">Select Resume Template</h1>
        <div className=' heading-color'>
                <Themes onData={handleDataFromChild}></Themes>
          {/* <div className="container mx-auto flex justify-around my-[30px] py-[20px]" id='pallate_blur'>
            <div className='flex gap-2 cursor-pointer'>
              {
                a.map((color, index) => {
                  return (
                    <div key={index} onClick={() => {
                      setActiveBorder(color)
                    }} style={{
                      background: color,
                      border: activeBorder === color ? "4px solid black" : "",
                     
                    }} className={` h-[40px] w-[40px] rounded-[50%]`}></div>
                  )
                })
              }
            </div>
            <p className="text-xl leading-10 tracking-[1px] text-white font-semibold">Select color to highlight importants</p>
          </div> */}
        </div>
      </div>
      <div className=' flex justify-center mx-auto bg-[#f8fdf6] '>

        {
         
          activeResumeBody()
        }

      </div>
    </>
  )
}

export default Editor
