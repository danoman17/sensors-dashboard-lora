import './DashboardHeader.css';
import { Grid } from '@mui/material';
import DashboardTitle from '../DashboardTitle/DashboardTitle';
import ScreenshotBtn from '../ScreenshotBtn/ScreenshotBtn';
import OverviewPanel from '../OverviewPanel/OverviewPanel';

const DashboardHeader = () => {
  return (
    <>

      <div className='dh-container-header'>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{
            color: '#485FB2'
          }}
          >
            <DashboardTitle />

          </Grid>
          <Grid item xs={2} sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>

            <ScreenshotBtn />

          </Grid>
          <Grid item xs={6}>
            <OverviewPanel />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default DashboardHeader;