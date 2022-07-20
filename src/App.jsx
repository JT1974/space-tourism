/*
	Your users should be able to:

	View the optimal layout for each of the website's pages depending on their device's screen size
	See hover states for all interactive elements on the page
	View each page and be able to toggle between the tabs to see new information
*/
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
	return (
		<div className='App'>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

