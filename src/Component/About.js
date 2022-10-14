import React from 'react'

const About = () => {
    const img1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35302887-bf5b-4c46-a9e0-fc72c65ffb50/d2zaii3-22e60a2b-a164-44bd-a487-cb16589a4799.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MzAyODg3LWJmNWItNGM0Ni1hOWUwLWZjNzJjNjVmZmI1MFwvZDJ6YWlpMy0yMmU2MGEyYi1hMTY0LTQ0YmQtYTQ4Ny1jYjE2NTg5YTQ3OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hm2OTe9W756fttOuga2kQ5lWBIWQcTyfHkS8qvTygyQ"
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
                        <img src={img1} alt="" />
                    </div>
                    <div className="aboutTitle">Sense the weather</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc">The website sense the weather and hence provide info about a very necessary aspect of farming.</div>
                </div>
                <div className="aboutCard">
                    <div className="aboutlogo">
                        <img src={img1} alt="" />
                    </div>
                    <div className="aboutTitle">Pest alert on Mobile Phones</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc">Choosing apt crop is the most important step of having the maximum amount of produce, which is present on our website</div>
                </div>
                <div className="aboutCard">
                    <div className="aboutlogo">
                        <img src={img1} alt="" />
                    </div>
                    <div className="aboutTitle">Sowing and Harvesting Activities</div>
                    <div className="seperator"></div>
                    <div className="aboutDesc"></div>
                </div>
            </div>
            </div>
    )
}

export default About
