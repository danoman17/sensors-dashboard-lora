import MemoryIcon from '@mui/icons-material/Memory';
import './SensorDetailsTitle.css';


const SensorDetailsTitle = () => {
    return (
        <>
            <div className='sensorTitle-container'>
                <div className='title-icon-container'>
                    <MemoryIcon
                        sx={{
                            fontSize: '3rem',
                            marginRight: '10px'
                        }}

                    />
                    <p className='sensorTitle-container-title'>

                        Steering - 767XCC-443
                    </p>
                </div>
                <p className='sensorTitle-container-subTitle'>
                    Front Angle
                </p>
            </div>
        </>
    )
}

export default SensorDetailsTitle;