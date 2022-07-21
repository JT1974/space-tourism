import { useContext, useState } from 'react'
import { Context } from '../Context'

export default function Technology() {
	const { technology } = useContext(Context)
	const [technologyUsed, setTechnologyUsed] = useState('Launch vehicle')

	const data = technology?.find(tech => tech.name === technologyUsed)

	return (
		<>
			<h5>03 Space launch 101</h5>
			<img src={data?.images.landscape} alt={data?.name} />
			<nav>
				<button
					className={data?.name === 'Launch vehicle' ? 'active' : ''}
					onClick={() => setTechnologyUsed('Launch vehicle')}
				>
					1
				</button>
				<button
					className={data?.name === 'Spaceport' ? 'active' : ''}
					onClick={() => setTechnologyUsed('Spaceport')}
				>
					2
				</button>
				<button
					className={data?.name === 'Space capsule' ? 'active' : ''}
					onClick={() => setTechnologyUsed('Space capsule')}
				>
					3
				</button>
			</nav>
			<h4>The terminology...</h4>
			<h3>{data?.name}</h3>
			<p>{data?.description}</p>
		</>
	)
}

