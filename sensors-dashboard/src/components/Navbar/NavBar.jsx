import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './NavBar.css';
const NavBar = ({returnFun, type = "power" }) => {



    return (
        <div className='navbar'>

            <div className='box-power'>
                <button
                    className='navbar-btn-logo'
                    onClick={returnFun}
                >

                    {
                        type === "power" ?
                            <PowerSettingsNewIcon
                                sx={{
                                    fontSize: '2rem',
                                    color: '#FFFF'
                                }}
                            />
                            :
                            <ArrowBackIosIcon
                                sx={{
                                    fontSize: '2rem',
                                    color: '#FFFF'
                                }}
                            />
                    }

                </button>
            </div>



            <div className='box-title'>

                <h1 className='navbar-title-text'>
                    AMR TEC-1 V_1.0
                </h1>
            </div>

        </div>
    )
}

export default NavBar;