import './SaveDataBtn.css';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import React from 'react'

const SaveDataBtn = () => {
    return (
        <>
            <button className='btnSave'>
                <div className='btnSave-icon'>
                    <SaveAltIcon sx={{
                        fontSize: '4.2rem',
                        cursor: 'pointer'
                    }} />
                </div>
                <div className='btnSave-text'>
                    <p>Dowload CSV</p>
                </div>
            </button>
        </>
    )
}

export default SaveDataBtn;