/*
	Your users should be able to:

	View the optimal layout for each of the website's pages depending on their device's screen size
	See hover states for all interactive elements on the page
	View each page and be able to toggle between the tabs to see new information
*/
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Crew from './routes/crew'
import Ansari from './routes/crew/ansari'
import Glover from './routes/crew/glover'
import Hurley from './routes/crew/hurley'
import Shuttleworth from './routes/crew/shuttleworth'
import Destination from './routes/destinations'
import Europa from './routes/destinations/europa'
import Mars from './routes/destinations/mars'
import Moon from './routes/destinations/moon'
import Titan from './routes/destinations/titan'
import Capsule from './routes/technologies/capsule'
import Spaceport from './routes/technologies/spaceport'
import Vehicle from './routes/technologies/vehicle'
import Technology from './routes/technology'

export default function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destination' element={<Destination />}>
						<Route index element={<Moon />} />
						<Route path='mars' element={<Mars />} />
						<Route path='europa' element={<Europa />} />
						<Route path='titan' element={<Titan />} />
					</Route>
					<Route path='/crew' element={<Crew />}>
						<Route index element={<Hurley />} />
						<Route path='shuttleworth' element={<Shuttleworth />} />
						<Route path='glover' element={<Glover />} />
						<Route path='ansari' element={<Ansari />} />
					</Route>
					<Route path='/technology' element={<Technology />}>
						<Route index element={<Vehicle />} />
						<Route path='spaceport' element={<Spaceport />} />
						<Route path='capsule' element={<Capsule />} />
					</Route>
				</Routes>
			</main>
		</div>
	)
}

