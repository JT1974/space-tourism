import { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Crew from './routes/Crew'
import Destination from './routes/Destination'
import Home from './routes/Home'
import Technology from './routes/Technology'

import { useContext } from 'react'

import { Context } from './Context'

const Container = styled.div`
	width: 100vw;
	height: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	background: var(--background-color);
	background-size: cover;
	background-position: center center;
	position: relative;

	@media screen and (min-width: 1440px) {
		padding-top: 2.5rem;
	}
`

export default function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth)

	const { menuOpen, setMenuOpen } = useContext(Context)

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
		const page = location.pathname.slice(15)
		console.log(`page: ${page}`)

		/* device */
		const device = windowSize < 768 ? 'mobile' : windowSize < 1440 ? 'tablet' : 'desktop'

		/* change background image */
		app.style.backgroundImage = !page
			? `url('/assets/home/background-home-${device}.jpg')`
			: `url('/assets/${page}/background-${page}-${device}.jpg')`
	}, [location, windowSize])

	return (
		<Container className='app' onClick={() => menuOpen && setMenuOpen(false)}>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destination' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
				<Route path='/technology' element={<Technology width={windowSize} />} />
			</Routes>
			<Outlet />
		</Container>
	)
}

