import React from 'react'
import Logo from '../images/Logo.png'
import Slider1 from '../images/sliderimage1.jpg'
import Slider2 from '../images/sliderimage2.jpg'
import Slider3 from '../images/sliderimage3.jpg'
import Slider4 from '../images/sliderimage4.jpg'
import Slider5 from '../images/sliderimage5.jpg'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
const Header = () => {
    return (
        <nav id='header' className='header'>
            <div className="navbar1">
                <div className="navLogo">
                    <img src={Logo} alt="" />
                </div>
                <ul className="navLinks">
                    <Link to="/"><li className="navLink">Home</li></Link>
                    <Link to="/about"><li className="navLink">About</li></Link>
                    <Link to="/"><li className="navLink">Check Weather</li></Link>
                    <Link to="/"><li className="navLink">Contact Us</li></Link>
                </ul>
                <div className="loginout">
                    <Link path="/">Login / SignUp</Link>
                </div>
            </div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Slider1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Slider2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Slider3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Slider4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={Slider5} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
