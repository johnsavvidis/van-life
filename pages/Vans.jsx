import React from "react"

export default function Vans() {
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    
    return (
        <div>
            <h1>Vans page goes here 🚐</h1>
            <button>More vans here!</button>
        </div>
    )
}