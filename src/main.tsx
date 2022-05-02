import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './main.css'
import Spinner from './components/common/Spinner'

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Spinner height='80vh' />}>
			<App />
		</Suspense>
	</React.StrictMode>,
	document.getElementById('root')
)
