import React from 'react'
import { Divider } from '@mui/material';
import './OverviewPanel.css';
const OverviewPanel = () => {
    return (
        <>

            <div className='boxblue'>
                <div className='boxblue-sm-box'>
                    <div className='boxblue-sm-box-header-title'>
                        <p>
                            Susbribed Sensors
                        </p>
                    </div>
                    <div className='boxblue-sm-box-body'>
                        <p>
                            5
                        </p>
                    </div>

                </div>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                        width: "2px",
                        background: "#ffff"
                    }}
                />

                <div className='boxblue-sm-box'>
                    <div className='boxblue-sm-box-header-title'>
                        <p>
                            Online Sensors
                        </p>
                    </div>
                    <div className='boxblue-sm-box-body'>
                        <p>
                            5
                        </p>
                    </div>

                </div>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    light={true}
                    flexItem
                    sx={{
                        width: "2px",
                        background: "#ffff"
                    }}
                />
                <div className='boxblue-bg-box'>
                    <div className='boxblue-bg-box-header'>

                        <p>
                            Timer
                        </p>
                    </div>
                    <div className='boxblue-bg-box-timer-container'>
                        <div className='unit'>
                            <div className='unit-number'>
                                00
                            </div>
                            <div className='unit-text'>
                                hrs
                            </div>
                        </div>

                        <div className='unit'>
                            <div className='unit-number'>
                                120
                            </div>
                            <div className='unit-text'>
                                mins
                            </div>
                        </div>

                        <div className='unit'>
                            <div className='unit-number'>
                                59
                            </div>
                            <div className='unit-text'>
                                secs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverviewPanel