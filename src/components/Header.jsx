import { NavLink } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<img src='/assets/shared/logo.svg' alt='Space tourism' />
			<img src='/assets/shared/icon-hamburger.svg' alt='Open menu' />
			<img src='/assets/shared/icon-close.svg' alt='Close menu' />
			<nav>
				<NavLink to='/'>00 Home</NavLink>
				<NavLink to='/destination'>01 Destination</NavLink>
				<NavLink to='/crew'>02 Crew</NavLink>
				<NavLink to='/technology'>03 Technology</NavLink>
			</nav>
		</header>
	)
}

