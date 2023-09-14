import React, { useEffect, useState } from 'react'
import './index.css';
import './main1.css';
import NavBar from './components/Navbar/NavBar';
import { Grid } from '@mui/material';
import SensorDetatailsHeader from './components/SensorDetatailsHeader/SensorDetatailsHeader';
import CardLayoutSensorDetails from './components/CardLayoutSensorDetails/CardLayoutSensorDetails';
import SensorDetailsStatistics from './components/SensorDetailsStatistics/SensorDetailsStatistics';
import PanelGalery from './components/PanelGalery/PanelGalery';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import { BarChart, LineChart } from '@mui/x-charts';


const App = () => {

	const [view, setView] = useState(true);

	const changeView = () => {
		setView(!view);
	}
	
	return (
		<>
			{
				view === true ?
					<>
						<NavBar  type='power' />

						<DashboardHeader />

						<PanelGalery returnFun={changeView} />
					</>
					:
					<>
						<NavBar returnFun={changeView} type='return' />

						<SensorDetatailsHeader />
						
						
						<div className='sensorDetails-container'>
							<Grid container spacing={2}>

								<Grid item xs={6} md={6} minHeight={'80vh'}>

									<CardLayoutSensorDetails name='Summary Data Statistics'>
										<SensorDetailsStatistics />
									</CardLayoutSensorDetails>
								</Grid>

								<Grid item xs={6} md={6} minHeight={'80vh'}>
									<div className='container-charts'>
										<div className='chart1'>
											<CardLayoutSensorDetails name='History Time View'>
												<LineChart
													series={[
														{ curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
														{ curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
													]}

												/>
											</CardLayoutSensorDetails>
										</div>
										<div className='chart1'>
											<CardLayoutSensorDetails name='Other Statistics'>
												<BarChart
													xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
													series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
													width={900}
													height={300}
												/>
											</CardLayoutSensorDetails>
										</div>
									</div>

								</Grid>

							</Grid>

						</div> 

					</>
			}
		</>
	)
}

export default App;