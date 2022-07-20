import { Link } from 'react-router-dom'

export default function DestinationNavigation() {
	return (
		<nav>
			<Link to='/destination'>Moon</Link>
			<Link to='mars'>Mars</Link>
			<Link to='europa'>Europa</Link>
			<Link to='titan'>Titan</Link>
		</nav>
	)
}

