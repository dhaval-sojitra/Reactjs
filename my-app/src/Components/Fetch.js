import { useState } from "react";

export default function Fetch()
{
    const [data,setdata] = useState([])
    function getdata()
    {
        fetch('https://swapi.dev/api/films').then((response)=>{
            return response.json()
        }).then((list)=>{
            setdata(list.results)
        })
    }
    return(
        <>
            {
                data.map((list)=>{
                    return(
                        <>
                        {console.log(list)}
                        <h1>Title : {list.title}</h1>
                        </>
                    )
                })
            }
            <button onClick={getdata}>Fetch Data</button>
        </>
    );
}