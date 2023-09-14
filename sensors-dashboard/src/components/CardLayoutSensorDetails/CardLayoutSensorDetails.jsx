import './CardLayoutSensorDetails.css';

const CardLayoutSensorDetails = ({name="Summary Data Statistics",children}) => {
    return (
        <>
            <div className={'sd-sensorCard'}>
                <div className='sd-sensorCard-header'>
                    <div className='sd-sensorCard-header-title-container'>
                        <div className='sd-sensorCard-header-title-container-text'>

                            <p style={{ color: '#485FB2' }}>
                                {name}                            </p>
                        </div>
                    </div>


                </div>
                <div className='sd-sensorCard-body'>
                    {children}
                </div>

            </div>
        </>
    )
}

export default CardLayoutSensorDetails;