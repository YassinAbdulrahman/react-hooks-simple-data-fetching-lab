// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [src, setSrc] = useState("")
    const [isLoding, setIsLoading] = useState(false)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setSrc(data.message))
            .then(error => setIsLoading(true))
    }, [])
    if (!isLoding) return <p>Loading...</p>;
    return (
        <>
            <img src={src} alt="A Random Dog" />
        </>

    )
}

export default App