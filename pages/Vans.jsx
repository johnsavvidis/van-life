import React from "react"

export default function Vans() {
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    
    return (
        <h1>Vans page goes here 🚐</h1>
    )
}