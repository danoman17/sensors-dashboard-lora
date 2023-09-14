import './SensorDetailsStatistics.css';

const SensorDetailsStatistics = () => {
    return (
        <>
            <div className='sdStats-container'>
                <div className='sdStats-container-box1' >
                    <div className='sdStats-container-box1-label'>
                        <p>
                            MAX
                        </p>
                    </div>
                    <div className='sdStats-container-box1-value '>
                        <p>
                            120 °
                        </p>
                    </div>
                </div>
                <div className='sdStats-container-box1' style={{
                    background: '#FBFBFF'
                }}>
                    <div className='sdStats-container-box1-label' style={{
                        color: '#485FB2'
                    }}>
                        <p>
                            MIN
                        </p>
                    </div>
                    <div className='sdStats-container-box1-value ' style={{
                        color: '#485FB2'
                    }}>
                        <p>
                            120 °
                        </p>
                    </div>
                </div>
                <div className='sdStats-container-box1'>
                    <div className='sdStats-container-box1-label'>
                        <p>
                            AVR
                        </p>
                    </div>
                    <div className='sdStats-container-box1-value '>
                        <p>
                            120 °
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SensorDetailsStatistics;