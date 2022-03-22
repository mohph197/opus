import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Error from './components/Error';
import Loader from './components/Loader';
import TestComponent from './components/TestComponent';
import User from './components/User';

function App() {
	const [user, setUser] = useState(null);
	const [status, setStatus] = useState({ code: 'loading', message: '' });

	useEffect(() => {
		fetch(`http://localhost:5000/api/user`)
			.then(
				(value) => value.json(),
				(error) => setStatus({ code: 'error', message: error.message })
			)
			.then((result) => setUser(result));
	}, []);

	return (
		<Routes>
			<Route path='/' element={<TestComponent />} />
			<Route
				path='/user'
				element={
					user ? (
						<User user={user} />
					) : status.code === 'loading' ? (
						<Loader />
					) : (
						<Error message={status.message} />
					)
				}
			/>
		</Routes>
	);
}

export default App;

