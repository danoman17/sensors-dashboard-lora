import React from 'react'
import './FrontAnglePanel.css';
const FrontAnglePanel = ({ value = 0, valueType = 0 }) => {
    return (
        <>
            {
                valueType === 1 ?
                    <>
                        <div className='frontAngle-panel'>
                            <p style={{ color: '#EEF2FF' }}>
                                {value}
                            </p>
                            <p style={{ color: '#EEF2FF' }}>°</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='frontAngle-panel'>
                            <p style={{ color: '#485FB2' }}>
                                {value}
                            </p>
                            <p style={{ color: '#485FB2' }}>°</p>
                        </div>
                    </>
            }

        </>
    )
}

export default FrontAnglePanel;