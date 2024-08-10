const UserPage = (props) => {
    return (
        <>
            <h1>user (SSR)</h1>
            {
                props.data.users.map((user) => (<li key={user.id}>{user.firstName}</li>))
            }
        </>
    )
}

export const getServerSideProps = async () => {

    const response = await fetch('https://dummyjson.com/users');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
        props: {
            data,
        }
    };

};

export default UserPage