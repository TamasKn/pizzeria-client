import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

import CartMenu from "../CartMenu/CartMenu";

const Navbar = () => {
    return(
        <div className='navbar'>
            <Link to='/'>Trattoria di Napoli</Link>
            <Link to='#'> Belepes </Link>

            <CartMenu/>

        </div>
    )
}

export default Navbar
