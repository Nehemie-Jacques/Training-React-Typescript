import React from "react";

type Info = {
    username: string,
    email: string,
    age: number,
    location: string[],
}

const UserInfo = ({ username, email, age, location }: Info) => {
    return (
        <ul>
           <li>Username: {username}</li>
           <li>Email: {email}</li>
           <li>Age: {age}</li>
           <li>Location: {JSON.stringify(location)}</li>
        </ul>
    )
}

export default UserInfo;