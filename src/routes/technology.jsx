import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Technology() {
	return (
		<>
			<h5>03 Space launch 101</h5>
			<Navigation
				links={[
					{
						path: '/technology',
						text: '1',
					},
					{
						path: 'spaceport',
						text: '2',
					},
					{
						path: 'capsule',
						text: '3',
					},
				]}
			/>
			<Outlet />
		</>
	)
}

