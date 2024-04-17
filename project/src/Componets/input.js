import React, { useEffect, useRef, useState } from "react";
export default function Input(){
    const nameref = useRef('')
    const cityref = useRef('')

    const[name,setname] = useState("")
    const[city, setcity] = useState("")
    useEffect(()=>{
        console.log("Working...")
        if(name.includes("Dhaval"))
        {
            alert("Welcome Dhaval")
        }
        console.log()
    },[name])

  

    const onsubmithand = (e)=>{
        
        alert(`Name : ${nameref.current.value},City : ${cityref.current.value}`)
    }
    return(
        <>
        <center>

            <form onSubmit={onsubmithand}>
                <label>Name :</label>
                <input type="text" ref={nameref} onChange={(e) =>setname(e.target.value)}/><br></br>
                <label>City :</label>
                <input type="text" ref={cityref} onChange={(e) =>setcity(e.target.value)}/><br></br>
                <button type="submit">Submit</button>
            </form>
            <h2>Name :{name}</h2>
            <h2>City :{city}</h2>          
        </center>
        </>
    )
}