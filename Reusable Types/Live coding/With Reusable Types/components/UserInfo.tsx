import React from "react";
import { type Info } from "./UserInfo";

type AdminInfoList = Info & {
    admin: string;
}

const AdminInfo = ({ 
    username,
    email,
    age,
    location, 
    admin,
}: AdminInfoList) => {
    return (
        <ul>
            <li> Username: {username}</li>
            <li>Email: {email}</li>
            <li>Age: {age}</li>
            <li>Location: {JSON.stringify(location)}</li>
            <li>Admin: {admin}</li>
        </ul>
    )
}

export default AdminInfo;