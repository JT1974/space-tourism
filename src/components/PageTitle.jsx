import styled from 'styled-components'

const Title = styled.h5`
	color: var(--title-color);

	span {
		font-family: var(--sub-font-face);
		font-weight: 700;
		opacity: 0.25;
	}
`

export default function PageTitle(props) {
	return <Title>{props.children}</Title>
}

