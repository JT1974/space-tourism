import { Outlet } from 'react-router-dom'
import DestinationNavigation from '../components/DestinationNavigation'

export default function Destination() {
	return (
		<>
			<h5>01 Pick your destination</h5>
			<DestinationNavigation />
			<Outlet />
		</>
	)
}

