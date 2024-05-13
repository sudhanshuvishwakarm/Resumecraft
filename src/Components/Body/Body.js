import React, { useState } from 'react'
import Editor from '../Editor/Editor'

const Body = () => {

    
    const sections = {
        BasicInfo:'Basic Information',
        WorkExp:'Work Experience',
        Projects:'Projects',
        Eduaction:'Education',
        Achivements:'Achivements',
        Summary:'Summary',
        Other:'Other'
    }
    
    
    // const [resumeInfo,setresumeInfo]=useState({
    //     [sections.BasicInfo]:{
    //         id:sections.BasicInfo,
    //         title:sections.BasicInfo,
    //         details:[]
    //     },
    //     [sections.WorkExp]:{
    //         id:sections.WorkExp,
    //         title:sections.WorkExp,
    //         details:[]
    //     },
    //     [sections.Projects]:{
    //         id:sections.Projects,
    //         title:sections.Projects,
    //         details:[]
    //     },
    //     [sections.Eduaction]:{
    //         id:sections.Eduaction,
    //         title:sections.Eduaction,
    //         details:[]
    //     },
    //     [sections.Achivements]:{
    //         id:sections.Achivements,
    //         title:sections.Achivements,
    //         details:[]
    //     },
    //     [sections.Summary]:{
    //         id:sections.Summary,
    //         title:sections.Summary,
    //         details:""
    //     },
    //     [sections.Other]:{
    //         id:sections.Other,
    //         title:sections.Other,
    //         details:""
    //     },
       
    // })

    
    
   
    return (
        <>
           
           <Editor  sections={sections}  />
        </>

    )
}

export default Body
