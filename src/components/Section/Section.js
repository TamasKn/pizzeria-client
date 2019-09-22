import React from 'react'
import {Link} from 'react-router-dom'
import './Section.css'

import Category from "../Category/Category";

const Section = ({name, category}) => {
    return (
        <div>
            <Link to={`/menu/${category}`} >{name}</Link>
        </div>
    )
}

export default Section
