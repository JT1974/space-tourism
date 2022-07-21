import { useContext, useState } from 'react'
import { Context } from '../Context'

export default function Crew() {
	const { crew } = useContext(Context)
	const [member, setMember] = useState('Douglas Hurley')

	const data = crew?.find(cr => cr.name === member)

	return (
		<>
			<h5>02 Meet your crew</h5>
			<img src={data?.images.webp} alt={data?.name} />
			<nav>
				<button
					className={data?.name === 'Douglas Hurley' ? 'active' : ''}
					onClick={() => setMember('Douglas Hurley')}
				></button>
				<button
					className={data?.name === 'Mark Shuttleworth' ? 'active' : ''}
					onClick={() => setMember('Mark Shuttleworth')}
				></button>
				<button
					className={data?.name === 'Victor Glover' ? 'active' : ''}
					onClick={() => setMember('Victor Glover')}
				></button>
				<button
					className={data?.name === 'Anousheh Ansari' ? 'active' : ''}
					onClick={() => setMember('Anousheh Ansari')}
				></button>
			</nav>
			<h4>{data?.role}</h4>
			<h3>{data?.name}</h3>
			<p>{data?.bio}</p>
		</>
	)
}

