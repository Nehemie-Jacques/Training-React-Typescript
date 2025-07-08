import React from "react";
import { FC } from "react";

interface Shape {
    name: string;
    age: number;
    isStudent: boolean;
}

const User : FC<Shape> = ({ name, age, isStudent }) => {
    return (
        <article>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isStudent}</p>
        </article>
    )
}

export default User;