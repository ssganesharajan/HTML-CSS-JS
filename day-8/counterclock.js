import { useState } from "react";

function Counterclock(){
const [count,setcount]=useState(0)
    return(
        <div style={{display:"flex",gap:"30px",margin:"20px"}}>
            <h1>{count}</h1>
            <button id="b1" onClick={()=>setcount(count+1)}>+</button>
            <button id="b1" onClick={()=>setcount(count-1)}>-</button>
        </div>
    );
}

export default Counterclock;
//put file in src
// ------------------------index.js-----------------------------------------