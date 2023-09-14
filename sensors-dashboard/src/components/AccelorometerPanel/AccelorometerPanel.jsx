import PanelBoxLayout from '../PanelBoxLayout/PanelBoxLayout';
import PieChartLayout from '../PieChartLayout/PieChartLayout';

import './AccelorometerPanel.css';


const AccelorometerPanel = () => {


    return (
        <>
            <div className='accPanel-container'>
                <div className='accPanel-container-up'>
                    <PieChartLayout title='X-Acceleration' value={95}/>
                    <PieChartLayout title='Y-Acceleration' value={54}/>
                    <PieChartLayout title='Z-Acceleration' value={76}/>


                </div>
                <div className='accPanel-container-down'>
                    <div className='accPanel-container-down-btn'>
                        <PanelBoxLayout nameValue='Inclination' value='45°' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccelorometerPanel;