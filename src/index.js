import React from "react"
import ReactDom from "react-dom/client";

function Greeting() {
    return <h2>Component #1</h2>
}

export default Greeting;
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Greeting />);