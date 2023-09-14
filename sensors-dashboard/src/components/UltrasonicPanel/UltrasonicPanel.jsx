import UltrasonicPanelBoxLayout from '../UltrasonicPanelBoxLayout/UltrasonicPanelBoxLayout';
import './UltrasonicPanel.css';


const UltrasonicPanel = () => {
    return (
        <>
            <div className='ultrasonicPanel-container'>
                <div className='ultrasonicPanel-container-up'>
                    <UltrasonicPanelBoxLayout title='Monitor 1' value={45} type='' />
                    <UltrasonicPanelBoxLayout title='Monitor 2' value={34} type=''/>
                    <UltrasonicPanelBoxLayout title='Monitor 3' value={-150} type='low'/>
                    <UltrasonicPanelBoxLayout title='Monitor 4' value={45} type=''/>


                </div>
                <div className='ultrasonicPanel-container-down'>
                    <UltrasonicPanelBoxLayout title='Monitor 5' value={35} type=''/>
                    <UltrasonicPanelBoxLayout title='Monitor 6' value={85} type=''/>
                    <UltrasonicPanelBoxLayout title='Monitor 7' value={45} type=''/>
                    <UltrasonicPanelBoxLayout title='Monitor 8' value={600} type='high'/>

                </div>
            </div>
        </>
    )
}

export default UltrasonicPanel;