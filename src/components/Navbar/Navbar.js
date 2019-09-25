import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";

import CartMenu from "../CartMenu/CartMenu";


const Navbar = () => {

    return(
        <div className='navbar sticked'>
            <Link className='nav-title' to='/'>Trattoria di Napoli</Link>

            <div className='nav-links'>
                <Link className='nav-link' to='#'>Rólunk</Link>
                <Link className='nav-link' to='#'>Belépes</Link>
                <CartMenu />
            </div>




        </div>
    )
}

export default Navbar
