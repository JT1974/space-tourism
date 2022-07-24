import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 100%;

	@media screen and (min-width: 1440px) {
		flex-direction: row;
		padding: 0 10rem 8rem;
		align-items: flex-end;
		justify-content: space-between;
	}
`

const Body = styled.section`
	margin-top: 3rem;
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	max-width: 450px;

	@media screen and (min-width: 768px) {
		margin-top: 6.5rem;
		margin-bottom: 7.5rem;
		gap: 2rem;
	}

	@media screen and (min-width: 1440px) {
		margin: 0;
		padding: 0;
		align-items: flex-start;

		p {
			text-align: left;
		}
	}
`

const MainBtn = styled.h4`
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

	@media screen and (min-width: 768px) {
		margin-top: 0;
		width: 242px;
		height: 242px;

		&:hover {
			box-shadow: 0 0 0 5rem rgba(255, 255, 255, 0.1);
		}
	}
`

export default function Home() {
	return (
		<Main>
			<Body>
				<h5>So, you want to travel to</h5>
				<h1>Space</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
					hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
					world experience!
				</p>
			</Body>
			<NavLink to='/destination'>
				<MainBtn>Explore</MainBtn>
			</NavLink>
		</Main>
	)
}

