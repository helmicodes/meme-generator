import React from "react"
import memesData from "../memesData"

export default function App() {
    const meme = {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    }

    const [allMemeImages, setallMemeImages] = React.useState(memesData.data.memes)

    const [memeImage, setMemeImage] = React.useState(meme.randomImage)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMemeImage(allMemeImages[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image" />
        </main>
    )
}