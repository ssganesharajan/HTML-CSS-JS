import { useState,useEffect } from "react";

function App(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Ganesh");

    useEffect(()=>{
        console.log("Effect ran become NAME changed");
    },[name]);//dependancy is name,not count

    return(
        <div>
            <h2>Demo</h2>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <p>NAME:{name}</p>
            <button onClick={()=>setName("Rajan")}>Change Name</button>
        </div>
    );
}  

export default App;