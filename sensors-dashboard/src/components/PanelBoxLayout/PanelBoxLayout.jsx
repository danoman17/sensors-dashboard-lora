import React from 'react'
import './PanelBoxLayout.css';


const PanelBoxLayout = ({nameValue="", value=""}) => {
    return (
        <>
            <div className='panel-box-container'>

                <div className='text'>
                    <p className='panel-box-container-title'>
                        {nameValue}
                    </p>
                </div>
                <div className='number'>
                    <p className='panel-box-container-number'>
                        {value}
                    </p>
                </div>


            </div>
        </>
    )
}

export default PanelBoxLayout;