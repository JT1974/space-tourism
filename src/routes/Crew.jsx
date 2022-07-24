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
		border-bottom: 1px solid var(--horizontal-line);

		img {
			height: 222px;
		}
	}

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
		justify-content: center;
		align-items: center;

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

	@media screen and (min-width: 768px) {
		flex-direction: column-reverse;
		gap: 2.5rem;

		article {
			margin-top: 2rem;

			p {
				width: 592px;
				height: 84px;
			}
		}
		.image-container {
			position: absolute;
			bottom: 0;
			border: none;

			img {
				height: 532px;
			}
		}
	}
`

export default function Crew() {
	const { crew } = useContext(Context)
	const [member, setMember] = useState('Douglas Hurley')

	const data = crew?.find(cr => cr.name === member)

	return (
		<>
			<Hero>
				<PageTitle>
					<span>02</span> Meet your crew
				</PageTitle>
			</Hero>
			<Body>
				<div className='image-container'>
					<img src={data?.images.webp} alt={data?.name} />
				</div>
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
			</Body>
		</>
	)
}

