import { Menu, MenuItem, styled } from '@mui/material';
import AddchartIcon from '@mui/icons-material/Addchart';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import './MenuCard.css';

const MenuCard = ({setAnchorEl,anchorEl, open, returnFun }) => {


    const handleClose = (e) => {
        e.preventDefault();
        setAnchorEl(null);
    };
    const StyledMenu = styled((props) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            {...props}
        />
    ))(({ theme }) => ({
        "& .MuiPaper-root": {
            marginTop: theme.spacing(1),
            minWidth: 140,
            minHeight: 155,
            color: '#FBFBFF',
            backgroundColor: '#3B3A45',
            boxShadow:
                "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            "& .MuiMenu-list": {
                padding: 4
            },
            "& .MuiMenuItem-root": {
                "& .MuiSvgIcon-root": {
                    fontSize: '1.3rem',
                    color: '#FBFBFF',
                    marginRight: theme.spacing(1.5)
                },
                "&:active": {
                    backgroundColor: '#555464'
                }
            }
        }
    }));

    return (
        <>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={returnFun}
                    disableRipple
                    sx={{
                        fontFamily: 'Manrope',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: 'normal'
                    }}
                >
                    <AddchartIcon />
                    More Details
                </MenuItem>
                <MenuItem
                    onClick={returnFun}
                    disableRipple
                    sx={{
                        fontFamily: 'Manrope',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: 'normal'
                    }}
                >
                    <DownloadForOfflineIcon />
                    Download .csv
                </MenuItem>

                <MenuItem
                    onClick={returnFun}
                    disableRipple
                    sx={{
                        fontFamily: 'Manrope',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: 'normal'
                    }}
                >
                    <RestartAltIcon />
                    Restart Sensor
                </MenuItem>
                <MenuItem
                    onClick={returnFun}
                    disableRipple
                    sx={{
                        fontFamily: 'Manrope',
                        fontSize: '1rem',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        lineHeight: 'normal'
                    }}
                >
                    <PauseCircleIcon />
                    Pause Sensor
                </MenuItem>
            </StyledMenu>
        </>
    )
}

export default MenuCard;