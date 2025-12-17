import { useState } from "react";

function Colorchanger(){
    const [color,setColor]=useState("black");
    return(
        <body style={{background:"black"}}>
        <div style={{background:"yellow"}}>
        <h1 style={{color:color}}>This text changes color</h1>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        </div>
        </body>
    );
}

export default Colorchanger;