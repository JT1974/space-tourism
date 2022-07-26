import { useContext, useState } from 'react'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'
import { Context } from '../Context'

const Main = styled.main`
	grid-column: 2/3;
	justify-self: center;
	display: grid;
	grid-template-rows: 44px auto auto;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 100%;
	max-width: 500px;
	height: 100%;

	.page-title {
		padding-top: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.image-container {
		align-self: end;
		justify-self: center;
		height: 170px;
		width: 375px;
		display: flex;
		justify-content: center;
		align-items: flex-end;

		img {
			height: 100%;
			width: 100%;
		}
	}

	.page-body {
		align-self: start;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 2rem;
		height: 100%;
		padding: 0 1.5rem;

		.data-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			width: 100%;
			height: 270px;
			margin-bottom: 5rem;

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
					transition: all 0.5s ease-in-out;

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
					max-width: 500px;
				}
			}
		}
	}

	@media screen and (min-width: 768px) {
		grid-template-rows: 64px auto auto;
		max-width: 768px;

		.page-title {
			padding-top: 2.5rem;
			padding-left: 2.5rem;
		}

		.image-container {
			height: 310px;
			width: 768px;
		}

		.page-body {
			padding: 0 10rem;
			.data-container {
				height: auto;

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
				}
			}
		}
	}

	@media screen and (min-width: 1440px) {
		max-width: 1440px;
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr auto;
		padding-left: 10rem;
		row-gap: 1.5rem;
		column-gap: 7rem;

		.page-title {
			grid-row: 1/2;
			grid-column: 1/3;
			padding-top: 5rem;
			padding-left: 0;
			margin-bottom: 0;
		}

		.image-container {
			width: 515px;
			height: 636px;
			grid-row: 2/3;
			grid-column: 2/3;
			align-self: center;
			align-items: flex-start;

			img {
				height: 527px;
			}
		}

		.page-body {
			grid-row: 2/3;
			grid-column: 1/2;
			padding: 0;
			justify-content: center;

			.data-container {
				flex-direction: row;
				gap: 6rem;
				margin: 0;
				padding-top: 6rem;
				height: 636px;
				align-items: flex-start;

				nav {
					flex-direction: column;

					button {
						width: 80px;
						height: 80px;
						font-size: 32px;
						line-height: 37px;
					}
				}

				article {
					align-items: flex-start;

					p {
						text-align: left;
					}
				}
			}
		}
	}
`

export default function Technology({ width }) {
	const { technology } = useContext(Context)
	const [technologyUsed, setTechnologyUsed] = useState('Launch vehicle')

	const data = technology?.find(tech => tech.name === technologyUsed)

	return (
		<Main>
			<section className='page-title'>
				<PageTitle>
					<span>03</span> Space launch 101
				</PageTitle>
			</section>
			<div className='image-container'>
				<img src={width < 1440 ? data?.images.landscape : data?.images.portrait} alt={data?.name} />
			</div>
			<section className='page-body'>
				<div className='data-container'>
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
				</div>
			</section>
		</Main>
	)
}

