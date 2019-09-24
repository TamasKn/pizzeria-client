import React from 'react'
import {Link} from 'react-router-dom'
import './Section.css'

const Section = ({name, category, image}) => {
    return (
        <div className='menu-section'>
            <img className='background-image' src={image} />


            <div className='content'>
                <Link className='title' to={`/menu/${category}`} >{name}

                </Link>
            </div>


        </div>
    )
}

export default Section
