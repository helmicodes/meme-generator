import React from "react"
import memeLogo from "../assets/troll-face.png"

export default function App() {

    return (
        <header className="header">
            <img
                src={memeLogo}
                 className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}