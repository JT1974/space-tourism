import { useContext, useState } from 'react'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'
import { Context } from '../Context'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;

	@media screen and (min-width: 1440px) {
		flex-direction: row;
	}
`

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
		margin-bottom: 1.5rem;
	}
`

const Body = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100vw;

	.image-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-end;

		img {
			width: 100%;
		}
	}

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
			font-size: 16px;
			line-height: 18px;

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
		padding: 1.5rem;

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

	@media screen and (min-width: 768px) {
		nav {
			margin-top: 1.5rem;

			button {
				width: 60px;
				height: 60px;
				font-size: 24px;
				line-height: 27.5px;
			}
		}

		article {
			padding-top: 0.75rem;
			width: 500px;
		}
	}
`

export default function Technology() {
	const { technology } = useContext(Context)
	const [technologyUsed, setTechnologyUsed] = useState('Launch vehicle')

	const data = technology?.find(tech => tech.name === technologyUsed)

	return (
		<Main>
			<Hero>
				<PageTitle>
					<span>03</span> Space launch 101
				</PageTitle>
			</Hero>
			<Body>
				<div className='image-container'>
					<img src={data?.images.landscape} alt={data?.name} />
				</div>
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
		</Main>
	)
}

