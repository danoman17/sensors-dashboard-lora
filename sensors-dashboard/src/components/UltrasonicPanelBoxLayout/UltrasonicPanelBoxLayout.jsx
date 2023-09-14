import './UltrasonicPanelBoxLayout.css';
import React from 'react'

const UltrasonicPanelBoxLayout = ({ title = "Monitor", value = 0, type = '' }) => {
    return (
        <>
            <div className={`ultrasonicPanel-container-box ${type===''?'':'ultrasonicPanel-container-box-'+type}`}>
                <div className='ultrasonicPanel-container-box-header'>
                    {type === ''?<p style={{ color:'#485FB2' }}> {title} </p>:<p style={{ color:'#FBFBFF' }} > {title} </p>}
                </div>
                <div className='ultrasonicPanel-container-box-body'>
                    {type === ''? <p style={{ color:'#485FB2' }}>{value} m</p> : <p style={{ color:'#FBFBFF' }}>{value} m</p>}
                </div>
                {
                    type === 'high' ?
                        <div className='ultrasonicPanel-container-up-box-alert'>
                            <p style={{ color:'#1BA442' }}>HIGH</p>
                        </div>
                        :
                        <></>
                }
                {
                    type === 'low' ?
                        <div className='ultrasonicPanel-container-up-box-alert'>
                            <p style={{ color:'#B61B1B' }}>LOW</p>
                        </div>
                        :
                        <></>
                }

            </div>
        </>
    )
}

export default UltrasonicPanelBoxLayout;