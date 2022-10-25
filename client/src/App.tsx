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
		fetch('/api/user')
			.then((responce) => {
				if (responce.status === 404)
					return new Promise<any>((_, reject) =>
						reject({ message: '404 NOT FOUND!' })
					);
				return responce.json();
			})
			.then((result) => setUser(result))
			.catch((error) => setStatus({ code: 'error', message: error.message }));
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
			<Route path='*' element={<Error message='404 NOT FOUND!' />} />
		</Routes>
	);
}

export default App;
