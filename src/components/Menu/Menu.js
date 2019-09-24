import React from 'react'
import './Menu.css'

import Section from '../Section/Section'
import sectionData from './sections'

const Menu = () => {

    return(
        <div className='menu'>
            {
                sectionData.map( ({id, name, image, category}) =>
                    <Section key={id} name={name} image={image} category={category} />
                )
            }
        </div>
    )
}

export default Menu
