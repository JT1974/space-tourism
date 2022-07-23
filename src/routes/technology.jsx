import { useContext, useState } from 'react'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'
import { Context } from '../Context'

const Hero = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	border-bottom: 1px solid var(--horizontal-line);

	img {
		height: 170px;
	}

	@media screen and (min-width: 1440px) {
		flex-direction: row;
	}
`

const Body = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	nav {
		display: flex;
		gap: 1rem;

		button {
			cursor: pointer;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			border: 1px solid var(--white-25);
			background: transparent;
			color: var(--title-color);

			&:hover {
				border: 1px solid var(--title-color);
			}

			&.active {
				background-color: var(--button-active-color);
				color: var(--background-color);
			}
		}
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h3 {
			color: var(--title-color);
			margin-bottom: 1rem;
		}

		.subHeading-2 {
			margin-bottom: 0.5rem;
		}

		p {
			color: var(--text-color);
		}
	}
`

export default function Technology() {
	const { technology } = useContext(Context)
	const [technologyUsed, setTechnologyUsed] = useState('Launch vehicle')

	const data = technology?.find(tech => tech.name === technologyUsed)

	return (
		<>
			<Hero>
				<PageTitle>
					<span>03</span> Space launch 101
				</PageTitle>
				<img src={data?.images.landscape} alt={data?.name} />
			</Hero>
			<Body>
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
				<article>
					<span className='subHeading-2'>The terminology...</span>
					<h3>{data?.name}</h3>
					<p>{data?.description}</p>
				</article>
			</Body>
		</>
	)
}

