import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Crew from './routes/Crew'
import Ansari from './routes/crew/Ansari'
import Glover from './routes/crew/Glover'
import Hurley from './routes/crew/Hurley'
import Shuttleworth from './routes/crew/Shuttleworth'
import Destination from './routes/Destination'
import Europa from './routes/destinations/Europa'
import Mars from './routes/destinations/Mars'
import Moon from './routes/destinations/Moon'
import Titan from './routes/destinations/Titan'
import Home from './routes/Home'
import Capsule from './routes/technologies/Capsule'
import Spaceport from './routes/technologies/Spaceport'
import Vehicle from './routes/technologies/Vehicle'
import Technology from './routes/Technology'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index element={<Home />} />
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
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)

