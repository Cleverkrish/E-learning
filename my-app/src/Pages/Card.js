import React from "react";
// import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <div className="card">
                <h2>{props.title1}</h2>
                <img src={props.imgSource} alt='about1' className="AboutImg" />
                <p className="item">{props.desc1}</p>
                <div>
                    <button className='btnBox'>{props.btnAbout}</button>
                </div>
            </div>
        </>
    )
}

export default Card