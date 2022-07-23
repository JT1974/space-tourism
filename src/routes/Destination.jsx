import { useContext, useState } from 'react'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'
import { Context } from '../Context'

const Hero = styled.section`
	padding-top: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;

	@media screen and (min-width: 768px) {
		padding-top: 2.5rem;
		padding-left: 2.5rem;
	}
`

const Body = styled.section`
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	.image-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;

		img {
			width: 170px;
			height: 170px;
		}
	}

	nav {
		display: flex;
		gap: 1.5rem;

		button {
			background: transparent;
			border: none;
			font-family: var(--sub-font-face);
			font-size: 14px;
			color: var(--button-idle-color);
			line-height: 17px;
			letter-spacing: 2.7px;
			padding-bottom: 8px;
			border-bottom: 3px solid transparent;
			cursor: pointer;

			&:hover {
				border-bottom: 3px solid var(--title-color-hovered);
			}

			&.active {
				color: var(--button-active-color);
				border-bottom: 3px solid var(--button-active-color);
			}
		}
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--horizontal-line);

		h2 {
			color: var(--title-color);
		}

		p {
			color: var(--text-color);
		}
	}

	.planet-data {
		padding: 0 3.5rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		&--top,
		&--btm {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.75rem;
		}

		.subHeading-1 {
			color: var(--title-color);
		}
	}

	@media screen and (min-width: 768px) {
		padding: 0 6rem;

		.image-container {
			padding: 1.5rem 0;

			img {
				width: 300px;
				height: 300px;
			}
		}

		nav button {
			font-size: 16px;
			line-height: 19px;
		}

		article {
			padding-bottom: 3rem;

			h2 {
				margin-bottom: 0.5rem;
			}
		}

		.planet-data {
			padding: 0 3.5rem;
			flex-direction: row;
			justify-content: space-around;
			width: 100%;
		}
	}
`

export default function Destination() {
	const { destinations } = useContext(Context)
	const [destination, setDestination] = useState('Moon')

	const data = destinations?.find(dest => dest.name === destination)

	return (
		<>
			<Hero>
				<PageTitle>
					<span>01</span> Pick your destination
				</PageTitle>
			</Hero>
			<Body>
				<div className='image-container'>
					<img src={data?.images.webp} alt={data?.name} />
				</div>
				<nav>
					<button className={data?.name === 'Moon' ? 'active' : ''} onClick={() => setDestination('Moon')}>
						Moon
					</button>
					<button className={data?.name === 'Mars' ? 'active' : ''} onClick={() => setDestination('Mars')}>
						Mars
					</button>
					<button
						className={data?.name === 'Europa' ? 'active' : ''}
						onClick={() => setDestination('Europa')}
					>
						Europa
					</button>
					<button className={data?.name === 'Titan' ? 'active' : ''} onClick={() => setDestination('Titan')}>
						Titan
					</button>
				</nav>
				<article>
					<h2>{data?.name}</h2>
					<p>{data?.description}</p>
				</article>
				<div className='planet-data'>
					<div className='planet-data--top'>
						<span className='subHeading-2'>Avg. distance</span>
						<span className='subHeading-1'>{data?.distance}</span>
					</div>
					<div className='planet-data--btm'>
						<span className='subHeading-2'>Est. travel time</span>
						<span className='subHeading-1'>{data?.travel}</span>
					</div>
				</div>
			</Body>
		</>
	)
}

