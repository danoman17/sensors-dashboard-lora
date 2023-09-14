import { Grid } from '@mui/material';
import CardLayout from '../CardLayout/CardLayout';
import FrontAnglePanel from '../FrontAnglePanel/FrontAnglePanel';
import GpsPanel from '../GpsPanel/GpsPanel';
import ThermometerPanel from '../ThermometerPanel/ThermometerPanel';
import AccelorometerPanel from '../AccelorometerPanel/AccelorometerPanel';
import UltrasonicPanel from '../UltrasonicPanel/UltrasonicPanel';

import './PanelGalery.css';

const PanelGalery = ({returnFun}) => {
    return (
        <>
            <div className='panelGalery-container'>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <CardLayout power={1} name='Steering-767XCC-443' goal='Front Angle' valueStatus='' returnFun={returnFun} >

                            <FrontAnglePanel value={'65'} valueType={0} />

                        </CardLayout>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <CardLayout power={1} name='GPS-u-blox NEO-M8N' goal='Location' valueStatus='' returnFun={returnFun}>
                            <GpsPanel />
                        </CardLayout>

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <CardLayout power={1} name='Temperature-ANALOG-55C' goal='Temperature' valueStatus='' returnFun={returnFun}>
                            <ThermometerPanel value={65} valueType={0} />
                        </CardLayout>

                    </Grid>
                    <Grid item xs={6} md={5} minHeight={450}>
                        <CardLayout power={1} name='Accelerometer-MPU6050' goal='X , Y, Z Acceleration and Inclination' valueStatus='' returnFun={returnFun}>
                            <AccelorometerPanel />
                        </CardLayout>

                    </Grid>
                    <Grid item xs={6} md={7}>
                        <CardLayout power={1} name='Ultrasonic-ARD-350' goal='Distance' valueStatus='' returnFun={returnFun}>
                            <UltrasonicPanel />
                        </CardLayout>

                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default PanelGalery;