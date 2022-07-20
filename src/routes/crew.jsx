import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Crew() {
	return (
		<>
			<h5>02 Meet your crew</h5>
			<Navigation
				links={[
					{
						path: '/crew',
						text: 'Crew',
					},
					{
						path: 'shuttleworth',
						text: 'Shuttleworth',
					},
					{
						path: 'glover',
						text: 'Glover',
					},
					{
						path: 'ansari',
						text: 'Ansari',
					},
				]}
			/>
			<Outlet />
		</>
	)
}

