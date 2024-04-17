import React, { useState } from "react"
export default function Props({ content }) {
    const arr = {
        name: "Dhaval Sojitra",
        city: "Rasnal"
    }
    const [name, setname] = useState([arr])
    function set()
    {
        setname([{
            name : "Keval",
            city : "Rajkot"
        }])
    }

    return (
        <>
            <center>

                <h1>{content}</h1>
                <p>{name.map((data) => {
                    return (
                        <>
                            <h2>{data.name}</h2>
                            <h2>{data.city}</h2>
                        </>
                    )
                })}</p>
                <button onClick={set}>Click Me!</button>
            </center>
        </>
    )

}