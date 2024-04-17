import React from "react";
export default function Condition({name}){

    let content;
    
            if(name)
            {
                
                content =  <h2>Welcome..Dhaval</h2>
            }
            else{
                  content = <h2>You Are Not Signin..</h2>
            }
        
    
    return(
        <>
        <center>
            <h2>{content}</h2>
            {/* <button onClick={set}>Click Me!</button> */}
        </center>
        </>
    )
}