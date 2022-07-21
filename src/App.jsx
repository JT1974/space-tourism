/*
	Your users should be able to:

	View the optimal layout for each of the website's pages depending on their device's screen size
	See hover states for all interactive elements on the page
	View each page and be able to toggle between the tabs to see new information
*/
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Crew from './routes/Crew'
import Destination from './routes/Destination'
import Home from './routes/Home'
import Technology from './routes/Technology'

export default function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Routes>
				<Outlet />
			</main>
		</div>
	)
}

