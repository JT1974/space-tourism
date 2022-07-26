import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
	grid-column: 2/3;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;
	max-width: 500px;

	section {
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	h4 {
		margin-top: 3rem;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background-color: var(--title-color);
		display: grid;
		place-content: center;
		color: var(--background-color);
		cursor: pointer;

		&:hover {
			box-shadow: 0 0 0 3rem rgba(255, 255, 255, 0.1);
		}
	}

	@media screen and (min-width: 768px) {
		max-width: 768px;
		padding: 0 3rem;

		section {
			padding: 0;
			margin-bottom: 7.5rem;
			gap: 2rem;
		}

		h4 {
			margin-top: 0;
			width: 242px;
			height: 242px;

			&:hover {
				box-shadow: 0 0 0 5rem rgba(255, 255, 255, 0.1);
			}
		}
	}

	@media screen and (min-width: 1440px) {
		flex-direction: row;
		padding: 0 10rem;
		align-items: flex-end;
		justify-content: space-between;
		max-width: 1440px;
		justify-self: center;
		gap: 24rem;

		section {
			margin: 0;
			padding: 0;
			align-items: flex-start;

			p {
				text-align: left;
			}
		}

		h4 {
			width: 274px;
			height: 274px;

			&:hover {
				box-shadow: 0 0 0 5.5rem rgba(255, 255, 255, 0.1);
			}
		}
	}
`

export default function Home() {
	return (
		<Main>
			<section>
				<h5>So, you want to travel to</h5>
				<h1>Space</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
					hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
					world experience!
				</p>
			</section>
			<NavLink to='/destination'>
				<h4>Explore</h4>
			</NavLink>
		</Main>
	)
}

