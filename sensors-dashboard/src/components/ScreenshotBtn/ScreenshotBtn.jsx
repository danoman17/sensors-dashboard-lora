import React from 'react'
import './ScreenshotBtn.css';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';

const ScreenshotBtn = () => {
    return (
        <>
            <button className='btnScreenSht'>
                <div className='btnScreenSht-icon'>
                    <ScreenshotMonitorIcon sx={{
                        fontSize: '4.2rem',
                        cursor: 'pointer'
                    }} />
                </div>
                <div className='btnScreenSht-text'>
                    <p>Screenshot</p>
                </div>
            </button>
        </>
    )
}

export default ScreenshotBtn;