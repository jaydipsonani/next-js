import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const UserPage = () => {

    const { data, error } = useSWR("https://dummyjson.com/users", fetcher)

    console.log("data", data)

    if (error) {
        return (
            <h1>error happened</h1>
        )
    }

    if (!data) {
        return (
            <h2 style={{ textAlign: 'center' }}>Loading...</h2>
        )
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '20px' }}>User Page</h1>
            {data.users && data.users.map((user) => {
                return (
                    <>
                        <div style={{ textAlign: 'center' }}>
                            <Link href={`/users/${user.id}`} key={user.id}>
                                <div>{user.firstName}</div>
                            </Link>
                        </div>
                    </>
                )
            })}
        </>
    );
};

export default UserPage;
