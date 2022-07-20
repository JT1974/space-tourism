import { Outlet } from 'react-router-dom'
import CrewNavigation from '../components/CrewNavigation'

export default function Crew() {
	return (
		<>
			<h5>02 Meet your crew</h5>
			<CrewNavigation />
			<Outlet />
		</>
	)
}

