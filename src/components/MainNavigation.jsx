import { Link } from 'react-router-dom'

export default function MainNavigation() {
	return (
		<nav>
			<Link to='/'>00 Home</Link>
			<Link to='/destination'>01 Destination</Link>
			<Link to='/crew'>02 Crew</Link>
			<Link to='/technology'>03 Technology</Link>
		</nav>
	)
}

