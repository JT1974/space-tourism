import MainNavigation from './MainNavigation'

export default function Header() {
	return (
		<header>
			<img src='/space-tourism/assets/shared/logo.svg' alt='Space tourism' />
			<img src='/space-tourism/assets/shared/icon-hamburger.svg' alt='Open menu' />
			<img src='/space-tourism/assets/shared/icon-close.svg' alt='Close menu' />
			<MainNavigation />
		</header>
	)
}

