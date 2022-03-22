function User(props: { user: { name: string; object: string; }; }) {
    const { user } = props;

    return (
		<section className='h-screen flex flex-col items-center justify-center gap-6'>
            <h1 className="text-4xl font-bold">{user.name}</h1>
            <p className="text-2xl">{user.object}</p>
        </section>
    );
}
 
export default User;