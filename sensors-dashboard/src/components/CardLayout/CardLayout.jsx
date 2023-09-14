import CircleIcon from '@mui/icons-material/Circle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './CardLayout.css';
import OfflineLayout from '../OfflineLayout';
import { useState } from 'react';

import MenuCard from '../MenuCard/MenuCard';



const CardLayout = ({ power = 1, name = "NO_SIGNAL", goal = "", valueStatus = '', returnFun ,children }) => {


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };




    return (
        <>
            <div className={`sensorCard ${valueStatus}`}>
                <div className='sensorCard-header'>
                    <div className='sensorCard-header-title-container'>
                        <div className='sensorCard-header-title-container-sensorName'>
                            {
                                power === 1 ?
                                    <CircleIcon
                                        sx={{
                                            color: '#5ED980',
                                            fontSize: '20px'
                                        }}
                                    />
                                    :
                                    <CircleIcon
                                        sx={{
                                            color: '#F06565',
                                            fontSize: '20px'
                                        }}
                                    />
                            }

                            {
                                valueStatus === '' ?
                                    <p style={{ color: '#485FB2' }}>
                                        {name}
                                    </p>
                                    :
                                    <p style={{ color: '#EEF2FF' }}>
                                        {name}
                                    </p>
                            }

                        </div>
                        <div className='sensorCard-header-title-container-goal'>
                            {
                                valueStatus === '' ?
                                    <p style={{ color: '#485FB2' }} >{goal}</p>
                                    :
                                    <p style={{ color: '#EEF2FF' }} >{goal}</p>

                            }
                        </div>
                    </div>



                    <div
                        className='sensorCard-header-container-moreBtn'
                        onClick={handleClick}
                        id='demo-positioned-button'
                    >
                        {
                            valueStatus === '' ?
                                <MoreVertIcon
                                    sx={{
                                        color: '#485FB2',
                                        fontSize: '48px'
                                    }}
                                />
                                :
                                <MoreVertIcon
                                    sx={{
                                        color: '#EEF2FF',
                                        fontSize: '48px'
                                    }}
                                />
                        }
                    </div>
                    <MenuCard 
                        setAnchorEl={setAnchorEl} 
                        anchorEl={anchorEl} 
                        open={open}
                        returnFun={returnFun}
                    />
                </div>
                <div className='sensorCard-body'>
                    {
                        power === 1 ?
                            children
                            :
                            <OfflineLayout />
                    }
                </div>

            </div>
        </>
    )
}

export default CardLayout;