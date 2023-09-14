import { Grid } from '@mui/material';
import './SensorDetatailsHeader.css'
import React from 'react'
import SaveDataBtn from '../SaveDataBtn/SaveDataBtn';
import ScreenshotBtn from '../ScreenshotBtn/ScreenshotBtn';
import SensorDetailsTitle from '../SensorDetailsTitle/SensorDetailsTitle';

const SensorDetatailsHeader = () => {
    return (
        <>
            <div className='statsPanel-container-header'>

                <Grid container spacing={2}>
                    <Grid item xs={7}>

                        <SensorDetailsTitle />

                    </Grid>
                    <Grid item xs={5} sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <SaveDataBtn />
                        <ScreenshotBtn />

                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default SensorDetatailsHeader;