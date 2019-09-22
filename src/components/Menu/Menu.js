import React from 'react'
import './Menu.css'

import Section from '../Section/Section'
import section from './sections'

const Menu = () => {

    return(
        <div>
            {
                section.map( ({id, name, image, category}) =>
                    <Section key={id} name={name} image={image} category={category} />
                )
            }
        </div>
    )
}

export default Menu
