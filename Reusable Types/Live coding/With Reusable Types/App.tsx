import React from "react";
import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

export default function Home() {
    return (
        <>
           <h1>Users Info 👇</h1> 
           <UserInfo 
               username="Alex"
               email="n3g0l@example.com"
               age={20}
               location={["Lisbon", "Portugal"]}
           /> 
           
           <h1>Admin Info 👇</h1> 
           <AdminInfo 
               username="Robert"
               email="kedef@example.com"
               age={25}
               location={["Barcelona", "Espagne"]}
               admin="Admin"
           />
        </>
    )
}