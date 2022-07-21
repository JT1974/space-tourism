import React, { useEffect, useState } from 'react'
const Context = React.createContext()

function ContextProvider(props) {
	const [JSONData, setJSONData] = useState([])

	useEffect(() => {
		fetch('./assets/data.json')
			.then(res => res.json())
			.then(data => setJSONData(data))
	}, [])

	return (
		<Context.Provider
			value={{
				destinations: JSONData.destinations,
				crew: JSONData.crew,
				technology: JSONData.technology,
			}}
		>
			{props.children}
		</Context.Provider>
	)
}

export { ContextProvider, Context }

