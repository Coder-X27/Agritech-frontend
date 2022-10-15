import React from 'react'
import '../Styles/Header.css'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
const About = () => {
    return (

        <div id='section'>
            <h1 className="sectionTitle">About Our <span>Website</span></h1>
            <div className="aboutCards">
                <div className="aboutCard">
                    <div className="aboutlogo">
                        <img src={img1} alt="" />
                    </div>
                    <div className="aboutTitle">Track Your Location</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc">The website tracks you and suggest you the best route to be choose in order to save cost.</div>
                </div>
                <div className="aboutCard">
                    <div className="aboutlogo">
                        <img src={img2} alt="" />
                    </div>
                    <div className="aboutTitle">Sense the weather</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc">The website sense the weather and hence provide info about a very necessary aspect of farming.</div>
                </div>
                <div className="aboutCard">
                    <div className="aboutlogo">
                        <img src={img3} alt="" />
                    </div>
                    <div className="aboutTitle">Pest alert on Mobile Phones</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc">Choosing apt crop is the most important step of having the maximum amount of produce, which is present on our website</div>
                </div>
                <div className="aboutCard">
                    <div className="aboutlogo">
                        <img src={img4} alt="" />
                    </div>
                    <div className="aboutTitle">Sowing and Harvesting Activities</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc">From sowing till harvesting all information regarding the whole process is available on our website including all preservation techniques and pesticides.</div>
                </div>
            </div>
            </div>
    )
}

export default About
