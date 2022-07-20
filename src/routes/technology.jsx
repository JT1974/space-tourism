import { Outlet } from 'react-router-dom'
import TechnologyNavigation from '../components/TechnologyNavigation'

export default function Technology() {
	return (
		<>
			<h5>03 Space launch 101</h5>
			<TechnologyNavigation />
			<Outlet />
		</>
	)
}

