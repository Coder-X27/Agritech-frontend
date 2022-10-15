import React from 'react'
import img1 from '../images/Logo.png'

const DataBox = () => {
    return (
        <div className="dataBox">
            <div className="dataimg">
                <img src={img1} alt="" />
            </div>
            <div className="datainfo1">
                <p className="datainfo"><span>Name : </span>Cotton</p>
                <p className="datainfo"><span>Temprature : </span>21-37 °C</p>
                <p className="datainfo"><span>Location : </span>Punjab, Haryana, Rajasthan, Uttar Pradesh, Madhya Pradesh, Gujarat, Maharashtra and parts of Andhra Pradesh & Karnataka</p>
                <p className="datainfo"><span>Soil : </span>Black soil</p>
                <p className="datainfo"><span>Variety : </span>DHY 286, Purnima, AKH 081 and Rajat in G. hirsutum and AKH 4, AKH 5, AKA 8401, Y1 and PA 183 in G. arboreum</p>
                <p className="datainfo"><span>P.H : </span>5.8-8.0</p>
            </div>
            <div className="datainfo2">
                <p className="datainfo"><span>Nitrogen Level : </span>62</p>
                <p className="datainfo"><span>Nutrients : </span>nitrogen (N), phosphorous (P), and potassium (K)</p>
                <p className="datainfo"><span>Pests : </span>Leafhopper,
                    Cotton Aphid,
                    Thrips,
                    Whitefly,
                    Mealy Bug, MINOR PESTS,
                    Red Cotton Bug,
                    Dusky Cotton Bug,
                    Tobacco Cutworm</p>
                <p className="datainfo"><span>Prevention of Pests : </span>Use yellow sticky traps</p>
                <p className="datainfo"><span>Fertilizers : </span>FYM, compost</p>
                <p className="datainfo"><span>Harvest Techniques : </span>Cotton Ginning</p>
            </div>
        </div>
    )
}

export default DataBox