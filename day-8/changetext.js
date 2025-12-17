import { useState } from "react";

function NameDisplay(){
    const [name,setname] = useState("");

    return(
        <div>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setname(e.target.value)}/>
            <h3>Hello {name}</h3>
        </div>
    );
}

export default NameDisplay;