import { useState,useEffect } from "react";

function App(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Effect ran");
    });

    // useEffect(()=>{
    //     console.log("Effect ran");
    // },[]);

    return(
        <div>
            <h2>Demo</h2>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
}  

export default App;