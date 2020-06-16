import * as React from 'react'

const App: React.FC<AppProps> = () => {
	return (
		<div className="flex justify-center border-8 rounded-t-lg border-pink-700 bg-indigo-900 m-5 md:m-20 shadow-2xl">
			<h1 className="text-6xl text-indigo-200">Lol</h1>
		</div>
	)
}

interface AppProps {}

export default App
