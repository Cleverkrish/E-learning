import React from 'react'
import { NavLink } from 'react-router-dom'
import './Css/ListStyle.css'

function List() {

    return (
        <>
            <header>
                <div className='container container-flex '>
                    <div className='logoContainer'>
                        <img src='https://images.squarespace-cdn.com/content/v1/5b0eb34b506fbef05a409324/1527692374286-50X4YFCM4QPJ66NYNJT8/e-learningforkids_logo.png?format=1500w' alt='logo' className='logo' />
                    </div>
                    <nav>
                        <div className='list'>
                            <NavLink exact to='/' className='classItem' activeClassName='activeItem'>Home</NavLink>
                            <NavLink  to='/about' className='classItem' activeClassName='activeItem'>About</NavLink>
                            <NavLink  to='/contact' className='classItem' activeClassName='activeItem'>Contact</NavLink>
                            </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default List;