import React from "react";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import type { Info, AdminInfoList } from "./types";

const App = () => {
    const user : Info = {
        id: 1,
        name: "John Doe",
        email: "gY6f0@example.com",
    }

    const admin : AdminInfoList = {
        id: 2,
        name: "John Doe",
        email: "gY6f0@example.com",
        role: "Admin",
        lastLogin: new Date(),
    }

    return (
        <div>
            <UserInfo user={user}/>
            <AdminInfo admin={admin}/>
        </div>
    )
}

export default App