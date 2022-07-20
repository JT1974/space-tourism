import Navigation from './Navigation'

export default function Header() {
	return (
		<header>
			<img src='/assets/shared/logo.svg' alt='Space tourism' />
			<img src='/assets/shared/icon-hamburger.svg' alt='Open menu' />
			<img src='/assets/shared/icon-close.svg' alt='Close menu' />
			<Navigation
				links={[
					{
						path: '/',
						text: '00 Home',
					},
					{
						path: '/destination',
						text: '01 Destination',
					},
					{
						path: '/crew',
						text: '02 Crew',
					},
					{
						path: '/technology',
						text: '03 Technology',
					},
				]}
			/>
		</header>
	)
}

