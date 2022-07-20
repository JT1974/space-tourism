import { NavLink } from 'react-router-dom'

export default function Navigation(props) {
	const links = props.links.map((link, idx) => (
		<NavLink key={idx} to={link.path}>
			{link.text}
		</NavLink>
	))

	return <nav>{links}</nav>
}

