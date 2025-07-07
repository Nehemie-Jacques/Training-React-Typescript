import React from "react";
import Button from "./components/Button";

const App = () => {
    return (
        <div>
            <Button
               label="Click Me"
               onClick={() => console.log("clicked")}
               disabled={false}
            ></Button>
        </div>
    )
}

export default App;