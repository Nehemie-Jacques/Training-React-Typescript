import React from "react";

type AInfo = { 
    username: string;
    email: string;
    age: number;
    location: string[];
    admin: string; 
} 

const AdminInfo = ({ username, email, age, location, admin }: AInfo) => {
    return (
        <ul>
           <li>Username: {username}</li>
           <li>Email: {email}</li>
           <li>Age: {age}</li>
           <li>Location: {JSON.stringify(location)}</li>
           <li>Admin: {admin}</li>
        </ul>
    )
}

export default AdminInfo;
