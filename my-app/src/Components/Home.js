import React from 'react'
import './Css/HomeAbout.css'
import { RiParentFill } from 'react-icons/ri'
import { Route, Link } from 'react-router-dom'



function Home() {
  return (
    <>
      <div className='mainSection'>
        <div className='contentBox'>
          <h1>IGNITE THE SPARK IN YOUR CHILD WITH</h1>
          <h3>THE CLASS OF ONE</h3>
          <h4>Trusted By 3000+ Happy Parents<RiParentFill /></h4>
          <div>
            <button className='btnBox'>ADIMISSIONS OPEN FOR AY 2022-2023</button>
          </div>
        </div>
        <div className='imgContainer'>
          <img src='https://www.theclassofone.com/online-school/wp-content/uploads/2021/12/750-x-750px.jpg' alt='img' />
        </div>
      </div>

      <div className='text'>
        <h1>Our vision is to be the source
          for childhood learning on the internet
          available from anywhere and without charge.</h1>
      </div>


      <Route>
        <div>
          <Link to="/parent">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5b0eb34b506fbef05a409324/1538393535799-9GDDZS5DU72D7LT5JJF3/partners_2.png?format=300w"
              alt="example"
            />
          </Link>

          <Link to='/math'>
          <img
               src='https://images.squarespace-cdn.com/content/v1/5b0eb34b506fbef05a409324/1596612503855-Z3WL2ET0SP8JLL2G4DJU/MW+portal+knop+website+final+def+def.png?format=300w'
               alt="example"
             />
          </Link>

          <Link to='/science'>
          <img
               src='https://images.squarespace-cdn.com/content/v1/5b0eb34b506fbef05a409324/1605081639992-86VN386RSN4V779G0HPP/SW+portal+knop+website.png?format=300w'
               alt="example"
             />
          </Link>
        </div>
      </Route>

    </>
  )
}

export default Home

