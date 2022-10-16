import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import ved1 from '../images/framer.mp4'
const Home = () => {
  return (
    <div id='header'>
      <div className="intro">
        {/* <video autoplay muted loop id="bg-video">
          <source src={ved1} type="video/mp4" />
        </video> */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="center sample">
                <h1>
                <pre>

                  <span>We </span> 
                  <span>are </span>
                  <span>Agritech </span>
                </pre>
                </h1>
                <p>
                  Sit Backand Relax. Let us help you find the right farming strategies for your farm
                </p>
                <Link className='homebtn' to='/about'>LEARN MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home