/*
	Your users should be able to:

	View the optimal layout for each of the website's pages depending on their device's screen size
	See hover states for all interactive elements on the page
	View each page and be able to toggle between the tabs to see new information

	TODO: minden oldalon kipróbálni a menüt megnyitva melléklikkelni egy linkra, hogy bezáródik-e a menü
*/
import { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Crew from './routes/Crew'
import Destination from './routes/Destination'
import Home from './routes/Home'
import Technology from './routes/Technology'

const Container = styled.div`
	width: 100vw;
	height: 100%;
	min-height: 100vh;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 1.5rem;
	background: var(--background-color);
	background-size: cover;
	background-position: center center;

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		gap: 2rem;
		max-width: 500px;
	}
`

export default function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth)

	const location = useLocation()

	const resizeWindow = () => setWindowSize(window.innerWidth)

	/* listener for window resize */
	useEffect(() => {
		window.addEventListener('resize', resizeWindow)
	}, [])

	/* responsive background change */
	useEffect(() => {
		const app = document.querySelector('.app')

		/* active page */
		const page = location.pathname.slice(1)

		/* device */
		const device = windowSize < 768 ? 'mobile' : windowSize < 1440 ? 'tablet' : 'desktop'

		/* change background image */
		app.style.backgroundImage = !page
			? `url('./assets/home/background-home-${device}.jpg')`
			: `url('./assets/${page}/background-${page}-${device}.jpg')`
	}, [location, windowSize])

	return (
		<Container className='app'>
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

