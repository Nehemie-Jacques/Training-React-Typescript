import ContactForm from "./Components/ContactForm";
import EventHAndling from "./Components/EventHandling";
import FocusInput from "./Components/FocusInput";
import React from "react";

const App: React.FC = () => {
    return (
        <div>
            <ContactForm />
            <EventHAndling />
            <FocusInput />
        </div>
    )
}

export default App