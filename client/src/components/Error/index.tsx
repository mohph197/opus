function Error(props: {message: string}) {
    return (
        <section className="h-screen bg-red-800 flex justify-center items-center">
            <h1 className="text-4xl text-center font-semibold text-white">{props.message}</h1>
        </section>
    );
}

export default Error;