import React from 'react'
import './ThermometerPanel.css';
const ThermometerPanel = ({value=0, valueType=0}) => {
    return (
        <>
            {
                valueType === 1 ?
                    <>
                        <div className='temperature-panel'>
                            <p style={{ color: '#EEF2FF' }}>
                                {value}
                            </p>
                            <p style={{ color: '#EEF2FF' }}>°C</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='temperature-panel'>
                            <p style={{ color: '#485FB2' }}>
                                {value}
                            </p>
                            <p style={{ color: '#485FB2' }}>°C</p>
                        </div>
                    </>
            }
        </>
    )
}

export default ThermometerPanel;