import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then(res => res.json());

const UserInfoComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    // Use SWR to fetch user data
    const { data: userInfo, error } = useSWR(
        id ? `https://dummyjson.com/users/${id}` : null,
        fetcher
    );

    if (error) return <div>Error loading user data</div>;
    if (!userInfo) return <div style={{ textAlign: 'center' }} >Loading...</div>;

    return (
        <div style={{ textAlign: 'center' }}>
            <span>{userInfo.firstName}</span> &nbsp;
            <span>{userInfo.lastName}</span>
            <h1>{userInfo.email}</h1>
            <h2>{userInfo.phone}</h2>
        </div>
    );
}

export default UserInfoComponent;
