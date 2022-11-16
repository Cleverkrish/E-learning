import React from 'react'
import '../Components/Css/About.css'
import Card from './Card'
import Data from './Data'


const About = () =>{
  return(
    <>
    
    <h1>Our Courses</h1>
    <div className='About'>
      {Data.map((values)=>{
        return(
         <Card title1= {values.Atitle} imgSource={values.imgsrc} desc1={values.desc1} btnAbout={values.btnAbout}/>
        )
      })}
    </div>
    </>
  )
}

export default About