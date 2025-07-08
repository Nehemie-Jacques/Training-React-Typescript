import React from "react";

/* const User = (props: { name: string; age: number; isStudent: boolean }) => {
    return (
        <main>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.isStudent}</p>
        </main>
    );
};

export default User; */

/* const User = ({
    name, 
    age, 
    isStudent,
} : {
    name: string;
    age: number;
    isStudent: boolean;
}) => {
    return (
        <main>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isStudent}</p>
        </main>
    )
}

export default User; */

/* interface UserShape {
    name: string;
    age: number;
    isStudent: boolean;
}

const User = ({ name, age, isStudent }: UserShape) => {
    return (
        <main>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isStudent}</p>
        </main>
    )
}

export default User; */

import { type ReactNode } from "react";

type Shape = {
    children: ReactNode;
}

const User = ({ children }: Shape) => {
    return <main>{children}</main>
}

export default User;