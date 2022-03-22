function Error(props: {message: string}) {
    return (
        <h1 className="text-center">{props.message}</h1>
    );
}

export default Error;