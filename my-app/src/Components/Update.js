import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Update()
{
    const nameref = useRef("");
    const [n,setn] = useState("")
    const [data,setdata] = useState("");
    function datahandle(e)
    {
        setdata(e.target.value);
    }
    useEffect(()=>{
        ref()
    },[data])
    function ref(e)
    {
        setn(nameref.current.value)
    }
    return(
        <>
        <label>{data}</label><br></br>
        <input type="text" ref={nameref} onChange={datahandle}></input>
        <p>{n}</p>
        <button>Click</button>
        </>
    );
        
}