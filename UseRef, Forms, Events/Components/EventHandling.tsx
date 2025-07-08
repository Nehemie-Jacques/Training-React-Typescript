import React from "react";

const EventHAndling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Button entered!", e.currentTarget);
    }

    const hanfleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("Mouse entered!", e.currentTarget);
    }

    return (
        <div onMouseEnter={hanfleMouseEnter}>
            <h2>Event Handling Example</h2>
            <button onClick={handleClick}>Click Me !</button>
        </div>
    )
}

export default EventHAndling;