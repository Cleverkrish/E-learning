import React from 'react'
import ReactPlayer from 'react-player'
import '../Components/Css/Math.css'


function Math() {
  return (
    <>
    <h1>Welcome To Our Courses</h1>
    <div className='flex-container'>
    <ReactPlayer url='https://youtu.be/-ou9VvyJNOY' controls />
    <ReactPlayer url='https://youtu.be/scZVLCB1aX0' controls />
    <ReactPlayer url='https://youtu.be/N0_TWQTrJ-k' controls />
    <ReactPlayer url='https://youtu.be/mjlsSYLLOSE' controls />
    <ReactPlayer url='https://youtu.be/tVHOBVAFjUw' controls />
    <ReactPlayer url='https://youtu.be/SEAKuerLbsk' controls />
    <ReactPlayer url='https://youtu.be/2SHgVtAQUps' controls />
    <ReactPlayer url='https://youtu.be/ZphZz9h3pTc' controls />
    </div>
    
    </>
  )
}

export default Math
