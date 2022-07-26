import { useContext, useState } from 'react'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'
import { Context } from '../Context'

const Main = styled.main`
	grid-column: 2/3;
	justify-self: center;
	display: grid;
	grid-template-rows: auto 1fr 1fr;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 100%;
	max-width: 500px;
	height: 100%;
	padding: 0 1.5rem;

	.page-title {
		padding-top: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.image-container {
		align-self: end;
		width: 100%;
		height: 267px;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid var(--horizontal-line);

		img {
			height: 100%;
		}
	}

	.page-body {
		align-self: start;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		.data-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			width: 100%;

			nav {
				display: flex;
				gap: 1rem;

				button {
					cursor: pointer;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					border: none;
					background-color: var(--button-active-color);
					opacity: 0.17;
					transition: all 0.5s ease-in-out;

					&:hover {
						opacity: 0.5;
					}

					&.active {
						opacity: 1;
					}
				}
			}

			article {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				height: 225px;

				h3 {
					color: var(--title-color);
					margin-bottom: 1rem;
				}

				h4 {
					color: var(--title-color);
					opacity: 0.5;
					margin-bottom: 0.5rem;
				}

				p {
					color: var(--text-color);
				}
			}
		}
	}

	@media screen and (min-width: 768px) {
		grid-template-rows: auto 1fr 536px;
		max-width: 768px;
		justify-content: stretch;
		height: 100%;
		padding: 0;

		.page-title {
			padding-top: 2.5rem;
			padding-left: 2.5rem;
		}

		.image-container {
			align-self: flex-end;
			border: none;
			height: 100%;

			img {
				height: 536px;
			}
		}

		.page-body {
			grid-row: 2/3;
			flex-direction: column-reverse;
			justify-content: center;
			align-self: center;
			padding: 0 6rem;
			gap: 2.5rem;

			.data-container {
				flex-direction: column-reverse;

				article {
					margin-top: 2rem;
					height: auto;

					p {
						height: 112px;
					}
				}
			}
		}
	}

	@media screen and (min-width: 1440px) {
		grid-template-rows: auto 1fr;
		grid-template-columns: 1fr auto;
		max-width: 1440px;
		width: 1440px;
		align-items: stretch;
		padding: 0 6rem 0 10rem;
		gap: 0;

		.page-title {
			grid-row: 1/2;
			grid-column: 1/2;
			padding: 0;
			padding-top: 5rem;
		}

		.image-container {
			grid-row: 1/3;
			grid-column: 2/3;
			align-items: end;
			padding-top: 4rem;

			img {
				height: 600px;
			}
		}

		.page-body {
			grid-row: 2/3;
			grid-column: 1/2;
			padding: 0;
			gap: 6rem;

			.data-container {
				align-items: flex-start;
				padding: 0;
				gap: 7.5rem;

				nav {
					button {
						width: 15px;
						height: 15px;
					}
				}

				article {
					align-items: flex-start;
					margin-top: 0;

					h3 {
						margin-bottom: 2.5rem;
					}

					h4 {
						margin-bottom: 1rem;
					}

					p {
						text-align: left;
						width: 445px;
					}
				}

				.planet-data {
					justify-content: flex-start;
					gap: 5rem;
					padding: 0;

					&--top,
					&--btm {
						align-items: flex-start;
					}
				}
			}
		}
	}
`

export default function Crew() {
	const { crew } = useContext(Context)
	const [member, setMember] = useState('Douglas Hurley')

	const data = crew?.find(cr => cr.name === member)

	return (
		<Main>
			<section className='page-title'>
				<PageTitle>
					<span>02</span> Meet your crew
				</PageTitle>
			</section>
			<div className='image-container'>
				<img src={data?.images.webp} alt={data?.name} />
			</div>
			<section className='page-body'>
				<div className='data-container'>
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
					<article>
						<h4>{data?.role}</h4>
						<h3>{data?.name}</h3>
						<p>{data?.bio}</p>
					</article>
				</div>
			</section>
		</Main>
	)
}

