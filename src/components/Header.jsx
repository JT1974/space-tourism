import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBar = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.img`
	width: 2.5rem;
	height: 2.5rem;
`

const Navigation = styled.nav`
	display: none;
`

export default function Header() {
	return (
		<HeaderBar>
			<Logo src='/assets/shared/logo.svg' alt='Space tourism' />
			<img src='/assets/shared/icon-hamburger.svg' alt='Open menu' />
			<Navigation>
				<img src='/assets/shared/icon-close.svg' alt='Close menu' />
				<NavLink to='/'>00 Home</NavLink>
				<NavLink to='/destination'>01 Destination</NavLink>
				<NavLink to='/crew'>02 Crew</NavLink>
				<NavLink to='/technology'>03 Technology</NavLink>
			</Navigation>
		</HeaderBar>
	)
}

