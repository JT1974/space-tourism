import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../Context'

const HeaderBar = styled.header`
	justify-self: flex-start;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	padding: 1.5rem 1.5rem 0;

	.logo {
		width: 2.5rem;
		height: 2.5rem;
	}

	.openMenu {
		display: ${props => (props.showModal ? 'none' : 'block')};
		cursor: pointer;
	}

	.main-navigation {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		display: ${props => (props.showModal ? 'flex' : 'none')};
		flex-direction: column;
		gap: 1.25rem;
		padding-left: 2rem;
		width: 254px;
		height: 100%;
		background: rgba(255, 255, 255, 0.04);
		backdrop-filter: blur(35px);
		z-index: 2;

		@supports (-moz-appearance: none) {
			background: rgba(0, 0, 0, 0.85);
		}

		.closeMenu {
			align-self: flex-end;
			margin: 2rem 1.5rem;
			cursor: pointer;
		}

		.nav-text {
			padding: 0.375rem 0;
			display: block;
			width: 100%;
			border-right: 4px solid transparent;
			transition: border-color 0.75s ease-in-out;

			span {
				font-family: var(--sub-font-face);
				font-weight: 700;
			}
		}

		.nav-text:hover,
		.nav-text:active {
			border-color: var(--title-color);
		}
	}

	.main-navigation::backdrop {
		background: rgba(255, 255, 255, 0.04);
	}

	@media screen and (min-width: 768px) {
		.openMenu {
			display: none;
		}

		.logo {
			width: 3rem;
			height: 3rem;
		}

		.main-navigation {
			position: unset;
			display: flex;
			flex-direction: row;
			align-items: center;
			width: auto;
			height: 6rem;
			gap: 2.25rem;
			padding: 0 3rem;

			.closeMenu {
				display: none;
			}

			a span {
				display: none;
			}
		}
	}
`

export default function Header() {
	const { menuOpen, setMenuOpen } = useContext(Context)

	return (
		<HeaderBar showModal={menuOpen}>
			<img className='logo' src='/assets/shared/logo.svg' alt='Space tourism' />
			<img
				className='openMenu'
				src='/assets/shared/icon-hamburger.svg'
				alt='Open menu'
				onClick={() => setMenuOpen(true)}
			/>
			<nav className='main-navigation'>
				<img
					className='closeMenu'
					src='/assets/shared/icon-close.svg'
					alt='Close menu'
					onClick={() => setMenuOpen(false)}
				/>
				<NavLink className='nav-text' to='/' onClick={() => setMenuOpen(false)}>
					<span>00</span> Home
				</NavLink>
				<NavLink className='nav-text' to='/destination' onClick={() => setMenuOpen(false)}>
					<span>01</span> Destination
				</NavLink>
				<NavLink className='nav-text' to='/crew' onClick={() => setMenuOpen(false)}>
					<span>02</span> Crew
				</NavLink>
				<NavLink className='nav-text' to='/technology' onClick={() => setMenuOpen(false)}>
					<span>03</span> Technology
				</NavLink>
			</nav>
		</HeaderBar>
	)
}

