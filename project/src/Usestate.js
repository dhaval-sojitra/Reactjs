import React , {useState} from "react";

function Usestate(){
    const [count , setcount] = useState(5);
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
    </>
    );
}

export default Usestate