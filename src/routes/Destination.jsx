import { useContext, useState } from 'react'
import { Context } from '../Context'

export default function Destination() {
	const { destinations } = useContext(Context)
	const [destination, setDestination] = useState('Moon')

	const data = destinations?.find(dest => dest.name === destination)

	return (
		<>
			<h5>01 Pick your destination</h5>
			<img src={data?.images.webp} alt={data?.name} />
			<nav>
				<button className={data?.name === 'Moon' ? 'active' : ''} onClick={() => setDestination('Moon')}>
					Moon
				</button>
				<button className={data?.name === 'Mars' ? 'active' : ''} onClick={() => setDestination('Mars')}>
					Mars
				</button>
				<button className={data?.name === 'Europa' ? 'active' : ''} onClick={() => setDestination('Europa')}>
					Europa
				</button>
				<button className={data?.name === 'Titan' ? 'active' : ''} onClick={() => setDestination('Titan')}>
					Titan
				</button>
			</nav>
			<h2>{data?.name}</h2>
			<p>{data?.description}</p>
			<span className='subHeading-2'>Avg. distance</span>
			<span className='subHeading-1'>{data?.distance}</span>
			<span className='subHeading-2'>Est. travel time</span>
			<span className='subHeading-1'>{data?.travel}</span>
		</>
	)
}

