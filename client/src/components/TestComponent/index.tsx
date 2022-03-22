import { Link } from 'react-router-dom';

function TestComponent() {
	return (
		<section className='h-screen flex flex-col items-center justify-center'>
			<Link to={'/user'}>Goto User</Link>
		</section>
	);
}

export default TestComponent;
