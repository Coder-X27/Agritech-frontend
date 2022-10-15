import React from 'react'
import '../Styles/DataShowcase.css'
import DataBox from './DataBox'
const DataShowcase = () => {
    return (
        <div id="dataSchowcase">
            <div className="flexer">
                <h1 className="sectionTitle mt-5">Data <span>ShowCase</span></h1>
                <div className="searchItem">The Crops which are best suitable to you are </div>
                <div className="dataStorage">
                    <DataBox/>
                    <DataBox/>
                    <DataBox/>
                    <DataBox/>
                    <DataBox/>
                </div>
            </div>
        </div>
    )
}

export default DataShowcase