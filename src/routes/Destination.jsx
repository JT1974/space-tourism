import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Destination() {
	return (
		<>
			<h5>01 Pick your destination</h5>
			<Navigation
				links={[
					{ path: '/destination', text: 'Moon' },
					{ path: 'mars', text: 'Mars' },
					{ path: 'europa', text: 'Europa' },
					{ path: 'titan', text: 'Titan' },
				]}
			/>
			<Outlet />
		</>
	)
}

