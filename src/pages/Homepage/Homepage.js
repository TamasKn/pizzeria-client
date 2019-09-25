import React from 'react'
import './Homepage.css'
import video from '../../static/bg_video.mp4'
import logo from '../../static/logo.png'

import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";


const Homepage = () => {

    return(
        <div>

            <Navbar />

            <div id="title">
                <img src={logo} alt='Logo'/>
            </div>

            <div>
                <video autoPlay muted loop id="bg-video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <Menu />

        </div>
    )
}

export default Homepage
