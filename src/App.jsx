/*
	Your users should be able to:

	View the optimal layout for each of the website's pages depending on their device's screen size
	See hover states for all interactive elements on the page
	View each page and be able to toggle between the tabs to see new information
*/
import { Outlet, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Crew from './routes/Crew'
import Destination from './routes/Destination'
import Home from './routes/Home'
import Technology from './routes/Technology'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	padding-top: 7rem;
	background-color: var(--background-color);
`

export default function App() {
	return (
		<Container>
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
		</Container>
	)
}

