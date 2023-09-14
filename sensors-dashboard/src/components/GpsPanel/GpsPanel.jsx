import React from 'react'
import './GpsPanel.css';
import { Grid } from '@mui/material';
import PanelBoxLayout from '../PanelBoxLayout/PanelBoxLayout';
const GpsPanel = () => {
    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Grid item md={6}>
                    <div className='gpsPanel-container-izq'>
                        <div className='gpsPanel-container-izq-up'>

                            <PanelBoxLayout nameValue='Latitude ' value='50°' />

                        </div>
                        <div className='gpsPanel-container-izq-down'>

                            <PanelBoxLayout nameValue='Longitude ' value='112°' />

                        </div>
                    </div>

                </Grid>
                <Grid item md={6}>
                    <div className='gpsPanel-container-der'>
                        <PanelBoxLayout nameValue='Altitude' value='2,135m' />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default GpsPanel;