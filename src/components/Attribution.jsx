import styled from 'styled-components'

const AttributionContainer = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0.5rem 1rem;
	grid-row: 3/4;
	grid-column: 1/4;
	background: rgba(0, 0, 0, 0.5);

	font-family: sans-serif;
	font-size: 0.6rem;
	font-weight: normal;
	text-align: center;
	text-transform: initial;
	color: var(--attribution-text-color);

	a {
		font-family: inherit;
		color: var(--attribution-attr-color);
		font-weight: bold;
		text-decoration: none;
		padding-left: 0.5em;
	}
`

export default function Attribution() {
	return (
		<AttributionContainer>
			Challenge by
			<a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>
				Frontend Mentor
			</a>
			. Coded by
			<a href='https://github.com/JT1974' target='_blank' rel='noreferrer'>
				Janos Takacs
			</a>
			.
		</AttributionContainer>
	)
}

